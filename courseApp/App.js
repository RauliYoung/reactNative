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

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setAddMode] = useState(false);

  const addedGoals = (goalTitle) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setAddMode(false);
  };

  const removeGoal = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setAddMode(false);
  };

  return (
    <ImageBackground
      style={styles.image}
      source={require("./assets/charCoal.jpg")}
    >
      <View style={styles.screen}>
        <Button
          title="Add new goal"
          onPress={() => setAddMode(true)}
          color="#00000000"
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
  },
  screen: {
    padding: 50,
  },
});

export default App;
