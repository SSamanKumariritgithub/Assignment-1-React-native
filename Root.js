/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button1 from './components/Button1';

export default class Root extends Component {
  render() {
    return (
      <View>
        <Button1 buttonPressed={this.onPressLogin} buttonText="1" />
      </View>
    );
  }
}
