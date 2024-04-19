# Blog

A simple markdown-based blog web application built with Node.js, Express, Mongoose and EJS as template. This app allows users to view all articles, view individual articles, create new articles, edit existing articles, and delete articles.

## Features

- View all available articles
- View individual article details
- Create new articles with markdown formatting
- Edit existing articles
- Delete articles

## Prerequisites

- Node.js (v12 or later)
- MongoDB (for database)

## Getting Started

1. Clone the repository:
bash
git clone https://github.com/jHa1911/blogs.git
cd blogs

2. Install dependencies using npm:
npm install [dependcies name]

3. Set up environment variables by copying `.env.example` to `.env`:
cp .env.example .env

4. Run the application in development mode:
npm run devStart

5. Open your browser and go to `http://localhost:5000`. You should see a list of articles.

## Technologies  Used

- [Node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 engine that uses an event-driven, non-blocking I/O
- Express.js for server-side framework
- Mongoose ODM for interacting with MongoDB
- EJS templating engine for client-side HTML rendering
- Marked.js for parsing markdown syntax into HTML
- Body-parser middleware for handling form data

