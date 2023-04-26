# Potato | Share your recipes!

Potato is a browser-based recipe sharing platform. It targets people seeking to find cooking inspiration in other users recipes or share their own. 

Some of the features include being able to create a profile and upload recipes, recipe search functionality and staying up to date with all the recipe creators you enjoy. All this and more while being presented in a fun and simple but elegant manner with quick and easy navigation. 


The live site can be found here: [Potato](https://potato.herokuapp.com/)

<img src="docs/images/responsive_units.png" alt="responsive units">

# Table of contents
1. [UX-Design](#ux-design)
    - [Planning](#planning)
        - [Design Thinking](#design-thinking)
        - [Project Goals](#project-goals)
        - [User Stories](#user-stories)
    - [Wireframe](#wireframe)
        - [Style and colors](#style-and-colors)


# UX-Design
## Planning
### Design thinking
When I began working on this project I tried to put myself in the users position, trying to imagine what a users wants and needs are on a recipe sharing platform. 

I first posed two important questions imagined being answered by a user of the website:
- Why would a user want to use our recipe sharing platform?
    - *To share and discover recipes with other users.*
- What will make them return?
    - *A pleasant and intuitive user experience, featuring actions allowing them to easily interact with other users recipes.*

Examining the answers of these questions, I could follow up with a final question, also imagined being answered by a user: 
- What would be the most important features of a recipe sharing platform?
    - *Easy navigation*
    - *Create and share recipes*
    - *View other users recipes*
    - *Interact with recipes (i.e. like, bookmark, comment)*
    - *Recipe search functionality*
    - *Content presented is relevant to me and my interests and I have the ability to interact and modify it’s relevance*

By posing these three important questions, I got an idea of the key features that needed to be implemented into the project to achieve a users expectations. 

### Project Goals
The goal was to build a pleasant recipe sharing platform that allows users to interact with eachother and their recipes. Key features that needed to be implemented: 
- Quick and easy navigation
- User authentication
- User profiles with avatar, information and recipes
- User can interact through recipes with likes, bookmarks, comments, follows
- CRUD functionality for recipes, likes, bookmarks, comments, followers and profile information
- Content filtering by title, recipe author, followed users recipes, bookmarked recipes

### User stories

#### Navigation
- Site navigation: As a Site user I can view a navigation bar from every page so that I can navigate easily between pages
- Conditional rendering: As a Site user I can see sign in and sign up options when NOT signed in so that I can sign in or sign up for an account
- Routing: As a Site user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Avatar: As a Site user I can view users avatars so that I can easily identify users of the application

#### Authentication
- Sign up: As a Site user I can create a new account so that I can access all the features for signed up users 
- Sign in: As a Site user I can sign in to the app so that I can access functionality for signed in users 
- Signed in status: As a Site user I can tell if I am signed in or not so that I can sign in/out if I need to 
- Refresh access tokens: As a Site user I can maintain my signed in status until I choose to sign out so that my user experience is not compromised

#### Adding recipes
- Post recipe: As a signed in Site user I can post recipes so that I can share my recipes with other users of the site 
- View a recipe: As a Site user I can view the details of each individual recipe so that I can learn more about it 

#### Recipes page
- View most recently posted recipe: As a Site user I can view all the most recent recipes, ordered by most recently created first so that I am up to date with the newest recipe content 
- Search functionality: As a Site user I can search for recipes with keywords so that I can find the recipes and user profiles I am most interested in
- Popular recipes: As a Site user I can view a list of the most liked recipes so that I can see which recipes are popular 
- View followed profiles: As a signed in Site user I can view recipes filtered by users I follow so that I can keep up to date with their recipes 
- Infinite scroll: As a Site user I can keep scrolling through the recipes on the site, that are loaded for me automatically so that I don’t have to click on “next page” etc

#### Individual recipe page 
- Recipe page: As a Site user I can view a recipes individual page so that I can access the contents and read the comments on that specific recipe
- Edit recipe: As a Recipe owner I can edit the recipe title and content so that I can make corrections or update my recipe after it was created 

#### Commenting on posts
- Create a comment: As a signed in Site user I can add comments to a recipe so that I can share my thoughts about that recipe 
- Comment date: As a Site user I can see how long ago a comment was made so that I know how old a comment is 
- View comments: As a Site user I can read comments on recipes so that I can read what other users think about that recipe 
- Edit comment: As an Owner of a comment I can edit my comment so that I can fix or update my existing comment 
- Delete comment: As an Owner of a comment I can delete my comment so that I can control removal of my comment from the app 

#### Liking recipes
- Like/Unlike a recipe: As a signed in Site user I can like or unlike other profiles recipes so that I can show my support for the recipes that interests me 

#### Saving recipes 
- Save/Unsave a recipe: As a signed in Site user I can save or unsave other profiles recipes so that I can bookmark and save their recipe for future use 

#### Follow users 
- Follow/Unfollow a user: As a signed in Site user I can follow and unfollow other user profiles so that I can see and remove posts by specific users in my recipes feed 

#### Profile page
- Profile page: As a Site user I can view other user profiles so that I can see their recipes and learn more about them
- View saved recipes: As a signed in Site user I can view saved recipes of other user profiles so that I can find the recipes I saved for later use 
- User profile stats: As a Site user I can view stats about a specific user profile: name, nationality, bio, number of recipes, follows and users followed so that I can learn more about them 
- View all recipes by a specific user profile: As a Site user I can view all the recipes by a specific user so that I see their latest recipes or decide to follow them 
- Edit profile: As a signed in Site user I can edit my profile so that I can update my profile information 
- Update username and password: As a signed in Site user I can update my username and password so that I can change my display name an keep my profile secure

## Wireframe
Before building, when planning this website I used the design tool Figma, to create a wireframe of the project. It allowed me to make a basic sketch of what I wanted the the website to look like, what features to include and where to place them. This proved to be very useful as I could base my decisions on the already sketched out wireframe when building the website.

Desktop and mobile layout: 

<img src="docs/images/wireframe.png" alt="Wireframe planning stage">

## Style and colors
- Colors
    - When deciding the style of the site, I gathered inspiration from existing recipe sharing platforms. The style I was aiming for was meant to follow the imagined answers (mentionend above) of the platforms users. It needed to be clear, quick and easy to navigate. Therefore, I chose three main colors to build the style on and use consistently thoughout the platform. These three colors are pleasant and contrast each other well, following the concept of clear and easy navigation for the user. 

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Green | ![#55be6c](https://via.placeholder.com/10/55be6c?text=+) #55be6c |
| Grey | ![#555555](https://via.placeholder.com/10/555555?text=+) #555555 |
| White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |

- Fonts
    - The font used in this project is Nunito from [Google Fonts](https://fonts.google.com/). This font followed the inteded theme nicely with its simple and fun aesthetic.

