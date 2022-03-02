import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  FlatList,
  ImageBackground,
} from "react-native";
import GoalItem from "./Components/GoalItem";
import GoalInput from "./Components/GoalInput";
import DeletedItem from "./Components/DeletedItem";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [deletedGoals, setDeletedGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const [isDeletedMode, setDeletedMode] = useState(false);
  console.log(goals);

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
            color="#FFFAFA"
          />
          <Button
            title="Show deleted"
            onPress={() => setDeletedMode(true)}
            color="#FFFAFA"
          />
        </View>
        <DeletedItem
          visible={isDeletedMode}
          onExit={exitDeletedItems}
          deleted={deletedGoals}
        />
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
    resizeMode: "cover",
  },
  screen: {
    padding: 50,
    width: null,
    height: null,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default App;
