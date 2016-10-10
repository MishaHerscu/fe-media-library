import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  founding_year: DS.attr('number'),

  based_in: belongsTo('api/city'),

  album_ids: hasMany('api/album'),
});
