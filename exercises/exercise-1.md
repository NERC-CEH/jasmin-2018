# Date "Done" and "Outstanding"

Currently anything in "Done" and "Outstanding" has no dates, which makes the user experience lacking should they have lots of TODOs. This exercise is to update the sections such that they have heads as dates. You are aiming for something similar to:

![alt text](/exercises/exercise-1.png)

## Learning Outcomes

You will learn how a CEH View application can run purely on JSON changes. You will also see some of the strength of CEH View approach to developing an application.

## Guidance

You only need to change `/view-api/src/sections/done.js` and `/view-api/src/sections/outstanding.js`

## Updating the Client

One of the features of a CEH View application is that the client will seldom need updating and that it will only need to update view elements, CSS, and client functionality (e.g. new button clicks). You can see this for yourself by doing the following.

1. in view make sure you have `npm start` running
2. in view-api make sure you have `npm run dev` running
3. stash your changes
4. get the client in a situation similar to the picture above
5. unstash your changes
6. click "Hide Done"
7. click "Done"

You should now see your changes have been applied to that element only and the client did not have to do any refreshing.

Why is this a good thing? If you change your data and how it is accessed, the next time the client refreshes the element rendered by the data it will have all the latest changes and you did not have to tell any client about this. This is good if you have large data sets which change regularly and would be costly should a client want the data created on request.