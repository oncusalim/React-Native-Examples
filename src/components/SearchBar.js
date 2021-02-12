import React from 'react';
import {View, TextInput,Text, StyleSheet, Dimensions} from 'react-native';

const SearchBar = (props) => {
    return(
        <View style={styles.searchbar}>
            <TextInput 
                placeholder = "Aranan Ürünü Giriniz.."
                onChangeText ={(value) => props.entry(value)}
            />
        </View>
    )
}

export {SearchBar};

const styles = StyleSheet.create({
     searchbar : {
        padding:10,
        margin:5,
        backgroundColor: "#f5f5f5",
        borderRadius:10,
     }
})