import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=house&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },

  actions: {
    getSenateCommittees() {
      this.transitionTo('senate-results');
    }
  }
});
