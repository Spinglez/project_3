# movieNite 


### OVERVIEW

movieNite is a movie matching application to help you decide what movie to watch with a friend. Create an account, take a survey, and then search for a friend via email. When you connect with a friend, your movie interests are compared and the movies that fit best with both of your interests will be recommended to you!

Visit the website at [https://matchmovienite.herokuapp.com](https://matchmovienite.herokuapp.com)!


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


### Prerequisites

This project requires [Node.JS](https://nodejs.org/en/) - (download the LTS version)

You will also need to install [mongoDB](https://www.mongodb.com/download-center/community)

To gain access to API data, you will need to sign up and acquire API keys from: 

* [OMdb](https://www.omdbapi.com/) 
* [TMdb](https://www.themoviedb.org/documentation/api)
* [Utelly](https://rapidapi.com/utelly/api/utelly) 

Create a file named `.env` within the backend folder (along side the file server.js) and paste the following code within the file (do not include the curly brackets):

```
TMDBKEY={YOUR API KEY}
OMDBKEY={YOUR API KEY}
UTELLY_KEY={YOUR API KEY}
```


### Installing

Upon cloning or downloading the project files, navigate to the root of the project in your console and run the command:

```
npm install or npm i
```

In a separate console window, run the command:

```
 mongod
```

this starts up the local mongoDB server.

Finally, navigate to the root of the project folder within the console you executed `npm install` in and run:

```
npm start
```

You will need to create at least two user accounts and create a match between the users to fetch recommended movies that you can then save.

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [Mongoose](https://mongoosejs.com/) - (ODM) library for MongoDB and Node.js.
* [Styled-Components](https://www.styled-components.com/) - Style your apps without stress
* [Ant Design](https://ant.design/)
* [Auth0](https://auth0.com/) - Authentication & Authorization platform

<hr/>

## **Collaborators**
* **Christian Cabrera**'s [Github](https://github.com/Spinglez)
* **Tam Tran**'s [Github](https://github.com/tamtr89)
* **Matt Wong**'s [Github](https://github.com/mattthewong)
* **James Wilcox**'s [Github](https://github.com/agunforhire)
* **Nareg Keledjian**'s [Github](https://github.com/nkeledjian)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



# 😃 Thank you for visiting!