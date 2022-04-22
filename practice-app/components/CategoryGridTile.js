import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CategoryGridTile = (props) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity style={styles.touchable} onPress={props.onSelect}>
        <View style={{ ...styles.container }}>
          <Text style={styles.itemText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  touchable: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#ffe6e6",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowColor: "black",
    elevation: 3,
    padding: 15,
  },
  itemText: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default CategoryGridTile;
