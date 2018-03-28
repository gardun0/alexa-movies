'use strict';

const Alexa = require('alexa-sdk');

const movies = {
  movies_genre: {
    action: [
        {
          name: 'Mad Max Fury Road'
        }
    ],
    
    drama: [
        {
            name: 'the whape of water'
        }
    ]
  },

  movies: [
      {
          name: 'the shape of water',
          year: 2017,
          director: 'Guillermo del Toro'
      },
      {
          name: 'mad max',
          year: 2015,
          'director': 'George Miller'
      }
  ]  
}

var handlers = {
  'LaunchRequest': function () {
    this.response.speak('Hello, let me know what do you wanna know about movies?').listen('Do not ignore me!');
    this.emit(':responseReady');
  },

  'MovieRecommendIntent': function () {
    const movieGenre = this.event.request.intent.slots.movie_genre.value;

    this.response.speak(`I can recommend you ${movies.movies_genre[movieGenre][0].name} movie.`);
    this.emit(':responseReady');
  },

  'Unhandled': function () {
    this.emit('LaunchRequest');
  }
};

exports.handler = (event, context, callback) => {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
