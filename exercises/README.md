# Exercises

Here are 3 exercises which build upon each other to help you with your understaning of a complese CEH View application.
You do not need to do the exercises in order but they are progressively harder

1. [Date "Done" and "Outstanding"](/exercises/exercise-1.md)
2. Deletable TODOs
3. Update User 







Here are a couple of exercises you can do to help you learn how a CEH View application works. The exercises are meant to be vague so you can solve the problem anyway you see fit. If you want feedback then fork this repo and create an issue in this repo and we will take a look to give some feedback.

## Add dates to "Done" and "Outstanding"

*difficulty* easy

*Learning objectives:* how to update the server without having to change the client (or even having to turn the client off or on)

Once you have started the application and added some TODOs, you will notice both `Done` and `Outstanding` does not tell the date of the TODO.

In this exercise you will need to update `view-api/src/sections/done.js` and `view-api/src/sections/outstanding.js` such that they add a [head](https://nerc-ceh.github.io/ceh-view/elements/head) element with the date.

You should try the following

* keep both server and client running whilst doing this
* go to view, open `Done` then change the server (add the heads)
* without refreshing `Hide Done` and reopen `Done`

You should notice the client is up-to-date without having to refresh the application. This is one of the strengths of a CEH View Application, it propagates small changes and fixes to the client without them having to be informed of changes, all they have to do is trigger a change. For example you could have also added a new TODO and it would have also updated this list.

## Make it possible to delete a TODO

*difficulty* medium

*Learning objectives:* how to extend the CEH View library and do local development with it

Once you have started the application and added some TODOs, you will notice you can not delete a TODO. This exercise is to add some kind of delete button to each todo so it can be removed. You could solve this in one of 3 ways

1. in `view-api/src/sections/item.js` add a [button](https://nerc-ceh.github.io/ceh-view/elements/button) below or above each item
2. search the elements for something which might fit the criteria better
3. add a new element in CEH View of your own design

The problem with the first solution is that it will not be very user fiendly and may require you to do some CSS overriding which you want to avoid.

The problem with the second solution is that you will not learn how to add a new element to the CEH View library and contribute back to the wider community. So even if there is a better element let's just pretend that one does not exist.

So let's go with solution 3. Here are the steps to setup CEh View locally

### Using node

from this directory, if you are running the view you will need to stop it first

terminal 1

```sh
cd ..
git clone ceh-view
cd ceh-view
npm install
npm run dist
```

terminal 2

```sh
cd view
npm link ../../ceh-view
npm start
```

now when you change something in ceh-view it will (takes a couple of seconds) update in your view

### Using docker

from this directory

```sh
cd ..
git clone ceh-view
cd ceh-view
docker-compose up -d
```

now update `docker-compose.yml` with

```yaml
version: '3'
services:
  view:
    build: ./view
    command: bash -c "npm i && npm link ../ceh-view && npm start"
    volumes:
      - ../ceh-view:/usr/ceh-view
      - ./view:/usr/app/
      - /usr/app/node_modules
    ports:
      - 3000:3000
  view-api:
    build: ./view-api
    command: bash -c "npm i && npm run dev"
    volumes:
      - ./view-api:/usr/app/
      - /usr/app/node_modules
    ports:
      - 4000:4000
```

now run

```sh
docker-compose down view && docker-compose up --build -d view
```

**AFTERWARDS** node or docker

You can pretty much solve this however you see fit.

A suggestion is to follow what `ceh-view/src/elements/input-text.js` does this with it's `buttons` props.
You could also create your own element. See the CEH View documentation on how to create an element.

You will need to update `view-api/sections/todo.js`, `view-api/sections/done.js`, `view-api/sections/outstanding.js` with these new props/elements

You will need to update `view/actions/todo.js`, `view/actions/done.js`, `view/actions/outstanding.js` so that they trigger a `fetch` (see how `add` in `view/actions/todo.js` works and you can do something similar)

You will need to update `view-api/src/data/index.js` with a `delete` function, or change the `update` to be able to remove an item.

You will need to update `view-api/src/server.js` with a new route, a suggestion is to create a `router.delete('/', (ctx) => ...)` since this is deleting behaviour

Whether you update checkbox with `buttons` or create your own element does not matter, but why not create a PR in CEH View?

## Add users

*difficulty* hard

*Learning objectives:* how to add a new route and how to transition between parts of a single page web app

This one is hard because you get a lot of free rein.

If you want to make it really hard (but how you might actually want to solve this problem outside of this exercise) use <http://www.passportjs.org/> in order to let people log in. You don't have to use crowd, you could use something like GitHub login. If you are going to do this you need to investigate things like adding https to your server and beefing up the security.

If you want to make it not really hard but still hard. You need to add these endpoints `/signin`, `/signout`, and `/profile`.

If you want to make it hard. You want to add a `/profile` page which allows the user to change their name (and any other details that pop into your head).

If you allow multiple users (either really hard or not really hard but still hard) then you will need to change how the files are saved, perhaps you need to change how the database works, you could consider changing from a flat file system to something like <https://pouchdb.com/> or <http://lokijs.org>, both very lightweight solutions.

In any of these cases we will cover how to go to a `/profile` page. We are going to make it so that it will transition from the top and slide down, pushing the current view down, like a menu from above.

You need to update the `view/src/component.js` with a new `Sections` with profile
You want to update `view/src/reducer/index.js` to add a default `profile` to the state, should be `state.prfile = {key: 'profile', size: '12'}`
You need to update `view-api/src/sections/hero.js` so that when you click user it will trigger an action `'profile'`
You need to add a new `view/src/actions/hero.js` with this new event and it should change the route using `history.push`

this is taking a while, wait for updates if you are struggling to work it out on your own
