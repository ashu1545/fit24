import React, { useState, useEffect,useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from 'src/context_api/AppContext';
import * as Permissions from 'expo-permissions';
import { Pedometer } from 'expo-sensors';

const WalkingAndRunningActivity = () => {
  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);
  const [runningSteps, setRunningSteps] = useState(0);
  const [walkingSteps, setWalkingSteps] = useState(0);

  const {setWalkingData , setRunningData} = useContext(AppContext)

  useEffect(() => {
    const getPermissions = async () => {
      const { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        alert('Permission to access location is required!');
      }
    };

    getPermissions();

    Pedometer.isAvailableAsync().then(
      result => {
        setIsPedometerAvailable(String(result));
      },
      error => {
        setIsPedometerAvailable("Could not get isPedometerAvailable: " + error);
      }
    );

    const subscription = Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps);
      const stepsPerMinute = result.steps / ((new Date() - start) / 60000);
      const threshold = 120; // Define your threshold for running

      if (stepsPerMinute > threshold) {
        setRunningSteps(prevRunningSteps => prevRunningSteps + result.steps);
      } else {
        setWalkingSteps(prevWalkingSteps => prevWalkingSteps + result.steps);
      }
    });

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);

    Pedometer.getStepCountAsync(start, end).then(
      result => {
        setPastStepCount(result.steps);
      },
      error => {
        setPastStepCount("Could not get stepCount: " + error);
      }
    );

    return () => {
      subscription && subscription.remove();
    };
  }, []);

  useEffect(() =>{
  if(runningSteps){
    setRunningData(runningSteps);
  }
  },[runningSteps])

  useEffect(() =>{
    if(walkingSteps){
      setWalkingData(walkingSteps);
    }
    },[walkingSteps])

  return (
    <View>
      {/* <Text>Is Pedometer available: {isPedometerAvailable}</Text>
      <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
      <Text>Current Step Count: {currentStepCount}</Text>
      <Text>Running Steps: {runningSteps}</Text>
      <Text>Walking Steps: {walkingSteps}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalkingAndRunningActivity;
