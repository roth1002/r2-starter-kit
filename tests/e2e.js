/* global fixture, window */

import { ClientFunction, Selector } from 'testcafe';

fixture`post list`
  .page`http://localhost:8080/`

test('render post list', async (t) => {
  await t
    .expect(Selector('.items').count).eql(1)
    .wait(1000);
});

test('click first post', async (t) => {
  await t
    .click(Selector('.item').nth(0))
    .wait(1000);
});

fixture`post`.page`http://localhost:8080/posts/1`;

test('render post', async t => {
  await t
    .expect(Selector('.image').count).eql(1)
    .expect(Selector('.content').count).eql(1)
    .expect(Selector('.description').count).eql(1)
    .wait(1000);
});

test('click breadcrumb `home`', async (t) => {
  const getPageUrl = ClientFunction(() => window.location.href);

  await t
    .click(Selector('.breadcrumb').find('a').nth(0))
    .expect(getPageUrl()).contains('http://localhost:8080/')
    .wait(1000);
});
