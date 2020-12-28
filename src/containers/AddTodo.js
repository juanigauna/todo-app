import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { addTodo, onChageInput } from '../actions'
class AddTodo extends Component {
    state = {
        text: ''
    }
    addTodo = (text) => {
        // redux store
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <TextInput
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="Ej. Comprar pan."
                    style={{
                        borderWidth: 1, borderColor: '#f2f2e1',
                        backgroundColor: '#eaeaea', height: 50, flex: 1,
                        paddingHorizontal: 15, paddingVertical: 5
                    }}
                />
                {
                this.state.text.trim().length >= 5 ?
                    <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
                        <View style={{
                            height: 50, backgroundColor: '#eaeaea',
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                        <Icon name="md-add" size={30}
                            style={{
                                color: '#de9595', padding: 10
                            }} />
                        </View>
                    </TouchableOpacity>
                :
                    <View style={{
                        height: 50, backgroundColor: '#eaeaea',
                        alignItems: 'center', justifyContent: 'center',
                    }}>
                        <Text style={{color: '#de9595', fontSize: 15, fontWeight: 'bold',
                                    width: 50, textAlign: 'center'}}>
                            { 5 - this.state.text.trim().length }
                        </Text>
                    </View>
                }
            </View>
        );
    }
}
export default connect()(AddTodo);