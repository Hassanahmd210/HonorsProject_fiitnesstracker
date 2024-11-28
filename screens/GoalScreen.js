import React, { useState, useContext } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FitnessItems } from '../context/Context'; // Import your context

const GoalScreen = () => {
  const [goal, setGoal] = useState('');
  const navigation = useNavigation();
  const { setCaloriesGoal } = useContext(FitnessItems); // Use context to set the goal

  const handleSetGoal = () => {
    if (goal > 0) {
      setCaloriesGoal(goal); // Set the goal in context
      navigation.replace('HomeTabs'); // Navigate to Home Screen after setting the goal
    } else {
      alert('Please enter a valid goal!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Calorie Goal</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter calories to burn"
        value={goal}
        onChangeText={setGoal}
      />
      <TouchableOpacity style={styles.button} onPress={handleSetGoal}>
        <Text style={styles.buttonText}>Set Goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default GoalScreen;
