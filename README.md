# e-core-test
E-core front-end exercise

## About the project


### Built With

* [React.js](https://reactjs.org/)
* [React-router](https://reactrouter.com/)
* [Jest](https://jestjs.io/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) 

### Main task
Build a UI showing an overview of all the teams, and allow the current user to navigate between teams to see each team's members. At the top of the teams overview page, add an input field, which filters the teams when the input value changes. This input field could also be used in other pages of your app, e.g. for filtering out team members in the team page.

REST endpoints:
https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/
https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/

Append the IDs of users and teams to get further information about each entity, e.g.
https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/users/02095fb1-0e3d-469e-922c-0b2f9f58635d
https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/bdad9afe-63c3-4ff2-ae6b-f1143d92ca15
This is the Teams REST service and it has a list of users, each user can be part of zero or more teams. Each team has one user as a team lead.

## Getting Started
To get a local copy up and running follow these simple example steps.

### Prerequisites
You need to have NodeJS 
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the application
   ```sh
   npm start 
   ``` 
4. (Optional) Test the application
   ```sh
   npm test 
   ``` 

## Usage
