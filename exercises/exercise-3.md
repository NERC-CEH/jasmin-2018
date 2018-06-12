# Update User

You will notice that the user is named `You` and is a static user. This exercise we will personalise the user and might look something like

![alt text](/exercises/exercise-3.png)

You should aim to animate this new panel into the view.

## Learning Outcomes

You will learn how to add a new `Sections` and how to show and hide this section in the client without having to refresh the entire page.

## Guidance

You need to update `/view/src/component.js` to have a new sections which takes value `this.props.user`
You will have to create a new set of actions in `/view/src/actions/user.js`
You will need to update `/view/src/reducer/index.js` so that when `user` is present in the url it has this as part of the route
You need to add a new sections under `/view-api/src/sections/user.js`
You need to save this user data under `/view-api/src/data/user.json`, add a new function to `/view-api/src/data/index.js` to do this
You need to update `/view-api/src/server.js` with a new `router.post` to allow the user to update their profile

To animate the new panel you will want to update `/view/src/index.css`
use `transition: transform 0.3s ease-in-out` and then change the new `Sections` from `transform: translateX(0)` to `transform: translateX(-100%)` (or something similar) in order to bring it in an out of the view. You will probably need to add `position: absolute` to this new `Sections` and put a `z-index: 1` in order to make it stay on top.