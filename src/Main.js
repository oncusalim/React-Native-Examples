import React, { useState } from 'react';
import {
    SafeAreaView, View, Text, Button,
    TextInput, StyleSheet, Dimensions, Alert
} from 'react-native';


const App = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const Login = () => {
        email !== "" ? alert(email) : alert("Wrong E-mail")
        alert(pass)
    }

    const validate = (text) => {
        setEmail("");
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.log("Email is Not Correct");


            return false;
        }
        else {
            setEmail(text)
            console.log("Email is Correct");
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <View style={{ flex: 5, justifyContent: "center" }}>
                <Text style={{ fontSize: 150, alignSelf: "center", margin: 20 }}>🌍</Text>
                <TextInput
                    placeholder="E-mail Adresi Giriniz.."
                    style={styles.input}
                    onChangeText={(text) => validate(text)}
                    keyboardType="email-address"

                />
                <TextInput
                    placeholder="Şifreyi Giriniz.."
                    style={styles.input}
                    onChangeText={(text) => setPass(text)}
                    textContentType="password"
                    secureTextEntry={true}

                />
                <Button title="Giriş Yap"
                    onPress={Login}
                    disabled={email == "" || pass == "" ? true : false}
                />

            </View>
            <View style={{ flex: 1, }}></View>
        </SafeAreaView>




    )
}

export default App;

const styles = StyleSheet.create({
    input: {
        backgroundColor: "#e8f5e9",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: Dimensions.get("window").width * 0.8,
        alignSelf: "center",

    }
})