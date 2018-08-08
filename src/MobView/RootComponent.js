import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { connect } from 'react-redux';
import {gitHubCommits} from '../Graphql/github'

type Props = {};

class RootComponent extends Component<Props> {
  render() {
    const {OpenSecondActivityFunction, commits} = this.props;
    return (
        <View style={styles.MainContainer}>
            <Text style = {styles.welcome}> Enter Git username to find out the number of commits </Text>
            <TextInput
              onChangeText={this.handleText}
              placeholder= "Enter Git Username"
              autoCapitalize = "none"
              userName = {this.props.username}
              style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginLeft: 90}}
              editable = {true} maxLength = {40}
            />
            <Button
              style = {styles.button}
              onPress = {OpenSecondActivityFunction}
              title = 'Click to get commits'
            />
            {commits.length>0 &&
              commits.map((commit, index) => (
                  <TouchableOpacity
                     key = {commit.toString()}
                     style = {styles.container}
                     >
                     <Text style = {styles.text}>
                        {commit}
                     </Text>
                  </TouchableOpacity>
               ))
            }
        </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    commits: state.gitHub.commits
  }
}

function mapDispatchToProps(dispatch){
  return {
    OpenSecondActivityFunction : function() {
      console.log("clicking button");
      dispatch(gitHubCommits("sajus"));
    }
  }
}

const ListConnect = connect(mapStateToProps, mapDispatchToProps)(RootComponent)

export default ListConnect

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginTop: 3,
    backgroundColor: '#B0E0E6',
    color: 'gray',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  text: {
    color: '#4f603c'
  },
  MainContainer: {
    justifyContent: 'center',
    flex:1,
    marginTop: 70,
  },
});
