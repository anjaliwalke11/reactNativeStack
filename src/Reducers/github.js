import { GIT_LOGIN_SUCCESS, GIT_COMMITS_SUCCESS } from '../Actions/GitActions'
function GitHubReducer(state = {}, action) {
  switch (action.type) {
    case GIT_LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
        TOKEN: action.login
      }
      break;
    case GIT_COMMITS_SUCCESS:
      return {
        ...state,
        commits: action.commit.data.user.pullRequests.edges.map(function(item){
          return item.node.commits.edges[0].node.commit.tree.commitUrl;
        })
      }
      break;
    default:
      return state;
      break;
  }
}

export default GitHubReducer
