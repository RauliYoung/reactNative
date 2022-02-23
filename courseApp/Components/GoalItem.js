import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#00000000",
    borderColor: "white",
    borderWidth: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});
export default GoalItem;
