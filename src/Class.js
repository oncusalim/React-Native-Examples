import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

class myClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0, deli: 0 }
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text>{this.state.counter}</Text>
                    <Text>{this.state.deli}</Text>
                    <Button
                        onPress={() => this.setState({ counter: this.state.counter + 1 })}
                        title="UP"
                    />
                </View>
            </SafeAreaView>

        )
    }
}

export default myClass