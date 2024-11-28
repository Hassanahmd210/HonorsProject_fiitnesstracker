import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useChallenges } from '../context/ChallengeContext'; // Import context
import workoutData from '../data/fitness.js'; // Import workouts data

const CreateChallengeScreen = ({ navigation }) => {
  const { addChallenge } = useChallenges(); // Use the addChallenge function from context
  const [challengeName, setChallengeName] = useState('');
  const [selectedExercises, setSelectedExercises] = useState([]);

  // Toggle selection of exercises
  const handleSelectExercise = (exercise) => {
    setSelectedExercises((prevState) => {
      if (prevState.some(item => item.id === exercise.id)) {
        return prevState.filter(item => item.id !== exercise.id); // Deselect exercise
      } else {
        return [...prevState, exercise]; // Add exercise to selected list
      }
    });
  };

  // Create a new challenge
  const handleCreateChallenge = () => {
    if (!challengeName || selectedExercises.length === 0) {
      Alert.alert('Error', 'Please enter a challenge name and select at least one exercise');
      return;
    }

    const newChallenge = {
      id: new Date().getTime().toString(), // Generate a unique ID based on the timestamp
      name: challengeName,
      exercises: selectedExercises,
    };

    addChallenge(newChallenge); // Add the new challenge to context
    Alert.alert('Challenge Created!', `Challenge: ${challengeName}`);

    // Reset states after challenge is created
    setChallengeName(''); // Clear the challenge name input
    setSelectedExercises([]); // Clear the selected exercises

    // Trigger re-render (use navigation or state reset)
    navigation.goBack(); // Navigate back after creating challenge
  };

  // Render workout item with exercises
  const renderWorkoutItem = ({ item }) => (
    <View style={styles.workoutCategory}>
      <Text style={styles.workoutCategoryName}>{item.name}</Text>
      <FlatList
        data={item.exercises}
        keyExtractor={(exercise) => exercise.id}
        renderItem={({ item: exercise }) => (
          <TouchableOpacity
            style={[styles.exerciseItem, selectedExercises.some(e => e.id === exercise.id) && styles.selectedExercise]}
            onPress={() => handleSelectExercise(exercise)}
          >
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            {selectedExercises.some(e => e.id === exercise.id) && (
              <Ionicons name="checkmark-circle" size={24} color="#FF6F61" />
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.exerciseList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Challenge</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter challenge name"
        value={challengeName}
        onChangeText={setChallengeName}
      />
      <Text style={styles.label}>Select Exercises:</Text>
      <FlatList
        data={workoutData}
        keyExtractor={(item) => item.id}
        renderItem={renderWorkoutItem}
        contentContainerStyle={styles.workoutList}
      />
      <TouchableOpacity style={styles.createButton} onPress={handleCreateChallenge}>
        <Text style={styles.buttonText}>Create Challenge</Text>
        <Ionicons name="checkmark-circle-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  workoutList: {
    width: '100%',
  },
  workoutCategory: {
    marginBottom: 20,
  },
  workoutCategoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exerciseItem: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedExercise: {
    backgroundColor: '#FF6F61', // Highlight selected exercise
  },
  exerciseName: {
    fontSize: 18,
    color: '#333',
  },
  createButton: {
    marginTop: 30,
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    marginRight: 10,
  },
});

export default CreateChallengeScreen;
