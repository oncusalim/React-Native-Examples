import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';



const App = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>HELLO!!</Text>
            </View>
        </SafeAreaView >
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    text: {
        color: "white",
        fontSize: 30,
        textAlign: 'center',
        margin: 15
    }
});

export default App;