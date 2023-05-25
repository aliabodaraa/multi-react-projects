import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => async dispatch => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});
export const fetchUserInefficient = function(id) { //the downside of this approch is everytime you will invoke fetchUser() you will create async function in memory and memoize it and call it from redux-thunk
    return _.memoize(async function(dispatch) {
        const response = await jsonPlaceholder.get(`/users/${id}`);

        dispatch({ type: 'FETCH_USER', payload: response.data });
    });
}