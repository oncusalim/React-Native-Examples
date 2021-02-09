import React, { Component } from "react";
import { SafeAreaView, Button, Text, View } from "react-native";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 };
  }

  render() {
    return (
     
        <View>
          <Button
            onPress={() => this.setState({ count: this.state.count + 1 })}
            title={"Artır"}
          />

          <Text style={{ fontSize: 120, alignSelf: 'center', }}>

            {this.state.count}

          </Text>
          <Button
            onPress={() => this.setState({ count: this.state.count - 1 })}
            title={"Azalt"}
          />
        </View>
    
    );
  }
}

export default Counter;
