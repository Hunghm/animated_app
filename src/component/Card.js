import React from "react";
import { Animated, Dimensions, Easing, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import IconButton from "./IconButton";

const { height, width } = Dimensions.get("window")

const Card = ({ item }) => {
  console.log("rereder");
  let scaleValue = new Animated.Value(0);
  const cardScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.8, 2]
  });

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        // scaleValue.setValue(0);
        Animated.timing(scaleValue, {
          toValue: 1, // update the animated value to
          duration: 250, // how long the animation will take in milliseconds
          easing: Easing.linear, // easing function to use (https://facebook.github.io/react-native/docs/easing.html)
          useNativeDriver: true // delegate all the animation related work to the native layer
        }).start();

      }}
      onPressOut={() => {
        Animated.timing(scaleValue, {
          toValue: 0, // reset the animated value to 0
          duration: 100, // animate over 100ms
          easing: Easing.linear,
          useNativeDriver: true
        }).start();
      }}
    >
      <Animated.View style={{ ...styles.card, transform: [{ scale: cardScale }] }} >
        <Image source={item.full_pic} style={styles.thumbnail} resizeMode="contain" />
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.icons}>
          <IconButton
            icon="search"
            data={item}
          />
          <IconButton icon="bookmark" data={item} />
          <IconButton icon="share" data={item} />
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  card: {
    width: width / 2 - 20,
    height: width * 2 / 3,
    backgroundColor: "#fafbfc",
    // backgroundColor: 'gray',
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  name: {
    fontSize: 15,
    color: "#333",
    fontWeight: "bold"
  },
  thumbnail: {
    width: 100,
    height: 120,
    marginBottom: 15,
  },
  icons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default Card