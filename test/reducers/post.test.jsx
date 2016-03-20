import expect from "expect";
import deepFreeze from "deep-freeze";

import * as reducers from "reducers/post";
import * as actions from "actions/post";

describe("Reducer::Post", () => {
    it("#post(undefined, {})", () => {
        expect(
            reducers.post(undefined, {})
        ).toEqual({ id: -1, title: "Now", body: "Loading..." })
    })
    it("#post({...}, {type: RECEIVE_POST})",  () => {
        const beforeState = {};
        const action = {
            type: actions.RECEIVE_POST,
            post: { id: 1, title: "yo", body: "man" }
        };
        const afterState = { id: 1, title: "yo", body: "man" };

        deepFreeze(beforeState);
        deepFreeze(action);

        expect(
            reducers.post(beforeState, action)
        ).toEqual(
            afterState
        )
    })
})