import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.text}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 5,
    marginTop: 20,
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 50,
    borderTopLeftRadius: 10,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 50,
    shadowRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 50,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    textShadowColor: "#E91E63",
    textShadowOffset: { width: 1, height: 4 },
    textShadowRadius: 5,
  },
});

export default Header;
