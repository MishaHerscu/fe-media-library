import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      params: params,
      albums: this.get('store').findAll('album')
      .then((albums) => {
        return albums.filter((album) => {
          return album.get('year') === params.year;
        });
      }),
    });
  },
});
