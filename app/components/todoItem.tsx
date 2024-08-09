import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// Define the interface for a Todo item
interface Todo {
    text: string;
    key: string;
}
// Define the props for the TodoItem component
interface TodoItemProps {
    item: Todo;
    pressHandler: (key: string) => void;  // Add pressHandler to the props
}

export default function TodoItem({ item, pressHandler}: TodoItemProps) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.text}
            </Text>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
})