# Dragon News

## Description
Dragon News is a modern news portal built with Next.js that provides users with the latest news articles organized by categories. The application features user authentication, allowing users to log in via email/password or social providers like Google and GitHub. It offers a clean, responsive interface for browsing news and reading detailed articles.

## Features
- Browse news articles by different categories
- View detailed news content with full article pages
- User authentication with email/password and social login (Google, GitHub)
- Responsive design optimized for mobile and desktop
- Fast loading with Next.js server-side rendering
- Clean and intuitive user interface

## Technologies Used
- **Next.js** - React framework for server-side rendering and static site generation
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **DaisyUI** - Component library built on top of Tailwind CSS
- **Better Auth** - Authentication library for secure user management
- **MongoDB** - NoSQL database for data storage
- **React Hook Form** - Library for form handling
- **React Icons** - Icon library for UI elements

## Dependencies
### Production Dependencies
- `@better-auth/mongo-adapter`: ^1.6.9
- `better-auth`: ^1.6.9
- `date-fns`: ^4.1.0
- `mongodb`: ^7.2.0
- `next`: 16.2.4
- `react`: 19.2.4
- `react-dom`: 19.2.4
- `react-fast-marquee`: ^1.6.5
- `react-hook-form`: ^7.75.0
- `react-icons`: ^5.6.0

### Development Dependencies
- `@gravity-ui/icons`: ^2.18.0
- `@tailwindcss/postcss`: ^4
- `babel-plugin-react-compiler`: 1.0.0
- `daisyui`: ^5.5.19
- `eslint`: ^9
- `eslint-config-next`: 16.2.4
- `tailwindcss`: ^4

## Run Locally
Follow these steps to run the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd dragon-news
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GITHUB_CLIENT_ID=your_github_client_id
   GITHUB_CLIENT_SECRET=your_github_client_secret
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Screenshots
![alt text](screencapture-dragon-news-project-sigma-vercel-app-category-01-2026-05-08-14_05_33.png)
## Links
- **Live Demo:**
- **GitHub Repository:**