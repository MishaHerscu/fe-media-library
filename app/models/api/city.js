import DS from 'ember-data';
// import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),

  artist_ids: hasMany('artist'),
});