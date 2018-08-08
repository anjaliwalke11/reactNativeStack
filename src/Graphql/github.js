import gql from "graphql-tag";
import { client , store } from '../Reducers'
import {
  gitFollowersSuccessCreator,
  gitCommitsSuccessCreator
} from '../Actions/GitActions'
const GET_GIT_FOLLOERS = gql `
  query getFollers($login: String!) {
    user(login: $login) {
      followers(first: 20) {
        edges {
          node {
            id
            name
          }
        }
      }
      following(first: 20) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

const GET_GIT_COMMITS = gql `
  query getCommits($login: String!) {
    user(login: $login) {
      pullRequests (first: 50) {
        edges {
          node {
            commits (first: 50) {
              edges {
                node {
                  commit {
                    tree {
                      id
                      commitUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const gitHubFollers = function(user) {
  return client.query({
    query: GET_GIT_FOLLOERS,
    variables: {
      'login': user
    }
  })
  .then(function(data){
    //return data;
    store.dispatch(gitFollowersSuccessCreator(data))
  })
}

const gitHubCommits = function(user) {
  return client.query({
    query: GET_GIT_COMMITS,
    variables: {
      'login': user
    }
  })
  .then(function(data){
    store.dispatch(gitCommitsSuccessCreator(data))
  })
}



export { gitHubCommits }
