import React from 'react';
import { View, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const Component_A = (props) => {

  const myCounter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, backgroundColor: "powderblue" }}>

      <Button title="Artır.." onPress={() => dispatch({ type: "ARTIR" })} />
      <Button title="Azalt.." onPress={() => dispatch({ type: "AZALT" })} />
      <Text style={{ fontSize: 30, alignSelf: 'center' }} >Counter: {myCounter}</Text>
      <Button title="Sıfırla.." onPress={() => dispatch({ type: "SIFIRLA", value: 0 })} />

    </View>
  )
}

export default Component_A;