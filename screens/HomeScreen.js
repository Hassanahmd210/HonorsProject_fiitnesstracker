import React, { useContext } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; 
import { FitnessItems } from '../context/Context.js';
import { useFonts } from 'expo-font';
import FitnessCards from '../components/FitnessCards';

const HomeScreen = () => {
  const { caloriesGoal, calories, minutes, workout } = useContext(FitnessItems);
  const navigation = useNavigation(); // Use the navigation hook

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'), // Ensure you have this font in your assets folder
  });

  if (!fontsLoaded) {
    return null; // Avoid rendering until fonts are loaded
  }

  if (!caloriesGoal) {
    // If no goal is set, navigate to GoalScreen
    navigation.navigate('Goal');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-Bold' }]}>
          Your Fitness Journey
        </Text>
      </View>

      {/* Metrics Section */}
      <View style={styles.metricsContainer}>
        {/* Calories */}
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{calories.toFixed(2)}</Text>
          <FontAwesome5 name="fire" size={24} color="#FF6F61" />
          <Text style={styles.metricLabel}>KCAL</Text>
        </View>

        {/* Workouts */}
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{workout}</Text>
          <MaterialIcons name="fitness-center" size={24} color="#FF6F61" />
          <Text style={styles.metricLabel}>WORKOUTS</Text>
        </View>

        {/* Minutes */}
        <View style={styles.metricCard}>
          <Text style={styles.metricValue}>{minutes}</Text>
          <Ionicons name="time-outline" size={24} color="#FF6F61" />
          <Text style={styles.metricLabel}>MINUTES</Text>
        </View>
      </View>

      {/* Progress Button */}
    


      {/* Fitness Cards */}
      <FitnessCards />

      {/* Floating Plus Button */}
      
      {/* Show Challenges Button */}
     
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    backgroundColor: "#FF6F61",
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 26,
    textAlign: "center",
    textTransform: "uppercase",
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: -45,
    marginBottom: -65,
    paddingHorizontal: 10,
  },
  metricCard: {
    backgroundColor: "#ffffff",
    width: "30%",
    height: 120,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    borderWidth: 1,
    borderColor: "#FF6F61",
    paddingVertical: 10,
  },
  metricValue: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#FF6F61",
  },
  metricLabel: {
    fontSize: 14,
    color: "#555",
  },
  floatingButton: {
    position: "absolute",
    bottom: 105,
    right: 10,
    backgroundColor: "#FF6F61",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
  },
  showChallengesButton: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#FF6F61",
    borderRadius: 10,
    alignItems: "center",
  },
  showChallengesText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  progressButton: {
    backgroundColor: '#FF6F61',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 50,
  },
  progressButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
});
