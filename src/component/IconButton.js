import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const icon_color = "#586069";
const icon_size = 25;

const IconButton = ({ icon, onPress, data }) => {

  return (
    <TouchableWithoutFeedback
    >
      <Animated.View >
        <Icon
          name={icon}
          style={styles.icon}
          size={icon_size}
          color={icon_color}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );

}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  }
});

export default IconButton