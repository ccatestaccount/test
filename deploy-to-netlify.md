# How to Deploy Your App to Netlify for Free

Follow these simple steps to deploy your app to Netlify without paying for any premium plans:

## Step 1: Push your code to GitHub
If you haven't already, create a GitHub repository and push your code to it.

## Step 2: Sign up for Netlify
1. Go to [Netlify's website](https://www.netlify.com/) 
2. Sign up for a free account (you can use your GitHub account to sign up)

## Step 3: Connect your repository
1. Once logged in, click "Add new site" > "Import an existing project"
2. Choose GitHub as your Git provider
3. Authorize Netlify to access your GitHub account
4. Select the repository containing your project

## Step 4: Configure build settings
Use these settings:
- Build command: `npm run build`
- Publish directory: `dist`

These settings match your project's configuration in package.json and netlify.toml.

## Step 5: Deploy your site
Click "Deploy site" and wait for the build to complete. Netlify will provide you with a unique URL where your site is hosted.

## Free Plan Benefits
Netlify's free plan includes:
- Unlimited personal sites and projects
- HTTPS enabled automatically
- Continuous deployment from Git
- 100GB bandwidth per month
- 300 build minutes per month

This is more than enough for a personal project like yours.

## Optional: Custom Domain
If you want to use a custom domain instead of the default .netlify.app domain:
1. Go to your site's settings in Netlify
2. Click on "Domain settings"
3. Follow the instructions to add your custom domain
(Note: You'll need to purchase a domain separately if you don't already have one)
