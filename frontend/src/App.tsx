import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import io from 'socket.io-client';

// Import unserer modularen Components
import Header from './components/Header';
import ServerStatus from './components/ServerStatus';
import GameGrid from './components/GameGrid';
import ConnectionStatus from './components/ConnectionStatus';
import GamePlayer from './components/GamePlayer';

// USER SYSTEM IMPORT - NEU!
import { UserProvider, UserManager } from './components/user/UserManager';

// Global Styles für Retro-Gaming-Theme
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%);
    font-family: 'Orbitron', monospace;
    overflow-x: hidden;
  }
`;

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 255, 198, 0.3) 0%, transparent 50%);
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 100%;
`;

// Interface für Server-Status
interface ServerStatusData {
  status: string;
  uptime: number;
  version: string;
  timestamp: string;
}

// Main App Component
const App: React.FC = () => {
  // State Management
  const [, setSocket] = useState<any>(null);
  const [connected, setConnected] = useState(false);
  const [serverStatus, setServerStatus] = useState<ServerStatusData | null>(null);
  const [playerCount, setPlayerCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [lastPing, setLastPing] = useState(0);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);

  // Socket.IO-Verbindung zum Backend
  useEffect(() => {
    const newSocket = io('http://localhost:3001', {
      // Reconnection-Strategien optimieren
      autoConnect: true,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
      timeout: 20000,
      transports: ['websocket', 'polling'], // Fallback-Transport
    });
    
    setSocket(newSocket);

    // Connection Events
    newSocket.on('connect', () => {
      setConnected(true);
      setReconnectAttempts(0);
      console.log('🎮 Connected to Gaming Server!', newSocket.id);
    });

    newSocket.on('disconnect', (reason) => {
      setConnected(false);
      console.log('❌ Disconnected from Gaming Server:', reason);
    });

    newSocket.on('connect_error', (error) => {
      console.log('⚠️ Connection Error:', error.message);
      setConnected(false);
    });

    newSocket.on('reconnect', (attemptNumber) => {
      console.log(`🔄 Reconnected after ${attemptNumber} attempts`);
      setConnected(true);
      setReconnectAttempts(0);
    });

    newSocket.on('reconnect_attempt', (attemptNumber) => {
      setReconnectAttempts(attemptNumber);
      console.log(`🔄 Reconnection attempt ${attemptNumber}`);
    });

    newSocket.on('reconnect_failed', () => {
      console.log('❌ Reconnection failed');
      setConnected(false);
    });

    newSocket.on('player-count', (count: number) => {
      setPlayerCount(count);
    });

    // Ping-Messung (weniger häufig für Stabilität)
    const pingInterval = setInterval(() => {
      if (newSocket.connected) {
        const startTime = Date.now();
        newSocket.emit('ping', startTime);
        
        newSocket.once('pong', (sentTime: number) => {
          const ping = Date.now() - sentTime;
          setLastPing(ping);
        });
      }
    }, 10000); // Ping alle 10 Sekunden statt 5

    return () => {
      clearInterval(pingInterval);
      newSocket.disconnect();
    };
  }, []); // Leere Dependency - Socket nur einmal erstellen

  // Server-Status von Backend abrufen
  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:3001/health');
        const data = await response.json();
        setServerStatus(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch server status:', error);
        setLoading(false);
      }
    };

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 10000); // Update alle 10 Sekunden

    return () => clearInterval(interval);
  }, []);

  // Navigation Handler
  const handleNavigation = (navItem: string) => {
    setActiveNavItem(navItem);
    console.log(`📍 Navigating to: ${navItem}`);
    
    // Hier können später verschiedene Views/Pages geladen werden
    switch (navItem) {
      case 'games':
        console.log('🎮 Loading Games View...');
        break;
      case 'profile':
        console.log('👤 Loading Profile View...');
        break;
      case 'leaderboard':
        console.log('🏆 Loading Leaderboard View...');
        break;
      case 'settings':
        console.log('⚙️ Loading Settings View...');
        break;
      default:
        console.log('🏠 Loading Home View...');
    }
  };

  // Game Action Handlers
  const handleGameAction = (gameId: string, action: string) => {
    console.log(`🎮 Game Action: ${action} for ${gameId}`);
    
    switch (gameId) {
      case 'classic-arcade':
        alert('🕹️ Classic Arcade coming soon! Stay tuned for Pac-Man and Space Invaders!');
        break;
      case 'retro-console':
        alert('🎯 Retro Console coming soon! NES, SNES, and Genesis games awaiting!');
        break;
      case 'multiplayer-zone':
        alert('👥 Multiplayer Zone coming soon! Real-time gaming with friends!');
        break;
      case 'my-saves':
        alert('💾 Save System coming soon! Cloud saves to keep your progress safe!');
        break;
      default:
        alert('🎮 Feature coming soon!');
    }
  };

  // Custom Game Data mit echten Handlers
  const gameData = [
    {
      id: 'classic-arcade',
      icon: '🕹️',
      title: 'Classic Arcade',
      description: 'Play legendary arcade games from the golden age. Pac-Man, Space Invaders, and more classic titles.',
      buttonText: 'PLAY NOW',
      onPlay: () => handleGameAction('classic-arcade', 'play')
    },
    {
      id: 'retro-console',
      icon: '🎯',
      title: 'Retro Console',
      description: 'Experience classic console games from NES, SNES, and Genesis. All legally available titles.',
      buttonText: 'PLAY NOW',
      onPlay: () => handleGameAction('retro-console', 'play')
    },
    {
      id: 'multiplayer-zone',
      icon: '👥',
      title: 'Multiplayer Zone',
      description: 'Join friends in real-time multiplayer sessions. Compete and have fun together!',
      buttonText: 'JOIN GAME',
      onPlay: () => handleGameAction('multiplayer-zone', 'join')
    },
    {
      id: 'my-saves',
      icon: '💾',
      title: 'My Saves',
      description: 'Access your saved games and continue your adventures. Cloud saves keep your progress safe.',
      buttonText: 'VIEW SAVES',
      onPlay: () => handleGameAction('my-saves', 'view')
    }
  ];

  return (
    <>
      <GlobalStyle />
      {/* USER PROVIDER UMHÜLLT ALLES - HIER IST DIE ÄNDERUNG! */}
      <UserProvider>
        <AppContainer>
          {/* Connection Status (Top Right) */}
          <ConnectionStatus 
            connected={connected}
            showDetails={true}
            serverUrl="localhost:3001"
            lastPing={lastPing}
            reconnectAttempts={reconnectAttempts}
          />

          <MainContent>
            {/* Header with Navigation */}
            <Header 
              title="RETRO ARCADE"
              subtitle="Legal Gaming Experience"
              showNavigation={true}
              activeNavItem={activeNavItem}
              onNavClick={handleNavigation}
            />

            {/* Server Status Panel */}
            <ServerStatus 
              serverStatus={serverStatus}
              playerCount={playerCount}
              loading={loading}
            />

            {activeNavItem === 'games' ? (
              <GamePlayer />
            ) : activeNavItem === 'profile' ? (
              <UserManager />
            ) : (
              <GameGrid games={gameData} />
            )}

            {/* Content basierend auf Navigation */}
            {activeNavItem === 'games' ? (
               <div style={{color: '#ff0000', fontSize: '2rem', textAlign: 'center'}}>
               🔴 NEW LOGIC ACTIVE! 🔴
               </div>
            ) : activeNavItem === 'profile' ? null : (
               <GameGrid games={gameData} />
            )}
          </MainContent>
        </AppContainer>
      </UserProvider>
    </>
  );
};

export default App;