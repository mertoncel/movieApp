# Movie App

This project is a Single Page Application (SPA) built using React, Redux, RTK Query, and Ant Design. It allows users to search and view details of movies, with features such as pagination, movie details view, and search filters.

## Features

- **Movie Listing**: Displays a list of movies in a table/grid format. The minimum columns include:

  - Movie Name
  - Release Date
  - IMDb ID

- **Pagination**: Movies are displayed with pagination, showing 10 movies per page.
- **Search Functionality**: Users can search for movies by name, with "Pokemon" as the default search query when the page loads.
- **Filter by Year**: Users can filter movies released in a specific year.
- **Media Type Filter**: Users can choose to search for movies, TV series, or TV series episodes.
- **Movie Details**: Clicking on a movie redirects the user to a details page where additional information such as:
  - Poster
  - Title
  - Duration
  - Genre
  - Director
  - Cast
  - IMDb Rating

## Technologies Used

- **React**: JavaScript framework for building the user interface.
- **Redux & RTK Query**: For state management and API integration.
- **Ant Design**: A popular UI library for building modern interfaces.
- **OMDb API**: Used to fetch movie information.

## Getting Started

To run this project locally, follow these steps:

1. Install Dependencies
   Make sure you have node and npm installed. Then run:

npm install

2. Run the Application
   To start the development server, run:

npm start

3. Building the Application
   To create a production build of the application, run:

npm run build
