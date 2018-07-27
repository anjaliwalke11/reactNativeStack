/*
  Web version React
*/
import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { store, client } from './Reducers';


import AppConnect from './WebView/App';


render(
  <ApolloProvider client={client} store={store}>
    <AppConnect store={store}/>
  </ApolloProvider>,
  document.getElementById('root')
)
