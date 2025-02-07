#!/bin/bash

echo "🚀 Starting Render deployment setup..."

# Step 1: Navigate to the server directory
echo "🔧 Installing server dependencies..."
cd server || exit
npm install
echo "✅ Server dependencies installed."

# Step 2: Start the server
echo "🔄 Starting the server (node server.js)..."
node server.js &
SERVER_PID=$!
echo "✅ Server started with PID: $SERVER_PID"

# Step 3: Navigate to the client directory
echo "🔧 Installing client dependencies..."
cd ../client || exit
npm install
echo "✅ Client dependencies installed."

# Step 4: Start the client
echo "🔄 Starting the client (npm start)..."
npm start &

echo "🎉 Both server and client are running!"
wait
