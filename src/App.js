import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, 
  FlatList,Alert,TextInput} from 'react-native';

import productData from './product.json';
import {ProductCard, SearchBar} from './components';


const App=()=>{
  const renderListItem =({item})=> <ProductCard product={item} />
  const [sbar, setSbar] = useState("");
  const [data, setData] = useState([]);

useEffect(() => {
  //Alert.alert("EvShop","Hoşgeldiniz Keyifli Alışverişler")
  setData(productData);
}, []);

useEffect(()=>{
  const filteredValue = productData.filter(item => {
    const text = sbar.toUpperCase();
    const productTitle = item.title.toUpperCase();
    return productTitle.indexOf(text) > -1; 
  })
  setData(filteredValue);
  
},[sbar])
  return(
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
            <Text style={styles.banner}>EvShop🌍</Text>
            <View>
              <SearchBar 
                  entry={(value) => setSbar(value)}
              />
            </View>
            <FlatList 
                keyExtractor={(_, index)=>index.toString()}
                data={data}
                renderItem={renderListItem}
                numColumns={2}
            
            />
        
        </View>
      </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  banner:{
    fontSize: 50,
    fontWeight:'bold',
    alignSelf: 'center',
    color: 'purple',
  }, 

})

//stok drumunu belirt, serchbar komponenti yap...