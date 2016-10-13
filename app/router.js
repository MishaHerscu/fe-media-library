import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists');
  this.route('artists/info', { path: 'artists/info/:artist_id' } );
  this.route('albums');
  this.route('comments');
  this.route('cities');
});

export default Router;
