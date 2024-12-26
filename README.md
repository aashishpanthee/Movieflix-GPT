# MovieFlix GPT

!!! ISSUE: Open-ai's, gpt api is not working due to excessive api calls and free quotas for the api call has been finished. so we have used MOCK MOVIES DATA for now.

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create Signup user account
- Implement Sign in user api
- Created Redux Store with auth slice
- Stored user email & password in Firebase database & redux store
- BugFix: Sign up user display name and profile picture
- BugFix: If the user is not logged in, the user should be redirected to login page & if logged in, should be able to access the browse page
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom hook for Now Playing Movies
- Create movieSlice
- Update store with movies data
- Fetch data for trailer video
- Updated store with Trailer video data
- Embedded the youtube video & make it autoplay and mute
- Build Secondary Container
- Build Movie List
- Build Movie Card
- custom hook for all the movie types
- GPT Search Page
- GPT Search Bar
- Multi-language feature in GPT Search Page
- Open ai integration
- fetched gptMoviesSuggestions from TMDB
- memoization in hooks
- Responsive UI
- Implemented React-query for sever side calls to fetch movies data

# Features

- Sign up / Login

  - Sign up / Sign in Form
  - Redirect to Browse Page

- Browse Page (after authentication)

  - Header
  - Main Movie
    - Trailor in background
    - Movie title & description
    - Movie Suggestions
      - MovieLists

- MovieFlix GPT
  - Search-bar
  - Movie Suggestions

# Deployment in Firebase

- Steps:
  - firebase login
  - firebase init
  - firebase deploy
