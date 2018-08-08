/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { store, client } from './src/Reducers';
import { RootComponent } from './src/MobView'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client} store={store}>
        <RootComponent store={store}/>
      </ApolloProvider>
    );
  }
}
