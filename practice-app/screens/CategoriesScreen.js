import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      >
        <View>
          <Text style={styles.itemText}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Fannyn Reseptit",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#ffe6e6",
    justifyContent: "center",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
  },
  itemText: {
    fontFamily: "open-sans-bold",
  },
});

export default CategoriesScreen;