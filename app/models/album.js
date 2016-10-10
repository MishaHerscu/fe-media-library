import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  year: DS.attr('number'),
  total_sold: DS.attr('number'),

  artist_id: belongsTo('api/artist'),

  comment_ids: hasMany('api/comment'),
});
