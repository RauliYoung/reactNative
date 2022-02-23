import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [addGoal, setAddGoal] = useState("");

  const goalHandler = (enteredText) => {
    // console.log(enteredText);
    setAddGoal(enteredText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Add your goal"
        onChangeText={goalHandler}
        value={addGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, addGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "80%",
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
