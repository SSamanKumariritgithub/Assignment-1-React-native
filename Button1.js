import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class Button1 extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.buttonPressed}
        style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 60,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 20,
    margin: 10,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
