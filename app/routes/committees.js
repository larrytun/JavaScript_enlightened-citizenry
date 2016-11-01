import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    getSenateCommittees() {
      this.transitionTo('senate-results');
    },
    getHouseCommittees() {
      this.transitionTo('house-results');
    }
  }
});
