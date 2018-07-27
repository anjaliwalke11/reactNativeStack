/* Action */
const GIT_LOGIN_SUCCESS = "git_login_success"
const GIT_LOGIN_FAILD = "git_login_faild"
const GIT_LOGIN_EVENT = "git_login_event"
const GIT_FOLLOWER_SUCCESS = "git_folloers_sucess"
const GIT_FOLLOWER_QUERY = "git_folloers_query"

/* Action Creators */
function loginActionSuccessCreator(login) {
  const action = {
    type: GIT_LOGIN_SUCCESS,
    login
  }
  return action
}

function loginActionFaildCreator(error) {
  const action = {
    type: GIT_LOGIN_FAILD,
    error
  }
  return action
}

function gitFollowersSuccessCreator(data) {
  const action = {
    type: GIT_FOLLOWER_SUCCESS,
    data
  }
  return action
}

function gitFollowersQueryCreator(userQuery) {
  const action = {
    type: GIT_FOLLOWER_QUERY,
    userQuery
  }
  return action
}


export {
  GIT_LOGIN_SUCCESS,
  GIT_LOGIN_FAILD,
  GIT_LOGIN_EVENT,
  GIT_FOLLOWER_SUCCESS,
  GIT_FOLLOWER_QUERY,
  loginActionSuccessCreator,
  loginActionFaildCreator,
  gitFollowersSuccessCreator,
  gitFollowersQueryCreator
}
