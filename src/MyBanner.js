import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// props object && turnary --- && operator
const MyBanner = (props)=> {
 
    return(
       <View style={{flexDirection:'row', alignContent:'center',
        alignItems:'center', backgroundColor:props.color, margin:10, borderRadius: 10, }}>
             <View style={styles.container}>
                <Text style={styles.text}>{props.title}</Text>
                <Text>{props.desc}</Text>
            </View>
               
            <View>
                {!props.isActive && <Text>Aktif Değil</Text>}
            </View>
        </View>
    );
};

export default MyBanner;

const styles = StyleSheet.create({
    container:{
        color: 'red',
        flex:1,
        margin: 10,
        padding: 10,
        borderRadius :10,

    },
    text:{
        fontWeight: 'bold',
        fontSize: 20,
    }
})