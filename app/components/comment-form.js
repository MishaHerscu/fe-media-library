import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],

  commentInfo: {
    author: '',
    message: ''
  },

  actions: {
    submit () {
      if(this.get('commentInfo.author') !== '' && this.get('commentInfo.message') !== '') {
           this.sendAction('createComment',
                           this.get('commentInfo'),
                           this.get('album.id'));
         }
    },

    reset () {
      this.set('commentInfo', {});
    },
  },
});
