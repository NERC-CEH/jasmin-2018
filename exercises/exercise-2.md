# Deletable TODOs

If you have created some TODOs you will notice you can not remove them. Clearly not a great experience for a user. A solution is to put a delete button on each TODO, which could look like the following

![alt text](/exercises/exercise-2.png)

## Learning Outcomes

You will learn how to create a new CEH View element and how to add actions.

## Guidance

You could just update `/view-api/src/sections/item.js` to have a button. However for this exercise we want you to learn how to create a new CEH View element and how to contribute back to the CEH View community.

### Local CEH View

from `ceh-view-template` directory

```sh
cd ..
git clone git@github.com:NERC-CEH/ceh-view.git
cd ceh-view
npm install
npm run dist
```

This will start the dist running with watch. You can also run `npm start` and have the docs running locally, which you can edit for a faster response. See CEH View documentation for more information about this.

```sh
cd ../ceh-view-template
npm link ../ceh-view
```

Now any changes you make will pass into your project.

### Files to Change

Follow CEH View documents in creating a new element (perhaps name it `todo.js`)
Update `/view-api/src/sections/item.js` with your new element
Update `/view-api/src/server.js` with a `router.delete` endpoint
Update `/view/src/actions` with your new delete actions

See `add` in `/view/src/actions/todo.js` for similar kind of pattern
