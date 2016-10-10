import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  message: DS.attr('string'),

  album_id: belongsTo('album'),
  author: belongsTo('author'),
});