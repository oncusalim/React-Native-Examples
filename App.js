import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,

} from 'react-native';
import MyComponent from './src/components/MyComponent';

function myFunction() {
  const myArray = ['İstanbul', 'İzmir', 'Bursa', 'Ankara'];

  return myArray.map((city) => {
    return <Text>{city}</Text>;

  })
}

const my_name = "Salim";
const isAdmin = true;
const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>MERHABA!!</Text>
      </View>
      <MyComponent />
      <View style={styles.container}>
        {isAdmin ? <Text style={{ fontSize: 30 }}>Admin Kullanıcısı</Text> : null}
        {isAdmin && <Text>AdminKullanıcısı</Text>}
        {true && <Text></Text>}
        {myFunction()}
      </View>
    </SafeAreaView>
  );
};


export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  text: {
    color: "red",
    fontSize: 30,
    textAlign: 'center',
  },
  name: {
    margin: 10,
    fontSize: 20,
  }
});
