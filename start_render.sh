#!/bin/bash

echo "🚀 Starting Render deployment setup..."

# Step 1: Navigate to server directory and install dependencies
echo "🔧 Installing server dependencies..."
cd server || exit
npm install
echo "✅ Server dependencies installed."

# Start the server in the background
echo "🔄 Starting the server (node server.js)..."
node server.js &
SERVER_PID=$!
echo "✅ Server started with PID: $SERVER_PID"

# Step 2: Navigate to client directory
echo "🔧 Installing client dependencies..."
cd ../client || exit
npm install
echo "✅ Client dependencies installed."

# Build the Next.js client app
echo "📦 Building client app..."
npm run build

# Start the client
echo "🔄 Starting the client (next start)..."
npm start &

echo "🎉 Both server and client are running!"
wait
