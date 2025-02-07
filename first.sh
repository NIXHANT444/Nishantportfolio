echo "🚀 Starting Render deployment setup..."

# Client setup
cd client
echo "🔧 Installing client dependencies..."
rm -rf .next
rm -rf node_modules
npm ls react react-dom
npm install next@latest
npm install
rm -rf .next
npm run build
echo "✅ Client dependencies installed."

cd ..

# Server setup
cd server
echo "🔧 Installing server dependencies..."
npm install
echo "✅ Server dependencies installed."
echo "🔄 Starting the server..."
npm ls react react-dom

echo "✅ Done Now Start SErver"