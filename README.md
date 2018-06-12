# CEH View Template

A CEH View template. It contains 2 parts, the view and the view-api

## View

This is a todo application which uses React, React Router and Redux. The view is designed to be "dumb" and every request made is a request sent to the server givving a single page experience.

## View API

This is a Koa server which uses a flat file system in order to save a persons todo list.

## Documentation

The template has comments in the code where you can find more documentation on the subject. You should start in `view-api/src/server.js` and `view/src/index.js`.

## Usage

You can start everything using `docker-compose up -d`
Both `view` and `view-api` has it's own `README.md` on how to start it if you do not want to use docker

## Exercises

There are also some [Exercises](/exercises)