import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ImageBackground,
  Button,
} from "react-native";
//Make DELETED ITEMS HEADER!!
const DeletedItem = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground
        style={styles.image}
        source={require("../assets/charCoal.jpg")}
      >
        <View>
          <Text style={styles.textHeader}>Deleted Items</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Exit" onPress={props.onExit} color="#00000000" />
        </View>
      </ImageBackground>
    </Modal>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
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
