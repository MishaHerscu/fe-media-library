import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('api/artists');
  this.route('api/albums');
  this.route('api/comments');
  this.route('api/cities');
});

export default Router;
