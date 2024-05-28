import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Layout from '../../component/Layouts/Layout/Layout';
import LongCard from 'src/component/Cards/LongCard/LongCard';
import Meal from 'assets/meal.svg';
import Jug from 'assets/jug.svg';
import Reminders from 'assets/Reminders.svg';
import ReminderSlash from 'assets/Reminderslash.svg';
import ProgressTrackerGraph from 'assets/progressTrackerGraph.svg';
import CardCarusel from '../../component/Cards/cardslider/cardslider';
// Importing new icons
import CheckIcon from 'assets/arrowDown.svg';

import WeeklyIcon from 'assets/arrowDown.svg';
import HeaderNavigation from 'src/component/HeaderNavigation';

const First_MealPlanner = () => {
  return (
    <Layout backgroundColor='#1B1B1B'>
     <View style={{
                        marginTop:10
                    }}>
                      
                     
                      <HeaderNavigation headerText={'Meal Schedule'} status={'john'}/>

                    </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            gap: 80,
          }}
        >
          <Text style={styles.text}>Meal Nutrions</Text>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Weekly</Text>
            <WeeklyIcon width={20} height={20} />

          </TouchableOpacity>
        </View>
      </View>

      <ProgressTrackerGraph />

      <View style={styles.container}>
        <View style={styles.gridColumn}>
          <Text style={styles.text}>Daily Meal Schedule</Text>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >
            
            <Text style={styles.buttonText}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          marginTop: 40,
          borderRadius: 10,
          paddingHorizontal: 25,
          paddingTop: 25,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
            gap: 80,
          }}
        >
          <Text style={styles.text}>Today Meal </Text>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.button}
          >
            <Text style={styles.buttonText}>BreakFast</Text>
            <CheckIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </View>

      <LongCard
        avatar={<Meal />}
        title={'Salmon Nigiri'}
        subtitle={'Today | 7am'}
        backgroundColor={'#fff'}
        rightIcon={<Reminders />}
      />

      <LongCard
        avatar={<Jug />}
        title={'Lowfat Milk'}
        subtitle={'Today | 8am'}
        backgroundColor={'#fff'}
        rightIcon={<ReminderSlash />}
      />

      <CardCarusel />
    </Layout>
  );
};

export default First_MealPlanner;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: '#855138',
    borderRadius: 10,
    paddingHorizontal: 25,
    paddingTop: 25,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  gridColumn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 40,
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    color: '#fff',
  },
  button: {
    height: 35,
    width: '40%',
    backgroundColor: '#EB8563',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5, // Add space between icon and text
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
