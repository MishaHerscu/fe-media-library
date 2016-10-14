import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('popular-artists-list', 'Integration | Component | popular artists list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{popular-artists-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#popular-artists-list}}
      template block text
    {{/popular-artists-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
