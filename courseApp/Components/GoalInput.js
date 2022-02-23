import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ImageBackground,
} from "react-native";

const GoalInput = (props) => {
  const [addGoal, setAddGoal] = useState("");

  const goalHandler = (enteredText) => {
    // console.log(enteredText);
    setAddGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(addGoal);
    setAddGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground
        style={styles.image}
        source={require("../assets/charCoal.jpg")}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Add your goal"
            onChangeText={goalHandler}
            value={addGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Cancel"
                color="#00000000"
                onPress={props.onCancel}
              />
            </View>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoalHandler} color="#00000000" />
            </View>
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
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
