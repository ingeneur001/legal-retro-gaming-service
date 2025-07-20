const express = require('express');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');
const path = require('path');

// Express App erstellen
const app = express();
const server = http.createServer(app);

// Socket.IO konfigurieren
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  },
  allowEIO3: true
});

// Middleware
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:3000", "http://localhost:3001"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined')); // Logging

// Server-Variablen
const PORT = process.env.PORT || 3001;
let connectedUsers = 0;
let serverStartTime = Date.now();

// Health Check Route
app.get('/health', (req, res) => {
  const uptime = Math.floor((Date.now() - serverStartTime) / 1000);
  
  res.json({
    status: 'OK',
    uptime: uptime,
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    connectedUsers: connectedUsers,
    port: PORT
  });
});

// API Routes
app.get('/api/status', (req, res) => {
  res.json({
    server: 'Legal Retro Gaming Service',
    status: 'running',
    users: connectedUsers,
    uptime: Math.floor((Date.now() - serverStartTime) / 1000)
  });
});

// Game-related routes
app.get('/api/games', (req, res) => {
  res.json({
    availableGames: [
      {
        id: 'snake',
        name: 'Snake Game',
        description: 'Classic Snake game built in React',
        status: 'available'
      },
      {
        id: 'memory',
        name: 'Memory Game', 
        description: 'Test your memory with cards',
        status: 'available'
      },
      {
        id: 'pong',
        name: 'Pong Demo',
        description: 'Simple Pong game simulation',
        status: 'available'
      },
      {
        id: 'tetris',
        name: 'Tetris Demo',
        description: 'Tetris-style block game',
        status: 'available'
      }
    ]
  });
});

// Socket.IO Event-Handler
io.on('connection', (socket) => {
  connectedUsers++;
  console.log(`User connected: ${socket.id}`);
  
  // Begrüßung senden
  socket.emit('welcome', {
    message: 'Welcome to Legal Retro Gaming Service!',
    serverId: socket.id,
    timestamp: new Date().toISOString()
  });
  
  // User-Count an alle senden
  io.emit('player-count', connectedUsers);
  
  // Ping-Pong für Latenz-Messung
  socket.on('ping', (timestamp) => {
    socket.emit('pong', timestamp);
  });
  
  // Game-Events
  socket.on('join-game', (gameData) => {
    console.log(`🎮 User ${socket.id} joined game: ${gameData.gameId}`);
    socket.join(`game-${gameData.gameId}`);
    
    socket.to(`game-${gameData.gameId}`).emit('player-joined', {
      playerId: socket.id,
      gameId: gameData.gameId,
      timestamp: new Date().toISOString()
    });
  });
  
  socket.on('leave-game', (gameData) => {
    console.log(`🎮 User ${socket.id} left game: ${gameData.gameId}`);
    socket.leave(`game-${gameData.gameId}`);
    
    socket.to(`game-${gameData.gameId}`).emit('player-left', {
      playerId: socket.id,
      gameId: gameData.gameId,
      timestamp: new Date().toISOString()
    });
  });
  
  // Game-Input weiterleiten
  socket.on('game-input', (inputData) => {
    socket.to(`game-${inputData.gameId}`).emit('player-input', {
      playerId: socket.id,
      input: inputData.input,
      timestamp: new Date().toISOString()
    });
  });
  
  // Disconnect-Handler
  socket.on('disconnect', (reason) => {
    connectedUsers--;
    console.log(`User disconnected: ${socket.id} (${reason})`);
    
    // User-Count aktualisieren
    io.emit('player-count', connectedUsers);
  });
  
  // Error-Handler
  socket.on('error', (error) => {
    console.error(`Socket error for ${socket.id}:`, error);
  });
});

// Error-Handler für Express
app.use((err, req, res, next) => {
  console.error('Express Error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404-Handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Server starten
server.listen(PORT, () => {
  console.log('🎮 Legal Retro Gaming Service running on port ' + PORT);
  console.log('🔗 Health check: http://localhost:' + PORT + '/health');
  console.log('📡 Socket.IO ready for multiplayer connections');
});

// Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('🛑 Server shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 Server shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});

module.exports = { app, server, io };