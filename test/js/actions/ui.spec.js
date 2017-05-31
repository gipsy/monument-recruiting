import * as Actions from '../actions/ui';
import { call, put } from 'redux-saga/effects';

describe('Saga', () => {
    it('should call the api on first action dispatch, and dispatch a success action', () => {
        const iterator = Actions.requestFetchFromApi({ userId: 1 });

        // Assert that it called the api
        expect(iterator.next().value).toEqual(call(Actions.fetchFromApi, 1));

        // Assert that it dispatched the success action because the api didn't return an error code
        const data = {};

        expect(iterator.next(defaults).value, put(Actions.fetchApiSuccess(data)));
    });

    it('should call the api on first action dispatch, and dispatch a fail action', () => {
        const iterator = Actions.requestFetchFromApi({ userId: 'asdf' });

        // Assert that it called the api
        expect(iterator.next().value).toEqual(call(Actions.fetchFromApi, 'asdf'));

        // Assert that it dispatched the fail action because the api call threw an error
        const error = {};

        expect(iterator.throw(error).value, put(Actions.fetchApiFail(error)));
    });
});
