#!/bin/bash
echo "🚀 Starting Render deployment setup..."

# Client setup
cd client
npm install tailwindcss postcss autoprefixer
echo "🔧 Installing client dependencies..."
npm install
echo "✅ Client dependencies installed."
echo "📦 Building client app..."
npm run build
echo "🔄 Starting the client app..."
npm start
cd ..

# Server setup
cd server
echo "🔧 Installing server dependencies..."
npm install
echo "✅ Server dependencies installed."
echo "🔄 Starting the server..."
node server.js &
echo "✅ Server started."

