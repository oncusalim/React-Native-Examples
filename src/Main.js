import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

import Counter from './Counter';

const App = () => {

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={{ flex:1, justifyContent:'center'}}>
                <Counter />
            </View>
        </SafeAreaView>
    )
}


export default App