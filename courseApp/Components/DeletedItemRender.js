import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeletedItemRender = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
    alignItems: "center",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});
export default DeletedItemRender;
