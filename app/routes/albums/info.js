import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('album', params.album_id);
  },

  actions: {
    createComment (commentInfo, album_id) {
      this.get('store').findRecord('album', album_id)
      .then((album) => {
        var newComment = this.get('store').createRecord('comment', {
          message: commentInfo.message,
          author: commentInfo.author,
          album: album.get('id')
        });
        newComment.save();
      })
      .then(() => {
        this.refresh();
      });
    }
  },
});
