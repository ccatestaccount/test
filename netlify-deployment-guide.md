# Deploying Your App to Netlify (Free)

This guide explains how to deploy your application to Netlify using their free tier.

## Prerequisites

- A GitHub account
- Your project code pushed to a GitHub repository

## Step 1: Sign up for Netlify

1. Go to [Netlify's website](https://www.netlify.com/)
2. Sign up for a free account (you can use your GitHub account for easier setup)

## Step 2: Import Your Project

1. Once logged in, click "Add new site" > "Import an existing project"
2. Choose GitHub as your Git provider
3. Authorize Netlify to access your GitHub account
4. Select the repository containing your project

## Step 3: Configure Your Build Settings

These settings should be pre-configured in your project's `netlify.toml` file, but double-check:

- Build command: `./netlify-build.sh`
- Publish directory: `dist/public`

## Step 4: Deploy Your Site

1. Click "Deploy site"
2. Wait for the build process to complete
3. Netlify will provide you with a unique URL (something like `your-site-name.netlify.app`)

## Step 5: Test Your Deployment

1. Visit the URL Netlify provided
2. Test all features:
   - Title screen with "TREY" branding
   - Camera functionality
   - Photo capture (saving to your computer)
   - DoorDash link

## Troubleshooting

If you encounter issues with your deployment:

1. Check the Netlify build logs for errors
2. Make sure all dependencies are properly installed during the build
3. Verify that paths and routes work correctly in a static environment

## Free Plan Features

Netlify's free plan includes:

- Unlimited personal sites and projects
- HTTPS enabled automatically
- Continuous deployment from Git
- 100GB bandwidth per month
- 300 build minutes per month

No payment or credit card is required for the free tier.
