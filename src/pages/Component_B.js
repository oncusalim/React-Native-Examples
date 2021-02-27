import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Component_B = (props) => {
  const myCounter = useSelector(state => state.counter);
  return (
    <View style={{ flex: 1, backgroundColor: "gray" }}>
      <Text style={{ fontSize: 30, alignSelf: 'center' }} >Counter: {myCounter}</Text>
    </View>
  )
}

export default Component_B;