import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('artists/info', { path: 'artists/info/:artist_id' } );
  this.route('albums');
  this.route('albums/info', { path: 'albums/info/:album_id' } );
  this.route('comments');
  this.route('comments/info', { path: 'comments/info/:comment_id' } );
  this.route('cities');
  this.route('cities/info', { path: 'cities/info/:city_id' } );
});

export default Router;
