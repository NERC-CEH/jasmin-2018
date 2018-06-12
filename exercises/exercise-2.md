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

* Follow CEH View documents in creating a new element (perhaps name it `todo.js`)
* Update `/view-api/src/sections/item.js` with your new element
* Update `/view-api/src/server.js` with a `router.delete` endpoint
* Update `/view/src/actions` with your new delete actions

See `add` in `/view/src/actions/todo.js` for similar kind of pattern

### CEH View Community

We have purposfully made it so you need to contribute elements to CEH View should you want to use them in the library. This is to promote sharing your elements as opposed to hoarding them. It also helps promote cleaner code, e.g. if you hard code the name of your application then someone else may want to re-use this element and then they will make it generic and not have that value hard coded. It also means if others find bugs in your elements they can then fix these bugs and you benefit when you update your client next.

Even if you think no one will ever use your new element you should add it anyway, as someone might use parts of it in order to create a new one.