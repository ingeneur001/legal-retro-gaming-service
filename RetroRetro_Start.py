#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🎮 Legal Retro Gaming Service - Server Launcher
Startet automatisch Backend (Port 3001) und Frontend (Port 3000)
"""

import subprocess
import os
import sys
import time
import signal
import threading
from pathlib import Path

class GameServerLauncher:
    def __init__(self):
        self.backend_process = None
        self.frontend_process = None
        self.project_root = Path(__file__).parent
        self.running = False
        
    def print_banner(self):
        """Zeigt Banner beim Start"""
        print("=" * 60)
        print("🎮 LEGAL RETRO GAMING SERVICE - AUTO LAUNCHER")
        print("=" * 60)
        print(f"📁 Project Path: {self.project_root}")
        print(f"🚀 Starting Backend (Port 3001) + Frontend (Port 3000)")
        print("=" * 60)
        
    def check_dependencies(self):
        """Prüft ob node und npm verfügbar sind"""
        try:
            # Node.js Version prüfen
            node_result = subprocess.run(['node', '--version'], 
                                       capture_output=True, text=True, check=True, shell=True)
            print(f"✅ Node.js: {node_result.stdout.strip()}")
            
            # NPM Version prüfen (Windows-kompatibel)
            npm_commands = ['npm', 'npm.cmd']
            npm_version = None
            
            for npm_cmd in npm_commands:
                try:
                    npm_result = subprocess.run([npm_cmd, '--version'], 
                                              capture_output=True, text=True, check=True, shell=True)
                    npm_version = npm_result.stdout.strip()
                    print(f"✅ NPM: {npm_version}")
                    break
                except:
                    continue
            
            if not npm_version:
                raise Exception("NPM not found")
            
            return True
        except (subprocess.CalledProcessError, FileNotFoundError) as e:
            print(f"❌ Dependency Error: {e}")
            print("💡 Please install Node.js: https://nodejs.org/")
            return False
    
    def start_backend(self):
        """Startet Backend-Server (Port 3001)"""
        try:
            print("🔧 Starting Backend Server...")
            backend_path = self.project_root
            
            # Backend-Server starten
            self.backend_process = subprocess.Popen(
                ['node', 'backend/server.js'],
                cwd=backend_path,
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1,
                universal_newlines=True,
                shell=True
            )
            
            # Backend-Output in eigenem Thread überwachen
            def monitor_backend():
                while self.running and self.backend_process:
                    try:
                        line = self.backend_process.stdout.readline()
                        if line:
                            print(f"🖥️  BACKEND: {line.strip()}")
                        elif self.backend_process.poll() is not None:
                            break
                    except:
                        break
            
            threading.Thread(target=monitor_backend, daemon=True).start()
            print("✅ Backend Server started!")
            return True
            
        except Exception as e:
            print(f"❌ Backend Start Error: {e}")
            return False
    
    def start_frontend(self):
        """Startet Frontend-Server (Port 3000)"""
        try:
            print("🔧 Starting Frontend Server...")
            frontend_path = self.project_root / "frontend"
            
            # Frontend-Server starten (Windows-kompatibel)
            npm_commands = ['npm', 'npm.cmd']
            
            for npm_cmd in npm_commands:
                try:
                    self.frontend_process = subprocess.Popen(
                        [npm_cmd, 'start'],
                        cwd=frontend_path,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.PIPE,
                        text=True,
                        bufsize=1,
                        universal_newlines=True,
                        shell=True
                    )
                    break
                except:
                    continue
            
            if not self.frontend_process:
                raise Exception("Could not start npm")
            
            # Frontend-Output in eigenem Thread überwachen
            def monitor_frontend():
                while self.running and self.frontend_process:
                    try:
                        line = self.frontend_process.stdout.readline()
                        if line:
                            if "compiled successfully" in line.lower() or "compiled with" in line.lower():
                                print("🎉 FRONTEND: ✅ Compiled successfully!")
                            elif "local:" in line.lower() and "3000" in line:
                                print("🌐 FRONTEND: 🚀 Available at http://localhost:3000")
                            elif "webpack compiled" in line.lower():
                                print("🎉 FRONTEND: ✅ Webpack compilation complete!")
                            elif "no issues found" in line.lower():
                                print("✅ FRONTEND: Ready for development!")
                            else:
                                print(f"⚛️  FRONTEND: {line.strip()}")
                        elif self.frontend_process.poll() is not None:
                            break
                    except:
                        break
            
            threading.Thread(target=monitor_frontend, daemon=True).start()
            print("✅ Frontend Server started!")
            return True
            
        except Exception as e:
            print(f"❌ Frontend Start Error: {e}")
            return False
    
    def wait_for_servers(self):
        """Wartet bis beide Server laufen"""
        print("\n⏳ Waiting for servers to start...")
        
        # Warten bis beide Prozesse laufen
        for i in range(30):  # Max 30 Sekunden warten
            backend_running = self.backend_process and self.backend_process.poll() is None
            frontend_running = self.frontend_process and self.frontend_process.poll() is None
            
            if backend_running and frontend_running:
                print("\n🎉 BOTH SERVERS RUNNING!")
                print("🌐 Frontend: http://localhost:3000")
                print("🔗 Backend:  http://localhost:3001/health")
                print("\n📋 READY FOR DEVELOPMENT!")
                print("💡 Press Ctrl+C to stop both servers")
                return True
            
            time.sleep(1)
            if i % 5 == 0:
                print(f"⏳ Still waiting... ({i}s)")
        
        print("❌ Servers failed to start within timeout")
        return False
    
    def stop_servers(self):
        """Stoppt beide Server"""
        print("\n🛑 Stopping servers...")
        self.running = False
        
        if self.backend_process:
            try:
                self.backend_process.terminate()
                self.backend_process.wait(timeout=5)
                print("✅ Backend stopped")
            except:
                self.backend_process.kill()
                print("🔨 Backend force-killed")
        
        if self.frontend_process:
            try:
                self.frontend_process.terminate()
                self.frontend_process.wait(timeout=5)
                print("✅ Frontend stopped")
            except:
                self.frontend_process.kill()
                print("🔨 Frontend force-killed")
    
    def run(self):
        """Hauptfunktion - startet beide Server"""
        self.print_banner()
        
        # Dependencies prüfen
        if not self.check_dependencies():
            return False
        
        # Signal Handler für Ctrl+C
        def signal_handler(signum, frame):
            self.stop_servers()
            sys.exit(0)
        
        signal.signal(signal.SIGINT, signal_handler)
        
        # Server starten
        self.running = True
        
        # Backend starten
        if not self.start_backend():
            return False
        
        # Kurz warten
        time.sleep(2)
        
        # Frontend starten
        if not self.start_frontend():
            self.stop_servers()
            return False
        
        # Auf Server warten
        if not self.wait_for_servers():
            self.stop_servers()
            return False
        
        # Endlos-Loop - wartet auf Ctrl+C
        try:
            while True:
                # Prüfen ob Prozesse noch laufen
                if self.backend_process and self.backend_process.poll() is not None:
                    print("❌ Backend process died!")
                    break
                if self.frontend_process and self.frontend_process.poll() is not None:
                    print("❌ Frontend process died!")
                    break
                
                time.sleep(1)
        except KeyboardInterrupt:
            pass
        finally:
            self.stop_servers()
        
        return True

def main():
    """Main Entry Point"""
    launcher = GameServerLauncher()
    
    try:
        success = launcher.run()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"💥 Unexpected Error: {e}")
        launcher.stop_servers()
        sys.exit(1)

if __name__ == "__main__":
    main()