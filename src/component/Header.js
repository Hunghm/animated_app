import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ children, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.childrenContainer}>{children}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: "#3e3e3e"
    },
    textTitle: {
        color: "#fff",
        alignSelf: "center",
        padding: 10,
        fontWeight: "bold",
        fontSize: 17,
    },
    childrenContainer: {
        position: "absolute",
        top: 20,
        right: 10
    },
})

export default Header