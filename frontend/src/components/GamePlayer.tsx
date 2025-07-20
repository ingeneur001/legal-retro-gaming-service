import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animationen
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const gameGlow = keyframes`
  0%, 100% { box-shadow: 0 0 10px #00ffff; }
  50% { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff; }
`;

// Styled Components
const GamePlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  margin: 2rem auto;
  padding: 20px;
  background: linear-gradient(145deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid #00ffff;
  border-radius: 15px;
  animation: ${gameGlow} 3s ease-in-out infinite;
`;

const GameTitle = styled.h2`
  color: #00ffff;
  margin-bottom: 15px;
  font-size: 1.8rem;
  text-align: center;
  font-weight: 700;
`;

const GameScreen = styled.div<{ isActive: boolean }>`
  width: 640px;
  height: 480px;
  background: ${props => props.isActive ? '#000' : '#111'};
  border: 3px solid #00ffff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${props => props.isActive && css`
    animation: ${pulse} 2s ease-in-out infinite;
  `}
`;

const GameCanvas = styled.canvas`
  width: 100%;
  height: 100%;
  background: #000;
`;

const GameContent = styled.div`
  color: #00ffff;
  text-align: center;
  font-size: 1.2rem;
  padding: 20px;
  
  h3 {
    color: #ffff00;
    margin-bottom: 15px;
    font-size: 1.5rem;
  }
  
  p {
    margin: 10px 0;
    line-height: 1.6;
  }
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 20px;
`;

const ControlButton = styled.button<{ variant?: 'primary' | 'secondary' | 'success' }>`
  background: ${props => 
    props.variant === 'primary' ? 'linear-gradient(45deg, #ff6b35, #f7931e)' :
    props.variant === 'success' ? 'linear-gradient(45deg, #00ff00, #00cc00)' :
    'linear-gradient(45deg, #00ffff, #0099cc)'};
  border: none;
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.5);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const GameSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  width: 100%;
  margin-bottom: 20px;
`;

const GameCard = styled.div<{ selected: boolean }>`
  background: ${props => props.selected ? 
    'linear-gradient(145deg, #00ffff20, #ff00ff20)' : 
    'linear-gradient(145deg, #1a1a2e, #16213e)'};
  border: 2px solid ${props => props.selected ? '#00ffff' : '#666'};
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ffff;
    transform: translateY(-3px);
  }

  h4 {
    color: #00ffff;
    margin-bottom: 8px;
    font-size: 1.1rem;
  }

  p {
    color: #ccc;
    font-size: 0.9rem;
    margin: 0;
  }
`;

const DebugPanel = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid #ff0000;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  color: #ff0000;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
`;

// Game-Daten
interface GameData {
  id: string;
  name: string;
  description: string;
  type: 'demo' | 'puzzle' | 'arcade';
}

// Snake-Game Typen
interface Position {
  x: number;
  y: number;
}

interface SnakeGame {
  snake: Position[];
  food: Position;
  direction: string;
  score: number;
  gameRunning: boolean;
}

const availableGames: GameData[] = [
  {
    id: 'snake',
    name: '🐍 Snake Game',
    description: 'Real Snake with Canvas graphics!',
    type: 'arcade'
  },
  {
    id: 'memory',
    name: '🧠 Memory Game',
    description: 'Test your memory with cards',
    type: 'puzzle'
  },
  {
    id: 'pong',
    name: '🏓 Pong Demo',
    description: 'Simple Pong game simulation',
    type: 'arcade'
  },
  {
    id: 'tetris',
    name: '🧩 Tetris Demo',
    description: 'Tetris-style block game',
    type: 'puzzle'
  }
];

// Snake-Game Konstanten
const GRID_SIZE = 20;
const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const GRID_WIDTH = CANVAS_WIDTH / GRID_SIZE;
const GRID_HEIGHT = CANVAS_HEIGHT / GRID_SIZE;

// GamePlayer Component
const GamePlayer: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'paused' | 'gameover'>('idle');
  const [debugLogs, setDebugLogs] = useState<string[]>([]);
  const [eventListenerActive, setEventListenerActive] = useState(false);
  
  // Snake-Game State
  const [snakeGame, setSnakeGame] = useState<SnakeGame>({
    snake: [{x: 10, y: 10}],
    food: {x: 15, y: 15},
    direction: 'RIGHT',
    score: 0,
    gameRunning: false
  });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number | NodeJS.Timeout | undefined>(undefined);
  const gameRef = useRef<HTMLDivElement>(null);

  // Debug-Log hinzufügen
  const addDebugLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setDebugLogs(prev => [...prev.slice(-4), `${timestamp}: ${message}`]);
    console.log(`🐛 ${timestamp}: ${message}`);
  };

  // Snake-Game: Food generieren
  const generateFood = useCallback((snake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_WIDTH),
        y: Math.floor(Math.random() * GRID_HEIGHT)
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  // Snake-Game: Zeichnen
  const drawGame = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvas leeren
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Snake zeichnen
    ctx.fillStyle = '#00ff00';
    snakeGame.snake.forEach((segment, index) => {
      // Kopf heller machen
      if (index === 0) {
        ctx.fillStyle = '#00ff88';
      } else {
        ctx.fillStyle = '#00ff00';
      }
      
      ctx.fillRect(
        segment.x * GRID_SIZE + 1,
        segment.y * GRID_SIZE + 1,
        GRID_SIZE - 2,
        GRID_SIZE - 2
      );
    });

    // Food zeichnen
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(
      snakeGame.food.x * GRID_SIZE + 2,
      snakeGame.food.y * GRID_SIZE + 2,
      GRID_SIZE - 4,
      GRID_SIZE - 4
    );

    // Score anzeigen
    ctx.fillStyle = '#00ffff';
    ctx.font = '20px Orbitron, monospace';
    ctx.fillText(`Score: ${snakeGame.score}`, 10, 30);
  }, [snakeGame]);

  // Snake-Game: Update-Logic
  const updateSnake = useCallback(() => {
    if (!snakeGame.gameRunning) return;

    setSnakeGame(prevGame => {
      const newSnake = [...prevGame.snake];
      const head = {...newSnake[0]};

      // Bewegung basierend auf Richtung
      switch (prevGame.direction) {
        case 'UP':    head.y -= 1; break;
        case 'DOWN':  head.y += 1; break;
        case 'LEFT':  head.x -= 1; break;
        case 'RIGHT': head.x += 1; break;
      }

      // Wand-Kollision prüfen
      if (head.x < 0 || head.x >= GRID_WIDTH || head.y < 0 || head.y >= GRID_HEIGHT) {
        addDebugLog('🐍 Wall collision - Game Over!');
        setGameStatus('gameover');
        setIsGameActive(false);
        return { ...prevGame, gameRunning: false };
      }

      // Selbst-Kollision prüfen
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        addDebugLog('🐍 Self collision - Game Over!');
        setGameStatus('gameover');
        setIsGameActive(false);
        return { ...prevGame, gameRunning: false };
      }

      // Neuen Kopf hinzufügen
      newSnake.unshift(head);

      // Food gefressen?
      if (head.x === prevGame.food.x && head.y === prevGame.food.y) {
        const newScore = prevGame.score + 10;
        const newFood = generateFood(newSnake);
        addDebugLog(`🍎 Food eaten! Score: ${newScore}`);
        setGameScore(newScore);
        
        return {
          ...prevGame,
          snake: newSnake,
          food: newFood,
          score: newScore
        };
      } else {
        // Schwanz entfernen (normale Bewegung)
        newSnake.pop();
        return {
          ...prevGame,
          snake: newSnake
        };
      }
    });
  }, [snakeGame.gameRunning, generateFood]);

  // Game-Loop
  useEffect(() => {
    if (selectedGame === 'snake' && gameStatus === 'playing') {
      const gameLoop = () => {
        updateSnake();
        drawGame();
        gameLoopRef.current = setTimeout(gameLoop, 150); // Snake-Geschwindigkeit
      };

      if (snakeGame.gameRunning) {
        gameLoopRef.current = setTimeout(gameLoop, 150);
      }

      return () => {
        if (gameLoopRef.current) {
          clearTimeout(gameLoopRef.current);
          gameLoopRef.current = undefined;
        }
      };
    }
  }, [selectedGame, gameStatus, snakeGame.gameRunning, updateSnake, drawGame]);

  // Zeichnen wenn sich Snake-State ändert
  useEffect(() => {
    if (selectedGame === 'snake' && canvasRef.current) {
      drawGame();
    }
  }, [selectedGame, snakeGame, drawGame]);

  // Keyboard-Handler für Spiele
  useEffect(() => {
    addDebugLog(`🔧 useEffect triggered - isGameActive: ${isGameActive}, gameStatus: ${gameStatus}`);
    
    const handleKeyPress = (event: KeyboardEvent) => {
      addDebugLog(`🎮 Key pressed: "${event.key}" - Active: ${isGameActive}, Status: ${gameStatus}`);
      
      // Snake-Game Steuerung
      if (selectedGame === 'snake' && gameStatus === 'playing') {
        switch (event.key) {
          case 'ArrowUp':
          case 'w':
          case 'W':
            if (snakeGame.direction !== 'DOWN') {
              setSnakeGame(prev => ({ ...prev, direction: 'UP' }));
              addDebugLog('🐍 Direction: UP');
            }
            break;
          case 'ArrowDown':
          case 's':
          case 'S':
            if (snakeGame.direction !== 'UP') {
              setSnakeGame(prev => ({ ...prev, direction: 'DOWN' }));
              addDebugLog('🐍 Direction: DOWN');
            }
            break;
          case 'ArrowLeft':
          case 'a':
          case 'A':
            if (snakeGame.direction !== 'RIGHT') {
              setSnakeGame(prev => ({ ...prev, direction: 'LEFT' }));
              addDebugLog('🐍 Direction: LEFT');
            }
            break;
          case 'ArrowRight':
          case 'd':
          case 'D':
            if (snakeGame.direction !== 'LEFT') {
              setSnakeGame(prev => ({ ...prev, direction: 'RIGHT' }));
              addDebugLog('🐍 Direction: RIGHT');
            }
            break;
          case ' ':
            event.preventDefault();
            addDebugLog('🎮 Space pressed - toggle game');
            toggleGame();
            break;
          default:
            addDebugLog(`🎮 Other key: "${event.key}"`);
        }
      } else {
        // Andere Games
        switch (event.key) {
          case 'ArrowUp':
          case 'w':
          case 'W':
            addDebugLog('🎮 UP command detected');
            break;
          case 'ArrowDown':
          case 's':
          case 'S':
            addDebugLog('🎮 DOWN command detected');
            break;
          case 'ArrowLeft':
          case 'a':
          case 'A':
            addDebugLog('🎮 LEFT command detected');
            break;
          case 'ArrowRight':
          case 'd':
          case 'D':
            addDebugLog('🎮 RIGHT command detected');
            break;
          case ' ':
            event.preventDefault();
            addDebugLog('🎮 SPACE pressed - toggle game');
            toggleGame();
            break;
          default:
            addDebugLog(`🎮 Other key: "${event.key}"`);
        }
      }
    };

    addDebugLog('🔧 Adding keyboard event listener to window');
    window.addEventListener('keydown', handleKeyPress);
    setEventListenerActive(true);
    
    return () => {
      addDebugLog('🔧 Removing keyboard event listener');
      window.removeEventListener('keydown', handleKeyPress);
      setEventListenerActive(false);
    };
  }, [isGameActive, gameStatus, selectedGame, snakeGame.direction]);

  const selectGame = (gameId: string) => {
    setSelectedGame(gameId);
    setGameStatus('idle');
    setGameScore(0);
    setIsGameActive(false);
    
    // Snake-Game zurücksetzen
    if (gameId === 'snake') {
      setSnakeGame({
        snake: [{x: 10, y: 10}],
        food: {x: 15, y: 15},
        direction: 'RIGHT',
        score: 0,
        gameRunning: false
      });
    }
    
    const game = availableGames.find(g => g.id === gameId);
    addDebugLog(`🎮 Selected game: ${game?.name}`);
  };

  const startGame = () => {
    if (!selectedGame) {
      addDebugLog('❌ No game selected!');
      alert('Please select a game first!');
      return;
    }
    
    setIsGameActive(true);
    setGameStatus('playing');
    setGameScore(0);
    
    if (selectedGame === 'snake') {
      // Snake-Game starten
      const initialFood = generateFood([{x: 10, y: 10}]);
      setSnakeGame({
        snake: [{x: 10, y: 10}],
        food: initialFood,
        direction: 'RIGHT',
        score: 0,
        gameRunning: true
      });
      addDebugLog('🐍 Snake game started with real graphics!');
    } else {
      // Andere Games (Demo)
      addDebugLog(`🚀 Starting demo game: ${selectedGame}`);
      startDemoGame();
    }
  };

  const startDemoGame = () => {
    addDebugLog('🎯 Demo game loop started');
    
    const gameInterval = setInterval(() => {
      setGameScore(prev => prev + Math.floor(Math.random() * 10) + 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(gameInterval);
      setGameStatus('gameover');
      setIsGameActive(false);
      addDebugLog('🏁 Demo game ended');
    }, 30000);
  };

  const toggleGame = () => {
    if (gameStatus === 'playing') {
      setGameStatus('paused');
      if (selectedGame === 'snake') {
        setSnakeGame(prev => ({ ...prev, gameRunning: false }));
      }
      addDebugLog('⏸️ Game paused');
    } else if (gameStatus === 'paused') {
      setGameStatus('playing');
      if (selectedGame === 'snake') {
        setSnakeGame(prev => ({ ...prev, gameRunning: true }));
      }
      addDebugLog('▶️ Game resumed');
    } else {
      addDebugLog(`⚠️ Toggle called but game status is: ${gameStatus}`);
    }
  };

  const resetGame = () => {
    setGameStatus('idle');
    setIsGameActive(false);
    setGameScore(0);
    setSelectedGame(null);
    
    if (gameLoopRef.current) {
      clearTimeout(gameLoopRef.current);
      gameLoopRef.current = undefined;
    }
    
    setSnakeGame({
      snake: [{x: 10, y: 10}],
      food: {x: 15, y: 15},
      direction: 'RIGHT',
      score: 0,
      gameRunning: false
    });
    
    addDebugLog('🔄 Game reset');
  };

  const testKeyboard = () => {
    addDebugLog('🧪 Manual keyboard test triggered');
    addDebugLog(`🧪 Current state - Active: ${isGameActive}, Status: ${gameStatus}, Listener: ${eventListenerActive}`);
  };

  const renderGameContent = () => {
    if (!selectedGame) {
      return (
        <GameContent>
          <h3>🎮 Select a Game</h3>
          <p>Choose a game from the selection below to start playing!</p>
          <p>🎯 Use WASD or Arrow Keys to control</p>
          <p>⏸️ Press SPACE to pause/resume</p>
        </GameContent>
      );
    }

    const game = availableGames.find(g => g.id === selectedGame);
    
    if (gameStatus === 'idle') {
      return (
        <GameContent>
          <h3>🎮 {game?.name}</h3>
          <p>{game?.description}</p>
          <p>Score: {gameScore}</p>
          <p>Press START GAME to begin!</p>
        </GameContent>
      );
    }

    if (gameStatus === 'playing') {
      return (
        <GameContent>
          <h3>🎮 {game?.name} - PLAYING</h3>
          <p>Score: {selectedGame === 'snake' ? snakeGame.score : gameScore}</p>
          <p>🎯 Use WASD or Arrow Keys</p>
          <p>⏸️ SPACE to pause</p>
          <p style={{ color: '#00ff00' }}>● GAME RUNNING</p>
        </GameContent>
      );
    }

    if (gameStatus === 'paused') {
      return (
        <GameContent>
          <h3>⏸️ GAME PAUSED</h3>
          <p>Score: {selectedGame === 'snake' ? snakeGame.score : gameScore}</p>
          <p>Press SPACE to resume</p>
        </GameContent>
      );
    }

    if (gameStatus === 'gameover') {
      return (
        <GameContent>
          <h3>🎯 GAME OVER</h3>
          <p>Final Score: {selectedGame === 'snake' ? snakeGame.score : gameScore}</p>
          <p>{game?.name} completed!</p>
          <p>Select another game or reset to play again</p>
        </GameContent>
      );
    }
  };

  return (
    <GamePlayerContainer>
      <GameTitle>🕹️ Retro Game Player v2.0 - VISUAL SNAKE!</GameTitle>
      
      {/* Debug Panel */}
      <DebugPanel>
        <strong>🐛 DEBUG INFO:</strong><br/>
        EventListener Active: {eventListenerActive ? '✅' : '❌'}<br/>
        Game Active: {isGameActive ? '✅' : '❌'}<br/>
        Game Status: {gameStatus}<br/>
        Selected Game: {selectedGame || 'none'}<br/>
        {selectedGame === 'snake' && (
          <>Snake Direction: {snakeGame.direction}<br/>
          Snake Length: {snakeGame.snake.length}<br/>
          Snake Running: {snakeGame.gameRunning ? '✅' : '❌'}<br/></>
        )}
        <strong>Recent Logs:</strong><br/>
        {debugLogs.map((log, i) => <div key={i}>{log}</div>)}
      </DebugPanel>
      
      {/* Game Selection */}
      <GameSelector>
        {availableGames.map((game) => (
          <GameCard
            key={game.id}
            selected={selectedGame === game.id}
            onClick={() => selectGame(game.id)}
          >
            <h4>{game.name}</h4>
            <p>{game.description}</p>
          </GameCard>
        ))}
      </GameSelector>

      {/* Game Screen */}
      <GameScreen isActive={isGameActive} ref={gameRef}>
        {selectedGame === 'snake' && gameStatus !== 'idle' ? (
          <GameCanvas
            ref={canvasRef}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />
        ) : (
          renderGameContent()
        )}
      </GameScreen>

      {/* Game Controls */}
      <ControlsContainer>
        <ControlButton
          variant="success"
          onClick={startGame}
          disabled={!selectedGame || gameStatus === 'playing'}
        >
          🚀 Start Game
        </ControlButton>
        
        <ControlButton
          onClick={toggleGame}
          disabled={gameStatus === 'idle' || gameStatus === 'gameover'}
        >
          {gameStatus === 'playing' ? '⏸️ Pause' : '▶️ Resume'}
        </ControlButton>
        
        <ControlButton
          variant="secondary"
          onClick={resetGame}
        >
          🔄 Reset
        </ControlButton>
        
        <ControlButton
          variant="primary"
          onClick={testKeyboard}
        >
          🧪 Test Keyboard
        </ControlButton>
      </ControlsContainer>

      {/* Instructions */}
      <div style={{ color: '#00ffff', textAlign: 'center', fontSize: '0.9rem' }}>
        <p>🎮 <strong>Controls:</strong> WASD or Arrow Keys | SPACE to pause</p>
        <p>🎯 <strong>Status:</strong> {gameStatus.toUpperCase()} | Score: {selectedGame === 'snake' ? snakeGame.score : gameScore}</p>
        {selectedGame === 'snake' && <p>🐍 <strong>Snake:</strong> Eat red food, avoid walls and yourself!</p>}
      </div>
    </GamePlayerContainer>
  );
};

export default GamePlayer;