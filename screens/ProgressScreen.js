import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FitnessItems } from '../context/Context';
import { PieChart } from 'react-native-chart-kit'; // Import the PieChart component
import { Dimensions } from 'react-native';

// Get the screen width to scale the chart
const screenWidth = Dimensions.get('window').width;

const ProgressScreen = () => {
  const { caloriesGoal, calories } = useContext(FitnessItems); // Get context values

  // Calculate the percentage of progress
  const progress = caloriesGoal > 0 ? parseFloat(((calories / caloriesGoal) * 100).toFixed(2)) : 0;



  // Data for the pie chart
  const data = [
    {
      name: 'Progress',
      population: progress,
      color: '#FF6F61',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Left',
      population: 100 - progress,
      color: '#D3D3D3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <View style={styles.chartContainer}>
        <PieChart
          data={data}
          width={screenWidth - 40} // Make the chart fit nicely on the screen
          height={220}
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            color: (opacity = 1) => `rgba(255, 111, 97, ${opacity})`, // Color of the pie chart
            labelColor: (opacity = 1) => `rgba(127, 127, 127, ${opacity})`,
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#fff',
            },
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      <Text style={styles.progressText}>
        {progress.toFixed(2)}% of your goal achieved
      </Text>

      <Text style={styles.goalText}>Goal: {caloriesGoal} Kcal</Text>
      <Text style={styles.caloriesText}>Calories Burned: {calories} Kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  chartContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6F61',
  },
  goalText: {
    fontSize: 16,
    color: '#555',
  },
  caloriesText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
});

export default ProgressScreen;
