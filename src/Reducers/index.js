import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import {
  ApolloClient
} from 'apollo-client';
import {
  InMemoryCache
} from 'apollo-cache-inmemory';
import {
  HttpLink
} from 'apollo-link-http';
import {
  ApolloLink
} from 'apollo-link';
import ReduxPromise from 'redux-promise';
import GitHubReducer from './github';
import gitLogin from '../Graphql/githubLogin'
import {
  GITHUB_GRAPHQL
} from '../config.json';
import {
  loginActionSuccessCreator
} from '../Actions/GitActions';
import {
  gitHubFollers,
  gitHubCommits
} from '../Graphql/github'

/* Apollo Redux */

/* Create HTTPLINK  */
let TOKEN = null;

const httpLink = new HttpLink({
  uri: GITHUB_GRAPHQL
});
const middlewareLink = new ApolloLink(function(operation, forward) {
  operation.setContext({
    headers: {
      authorization: `Bearer ${TOKEN}`
    }
  });
  return forward(operation)
});
const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache()
});


/* Combine all the reducers to App reducer */
const AppReducer = combineReducers({
  gitHub: GitHubReducer
});

const rootReducer = function(store, action) {
  return AppReducer(store, action);
}

/* Create Dummy inital store  */
let initialStore = {
  gitHub: {
    commits: []
  }
};

let store = createStore(rootReducer, initialStore, compose(applyMiddleware(ReduxPromise)));

gitLogin().then(function(token) {
  TOKEN = token;
  store.dispatch(loginActionSuccessCreator(token));
  // gitHubCommits('sajus');
});

store.subscribe(() => {
  console.log("getstate-->>>",store.getState());
})


export {
  AppReducer,
  store,
  client
};
