const Alexa = require('alexa-sdk');
const { movies, movies_genre } = require('./movies')

var handlers = {
  'LaunchRequest': function () {
    this.response.speak('Hello, let me know what do you wanna know about movies?')
      .listen('Do not ignore me!');
    this.emit(':responseReady');
  },

  'MovieRecommendIntent': function () {
    const movieGenre = this.event.request.intent.slots.movie_genre
    
    this.response.speak(`I can recommend you ${movies_genre[movieGenre].name} movie.`);
    this.emit(':responseReady');
  },

  'Unhandled': function () {
    this.emit('LaunchRequest');
  },
};

module.exports.handlers = (event, context, callback) => {
  var alexa = Alexa.handler(event, context, callback);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
