# IMDB

IMDb (Internet Movie Database) is the world's most trusted and comprehensive source for movie, TV, and celebrity content. With a vast database of filmography, ratings, reviews, and industry news, IMDb is the go-to destination for cinephiles and entertainment enthusiasts.

## Technical Justification

This project is developed using following technologies.
 - [React] (https://react.dev/) - The library for web and native user interfaces
 - [Tailwind] (https://tailwindcss.com/) - A utility-first CSS framework packed with classes 
 - [Recharts] (https://recharts.org/en-US/) - A composable charting library built on React components
 - [Lodash debounce] (https://lodash.com/docs/4.17.15#debounce) - Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. 

## Technical Documentation

This project contains different components like App,GraphArea, SelectedMovies, Metadata etc.

- App - This is where we render GraphArea, Add movie button,SelectedMovies component

- GraphArea - This component renders a bar chart when provided with data containing atleast 2 results to compare
- SelectedMovies - This component renders movies in a scrollable area
- Modal - Reusable modal component that renders ModalContent
- ModalContent- This component is displayed inside modal when clicked on add button
- Search - This component handles searching for a movie, finding suggestions and displaying Metadata component
- Metadata - This component renders metadata for a movie
- api.js - This file contains functions that make api call to fetch movies,movie metadata.
- helpers.js - This file contains functions that return url for search api, movie api
- constants.js - This file contains baseUrl for api, and apiKey 

## Steps to run application

1. Clone the [IMDB repo](https://github.com/akhilpallikonda/IMDB) from git
2. Navigate to the IMDB cloned folder
3. Install node modules using command `npm install`
4. Start application by running command `npm start`