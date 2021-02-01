import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import MyBanner from './src/MyBanner';

//title custom attirubite

const food_data = [
    {
        id:0,
        title: "Çorbalar",
        color: "red",
        desc: "Lezzetli çorbalar",
        isActive: false
    },
    {
        id:1,
        title: "Yemekler",
        color: "blue",
        desc: "Lezzet",
        isActive: true
    },

    {
        id:2,
        title: "Salatalar",
        color: "yellow",
        desc: "Yeşillikler",
        isActive: true
    },

    {
        id:3,
        title: "Tatlılar",
        color: "white",
        desc: "Bal Kaymak",
        isActive: false
    },

    {
        id:4,
        title: "Aperatifler",
        color: "powderblue",
        desc: "soğuk",
        isActive: false
    },


] 

const App = () => {
    return(
        <SafeAreaView style={{flex: 1,}}>
            <View style={{backgroundColor: '#4dd0e1', flex:1}}>

              {food_data.map((food)=>{
                  return (
                <MyBanner 
                title= {food.title}
                desc = {food.desc}
                color= {food.color}
                 isActive = {food.isActive}
              /> 


               ) })}
              <TouchableOpacity
                style={styles.container}
                onPress={() => alert('hello')}
                onLongPress={() => alert("Long Hellllllllllo")}>
                    <Text style={[styles.text, {fontSize: 24}]}>Yenile</Text>
              </TouchableOpacity>
                
              

            </View>
          
        </SafeAreaView>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#18ffff",
        padding:10,
        margin:10,
        borderRadius:10,
    },
    text:{
        textAlign:'center',
        color: 'white',
        fontWeight:"bold",
    },

});
