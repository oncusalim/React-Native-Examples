import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,

} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topInside}>
            <View style={styles.circle}>
              <Text style={{ color: 'black', alignItems: 'center' }}>Orange Circle</Text>
            </View>
            <View style={styles.label}>
              <Text>Yellow Box</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bottombig}>
            <Text style={{ color: 'white' }}>Black Box</Text>
          </View>
          <View style={styles.bottomsmall}>
            <Text style={styles.textStyle}>Brown Box</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
};


export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'powderblue',
    flex: 1,
  },
  top: {
    backgroundColor: 'red',
    flex: 1,

  },
  topInside: {
    flexDirection: 'row',
    backgroundColor: 'gray',
    margin: 20,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: 'pink',
    flex: 2,
    justifyContent: 'center',
    padding: 20
  },
  circle: {
    backgroundColor: 'orange',
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 100,
    height: 100



  },
  label: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    padding: 20,
    margin: 20
  },
  bottombig: {
    backgroundColor: 'black',
    borderRadius: 20,
    margin: 30,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomsmall: {
    backgroundColor: 'brown',
    borderRadius: 40,
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    transform: [{ rotate: '-90deg' }],
    color: 'white'
  }


})