import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  founding_year: DS.attr('number'),

  city_id: belongsTo('city'),

  album_ids: hasMany('album'),
});
