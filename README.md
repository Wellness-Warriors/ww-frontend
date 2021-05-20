# ww-front-end

install react dom router package
npm i react-router-dom@5

- import  {BrowserRouter as Router,Route,Switch} this allos you to use the router being imported

- must wrap BrowserRouter around all components in APP js

- decide where page content will go depending on the component
- Switch Component is where all routes are
- Set up individual routes using Route Component
- add path="" property to Route Component
  where "/" is the root/homepage
- nest the components in desired route

- added dotenv package
- still trying to remove env file

- [health.gov web widget](https://health.gov/our-work/health-literacy/consumer-health-content/free-web-content/health-widgets-badges)
personalized information for a specific person based on age, Here are important ways to stay healthy.
-https://health.gov/our-work/health-literacy/consumer-health-content/free-web-content/apis-developers/terms-use must properly cite this per their instructions

sentiment text analyze library
https://www.npmjs.com/package/sentiment

- html dom tags in api string response
  - solved using regex from https://www.tutorialspoint.com/how-to-remove-html-tags-from-a-string-in-javascript
