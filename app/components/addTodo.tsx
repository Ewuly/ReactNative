import React , { useState }from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";


// Define the props for the TodoItem component
interface TodoItemProps {
    submitHandler: (text: string) => void;  // Add pressHandler to the props
}

export default function AddTodo({ submitHandler }: TodoItemProps) {

    const [text, setText] = useState('')

    const changeHandler = (val: string) => {
        setText(val)
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button
            onPress={() => submitHandler(text)}
            title='add todo'
            color='coral'
            />
        </View>

    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
})