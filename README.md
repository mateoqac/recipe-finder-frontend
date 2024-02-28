# Recipe Finder App

[![Netlify Status](https://api.netlify.com/api/v1/badges/767036e5-8e94-46d0-94ea-2a8b0ed3cce6/deploy-status)](https://app.netlify.com/sites/recipe-4-you/deploys)

## Overview

This is a React-based Recipe Finder app that allows users to search for and discover various recipes. The app utilizes the backend solution to fetch recipe data and display it in a user-friendly interface.

`https://recipe-finder-backend.fly.dev/api/v1`

## Features

- **Search**: Users can search for recipes based on ingredients
- **Detailed View**: View detailed information about each recipe, including ingredients, instructions
- **Save Favorites**: Users can save their favorite recipes for quick access in the future.
- **Responsive Design**: The app is designed to work seamlessly on various devices, including desktops, tablets, and mobile phones.

## Getting Started

### Prerequisites

- Node.js and pnpm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone git@github.com:mateoqac/recipe-finder-frontend.git
2. Navigate to the project directory:
    ```bash
    cd recipe-finder-frontend
3. Install dependencies:
    ```bash
    pnpm install
4. Create a `.env` file and set:

    ```bash
    REACT_APP_BACKEND_BASE_URL=https://recipe-finder-backend.fly.dev/api/v1
5. Running the App:
   ```bash
   pnpm start
