import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('artists', { path: '/api/artists' } );
  this.route('albums', { path: '/api/albums' } );
  this.route('comments', { path: '/api/comments' } );
  this.route('cities', { path: '/api/cities' } );
});

export default Router;
