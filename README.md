# Project 3: Sour Grapes (API)

## Other Important Links & Resources Used:

## Planning and Story: Development Process and Problem-Solving Strategy:

### Planning:
- We started by choosing a prompt and decided to go with a message board. Next, we mapped out our process by drawing an ERD to show the relationship between our resources (the user, the posts, and the comments). Afterwards, we drew up a wireframe to plan out how we wanted the UI to appear to the user. We wrote user stories to layout the functionality we wanted to create for the user experience.
### CRUD Posts & Comments:
- As a team, we started with our create post action together, then show one post since we would need this functionality before other CRUD actions. At this point, we split up into 2 groups and utilized peer programming to complete the other actions. With our comment resource, since it is a sub-document, we completed the 3 comment actions together since they were more complex than post.
### Problem-Solving:
- We were having issues with the asynchronous flow of the code when creating/updating/deleting comments. The ShowPost page (where comments live) was re-rendering before we recieved the API response. We ended up having to use the async/await syntax to make our code pattern synchronous allowing the re-render function to use the response from the API.
## User Stories:
-As a user, I want to be able to sign up
-As a user, I want to be able to sign in
-As a user, I want to be able to change my password
-As a user, I want to be able to sign out
-As a user, I want to be able to view all of my wines
-As a user, I want to be able to view a single wine entry
-As a user, I want to be able to create a new wine entry
-As a user, I want to be able to edit a wine entry
-As a user, I want to be able to delete a wine entry
-As a user, I want to be able to view all wine entries, even if they aren't mine
## Technologies Used:
- HTML/CSS
- Bootstrap
- Javascript
- React
- Axios
- Github Pages
## Unsolved Problems

## Wireframes
![Wireframes](https://i.imgur.com/nLmdsu8.png "Wireframes")
