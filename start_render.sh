#!/bin/bash
echo "🚀 Starting Render deployment setup..."

# Client setup
cd client
echo "🔧 Installing client dependencies..."
npm install tailwindcss postcss autoprefixer
npm install
echo "✅ Client dependencies installed."

cd ..

# Server setup
cd server
echo "🔧 Installing server dependencies..."
npm install
echo "✅ Server dependencies installed."
echo "🔄 Starting the server..."
node server.js &
echo "✅ Server started."


