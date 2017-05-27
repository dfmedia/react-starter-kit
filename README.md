# DFM React Starter Kit

This is a sample app using React, Redux, React Router, Axios (ajax fetching), and the Ant Design component library

This is simply an example of structuring apps, connecting and retrieving data from a Redux store and using
the Ant Design component library. 

The app fetches 50 articles from the Denver Post REST API and caches them in the Redux store. But it gives an example of how to interact
with data from an external source inside a React, Redux app.

## Run the app

Clone the repo, run `npm install` to install the npm dependencies, then run `npm start` and visit http://localhost:8000

## Starting a new project based on this demo

It's not recommended to fork this repo for a new project, just use it as a guide. . .you can download the source and start with it, but forking it likely isn't ideal for a larger project you're working on. 

If you want to contribute back to this sample app by adding conceptual examples, etc, then fork and open a PR. 

## Structure

- app: the main source files for the app
- app/index.js: the entry point for the app
- app/components: the presentational components of the app
- app/containers: the non-presentational components that connect presentational components to some data (the Redux store)
- app/state: configuration of the Redux store and actions and reducers for interacting with the Redux store. The directories here should match the shape of the Redux sub-trees
