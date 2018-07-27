import gql from "graphql-tag";
import { client , store } from '../Reducers'
import {
  gitFollowersSuccessCreator
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

export { gitHubFollers }
