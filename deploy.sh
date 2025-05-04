#!/usr/bin/env bash

# Exit on error
set -e

# Build the project
npm run build

# Go to dist directory
cd dist

# Clean up any existing Git repo
rm -rf .git

# Re-init and push
git init
git add .
git commit -m "Deploy"
git branch -M main
git remote add origin https://github.com/Ashutoshp-dev/My-Portfolio.git
git push -f origin main:gh-pages

# Go back to root
cd ..