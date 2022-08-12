import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
/*import Button from './components/Button';*/

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4.57,
      name: 'Timing App',
    };
  }

  componentDidMount() {
    /*console.log('Value of the count : ', this.state.count);*/
    setInterval(() => {
      this.setState({count: this.state.count - 0.01});
    }, 1000);
  }

  /*componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      this.setState({count: 10});
    }
  }

  onPressLogin = () => {
    console.log('OnPress Login');
  };

  onPressRegister = () => {
    console.log('OnPress Register');
  };*/

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyles}>{this.state.count}</Text>
        {/* <Button buttonPressed={this.onPressLogin} buttonText="Login" /> */}
        {/* <View style={styles.flexOne} />
        <View style={styles.flexTwo} />
        <View style={styles.flexThree} />*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyles: {
    fontSize: 52,
    color: 'red',
  },
});
