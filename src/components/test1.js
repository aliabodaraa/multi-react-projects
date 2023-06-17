//createSelector Implementation
import _ from 'lodash';
const postsSelector = (state) => {
    return state.posts
}
const selectedPostsSelector = (state) => {
    return state.selectedPostsIds
}
const getPosts = (posts, selectedPosts) => {
    return console.log(posts, selectedPosts, "collectFuncsCalls")
}

function createSelector(...funcs) {
    let collectFuncsCalls = [];

    return (state) => {
        for (var i = 0; i < funcs.length - 1; i++)
            collectFuncsCalls[i] = funcs[i](state);
        // let posts = f1(state);
        // let selectedPosts = f2(state)
        return funcs[funcs.length - 1](...collectFuncsCalls);
    }

}
export default
createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts
);

/* import test1 from "./test1";
createSelector Implementation 

    {
      test1({
        posts :{
          post1:{name:"post1"},
          post2:{name:"post2"},
          post3:{name:"post3"},
          post4:{name:"post4"}
        },
        selectedPostsIds :[1,2,3]
      })
      }
      createSelector Implementation */