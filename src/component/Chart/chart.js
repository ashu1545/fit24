import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function CardLineChart() {
  return (
    <View >
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
          datasets: [
            {
              data: [65, 78, 66, 44, 56, 67, 75, 80],
              color: (opacity = 1) => `rgba(76, 81, 191, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
            {
              data: [40, 68, 86, 74, 56, 60, 87, 90],
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={Dimensions.get('window').width - 30} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#1E2923',
          backgroundGradientFrom: '#08130D',
          backgroundGradientTo: '#1F4037',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    padding: 15,
  },
  header: {
    marginBottom: 20,
  },
  overviewText: {
    color: '#bdc3c7',
    fontSize: 12,
    fontWeight: 'bold',
  },
  titleText: {
    color: '#ecf0f1',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
