import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      artist: this.get('store').findRecord('artist', params.artist_id),
      albums: this.get('store').query('album', { artist_id: params.artist_id } )
    });
  },
});
