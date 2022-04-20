import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const Header = (props) => {
  return (
    <View style={{ ...styles.screen, ...props.style }}>
      <Text style={{ ...styles.text, ...props.textStyle }}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get("window").height > 400 ? 40 : 60,
    height: Dimensions.get("window").height / 10,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#20B2AA",
    borderRadius: 20,
    shadowOpacity: 0.8,
    shadowOffset: { height: 5, width: 5 },
    backgroundColor: "#20B2AA",
    opacity: 1,
  },
  text: {
    fontSize: 18,
    color: "black",
  },
});

export default Header;
