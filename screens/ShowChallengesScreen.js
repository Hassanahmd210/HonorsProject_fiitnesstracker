import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useChallenges } from '../context/ChallengeContext'; // Import custom hook

const ShowChallengesScreen = ({ navigation }) => {
  const { challenges } = useChallenges(); // Get challenges from context

  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiX8LJu0aNPR6l6hUm66GCKUowl9sN9N2cOA&s';  // URL for the default image

  const handleSelectChallenge = (challenge) => {
    // Pass selected challenge's exercises and default image to WorkoutScreen
    navigation.navigate('Workout', {
      exercises: challenge.exercises,
      image: challenge.image || defaultImage,  // If no image, use default
    });
  };

  const renderChallengeItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.challengeCard}
      onPress={() => handleSelectChallenge(item)}  // Navigate to WorkoutScreen with selected challenge
    >
      <Text style={styles.challengeName}>{item.name}</Text>
      <Text style={styles.challengeExercises}>
        Exercises: {item.exercises.map((e) => e.name).join(', ')}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Created Challenges</Text>

      {challenges.length === 0 ? (
        <Text style={styles.noChallenges}>No challenges created yet.</Text>
      ) : (
        <FlatList
          data={challenges}
          keyExtractor={(item) => item.id}
          renderItem={renderChallengeItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  challengeCard: {
    backgroundColor: '#FF6F61',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  challengeName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  challengeExercises: {
    color: '#fff',
    marginTop: 5,
  },
  noChallenges: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
  },
});

export default ShowChallengesScreen;
