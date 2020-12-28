import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo, deleteTodo, clear }) => (
    <View style={{ padding: 20 }}>
        <TouchableOpacity style={{marginBottom: 20}} onPress={clear}>
            <Text style={{fontSize: 12}}>ELIMINAR TODAS LAS ANOTACIONES</Text>
        </TouchableOpacity>
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    onPress={() => toggleTodo(item.id)}
                    onLongPress={() => deleteTodo(index)}
                >
                    <Text style={{
                        fontSize: 20,
                        textDecorationLine: item.completed ? 'line-through' : 'none'
                    }}>{item.text}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
)
export default TodoList