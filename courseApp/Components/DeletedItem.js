import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Button,
  FlatList,
} from "react-native";
import DeletedItemRender from "./DeletedItemRender";
import GoalItem from "./GoalItem";

const DeletedItem = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground
        style={styles.image}
        source={require("../assets/charCoal.jpg")}
      >
        <View style={styles.screen}>
          <View style={styles.deletedList}>
            <Text style={styles.textHeader}>Deleted Items</Text>
          </View>

          <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.deleted}
            renderItem={(itemData) => (
              <DeletedItemRender
                title={itemData.item.value}
                id={itemData.item.id}
              />
            )}
          />

          <View style={styles.buttonContainer}>
            <Button title="Exit" onPress={props.onExit} color="#FFFAFA" />
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  screen: {
    padding: 50,
    alignItems: "center",
    flex: 2,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
    marginTop: 20,
  },
  deletedList: {
    color: "white",
  },
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
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 50,
  },
});
export default DeletedItem;
