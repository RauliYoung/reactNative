import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
  console.log("this was logged in goalitem, as deleted", props);
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props)}>
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
    backgroundColor: "black",
    borderColor: "white",
    borderWidth: 1,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
});
export default GoalItem;
