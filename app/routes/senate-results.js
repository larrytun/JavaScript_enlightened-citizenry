import config from '../config/environment';
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://congress.api.sunlightfoundation.com/committees?chamber=senate&apikey=' +key;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },

  actions: {
    getHouseCommittees() {
      this.transitionTo('house-results');
    }
  }
});
