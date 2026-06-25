#!/bin/bash

# Deploy script for portfolio
# Place this at: /var/www/akhandjyotiraj.me/deploy.sh
# Make executable: chmod +x deploy.sh

cd /var/www/akhandjyotiraj.me

echo "📦 Starting deployment..."
echo "🔄 Pulling latest changes from GitHub..."

git pull origin main

if [ $? -eq 0 ]; then
    echo "✅ Git pull successful"
    
    # Optional: Run any build commands if needed
    # npm install
    # npm run build
    
    # Reload nginx
    echo "🔄 Reloading Nginx..."
    sudo systemctl reload nginx
    
    if [ $? -eq 0 ]; then
        echo "✅ Nginx reloaded successfully"
        echo "🎉 Deployment complete!"
    else
        echo "❌ Failed to reload Nginx"
        exit 1
    fi
else
    echo "❌ Git pull failed"
    exit 1
fi
