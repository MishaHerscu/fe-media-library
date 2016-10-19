import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createComment (commentInfo, album_id) {
      this.sendAction('createComment', commentInfo, album_id);
    }
  }
});
