import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Button, Alert } from 'react-native';

const App = () => {

    const [number, setNumber] = useState(0);
    const updateCounter = () => setNumber(number + 1)
    useEffect(() => {

        if (number > 10) {
            Alert.alert("Company", "Over Number 10",
                [
                    {
                        text: "Set 0",
                        onPress: () => setNumber(0),
                        style: "cancel"
                    },
                    { text: "Set 5", onPress: () => setNumber(5) }
                ],
                { cancelable: false })
        }

    }, [number])

    useEffect(() => { console.log("ilk yükleme") }, [])

    return (
        <SafeAreaView>
            <View>
                <Text style={{ fontSize: 200, alignSelf: 'center', }}>{number}</Text>
                <Button
                    onPress={updateCounter}
                    title="UP"
                    color="#841584"


                />
            </View>
        </SafeAreaView>
    )
}


export default App