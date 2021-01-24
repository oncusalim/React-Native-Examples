import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
    return (
        <View style={styles.container}>
            <Text>SELAMLAR</Text>
            <Text>Nasılsınız</Text>

            <View>
                <Text>Hoş Geldiniz</Text>
            </View>
        </View>
    );
};

export default MyComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        borderColor: '#e0e0e0',
        margin: 5,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    }
});