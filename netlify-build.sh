#!/bin/bash

# Build only the frontend static files for Netlify
echo "Building frontend static files..."
npx vite build

# Move files to match the netlify.toml publish directory
mkdir -p dist/public
if [ -d dist/public ]; then
  echo "Files are already in the correct structure."
else
  echo "Moving build files to dist/public..."
  mv dist/* dist/public/ 2>/dev/null || true
fi

echo "Build completed successfully!"
