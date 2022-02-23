import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  ImageBackground,
  Text,
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import DeletedItem from "./Components/DeletedItem";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [deletedGoals, setDeletedGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const [isDeletedMode, setDeletedMode] = useState(false);

  const addedGoals = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setAddMode(false);
  };

  const removeGoal = (props) => {
    setDeletedGoals((currentGoals) => [
      ...currentGoals,
      { id: props.id, value: props.title },
    ]);
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== props.id);
    });
  };

  const cancelGoalHandler = () => {
    setAddMode(false);
  };
  //to exit the deleted items modal.
  const exitDeletedItems = () => {
    setDeletedMode(false);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("./assets/charCoal.jpg")}
    >
      <View style={styles.screen}>
        <View style={styles.buttonContainer}>
          <Button
            title="Add new goal"
            onPress={() => setAddMode(true)}
            color="#00000000"
          />
          <Button
            title="Show deleted"
            onPress={() => setDeletedMode(true)}
            color="#00000000"
          />
        </View>
        <DeletedItem visible={isDeletedMode} onExit={exitDeletedItems} />
        <GoalInput
          visible={isAddMode}
          onAddGoal={addedGoals}
          onCancel={cancelGoalHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              title={itemData.item.value}
              id={itemData.item.id}
              onDelete={removeGoal}
            />
          )}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  screen: {
    padding: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default App;
