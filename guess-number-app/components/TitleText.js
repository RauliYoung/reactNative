import React from "react";
import { Text, StyleSheet } from "react-native";

//{{...styles.title, ...props.styles(imports styles from wherever)}}

const TitleText = (props) => (
  <Text style={{ ...styles.title, ...props.styles }}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
  },
});

export default TitleText;
