/* global describe it */
import expect from 'expect';
import nock from 'nock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer, {
  GET,
  FAILED,
  getList,
  gotList,
  getListFailed
} from 'redux/modules/list';

const mockStore = configureStore([thunk]);

describe('Modules::List', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  it('should return default state if did not match any action type', () => {
    const stateBefore = undefined;
    const action = {};
    const stateAfter = [];
    expect(reducer(stateBefore, action)).toEqual(stateAfter);
  });
  it('should return correct state if match GET type', () => {
    const stateBefore = [];
    const action = {
      type: GET,
      data: [{
        id: 1,
        title: 'Title A',
        body: 'Body A',
      }],
    };
    const stateAfter = {
      id: 1,
      title: 'Title A',
      link: '/article/1',
      desc: 'Body A',
      img: 'https://picsum.photos/320/180?image=1'
    };
    expect(reducer(stateBefore, action).shift()).toEqual(stateAfter);
  });
  it('should return correct state if match FAILED type', () => {
    const state = [];
    const action = {
      type: FAILED,
    };
    expect(reducer(state, action).length).toBe(0);
  });
  it('Action::getList() success', () => {
    nock('https://jsonplaceholder.typicode.com/')
      .get('/posts')
      .reply(200, [{
        "userId": 1,
        "id": 1,
        "title": "title",
        "body": "body"
      }]);
    const store = mockStore({ list: [] });
    return store.dispatch(getList())
      .then(() => {
        const actions = store.getActions();
        const action = actions[0];
        const expectedResult = gotList([{
          "userId": 1,
          "id": 1,
          "title": "title",
          "body": "body"
        }]);
        expect(action).toEqual(expectedResult);
      });
  });
  it('Action::getList() failed', () => {
    nock('https://jsonplaceholder.typicode.com/')
      .get('/posts')
      .replyWithError('API crashed');
    const store = mockStore({ list: [] });
    return store.dispatch(getList())
      .then(() => {
        const actions = store.getActions();
        const action = actions[0];
        const expectedResult = getListFailed();
        expect(action).toEqual(expectedResult);
      });
  });
});