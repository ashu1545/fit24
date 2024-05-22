import React, { useRef, useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
// import { AgendaList, ExpandableCalendar } from "react-native-calendars"
import testIDs from "src/testIDs"
import { agendaItems, getMarkedDates } from "src/mocks/agendaItems"
import { themeColor, lightThemeColor, getTheme } from "src/mocks/theme"
import leftArrowIcon from "assets/previous.png"
import rightArrowIcon from "assets/next.png"
import AgendaItem from 'src/mocks/AgendaItem';
import Layout from '../Layouts/Layout/Layout';
import WeekCalendar from 'src/component/WeekCalendar/WeekCalendar';
import CalendarProvider from 'src/component/CalendarProvider/CalendarProvider';
import LayoutWithoutScrollView from '../Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView';
import LeftArrowIcon from "assets/leftArrowIcon.svg"
import RightArrowIcon from "assets/rightArrowIcon.svg"
import { TouchableOpacity } from 'react-native-gesture-handler';
import BigButtonAdd from "assets/bigButtonAdd.svg"
import { LinearGradient } from 'expo-linear-gradient';
import ScheduleCard from '../ScheduleCard/ScheduleCard';
import { Modal, Button } from 'react-native-paper';
import MoreIcon from "assets/moreIcon.svg"
import TimerIcon from "assets/timerIcon"
import { useNavigation } from '@react-navigation/native';

const dayAndWeekDay = [
  { id: 1, weekDay: 'Tue', day: 11 },
  { id: 2, weekDay: 'Wed', day: 12 },
  { id: 3, weekDay: 'Thur', day: 13 },
  { id: 4, weekDay: 'Fri', day: 14, active: true },
  { id: 5, weekDay: 'Sat', day: 15 },
  { id: 6, weekDay: 'Sun', day: 16 },
]

const time = [
  { id: 1, time: '06:00 AM' },
  { id: 2, time: '07:00 AM' },
  { id: 3, time: '08:00 AM' },
  { id: 4, time: '09:00 AM' },
  { id: 5, time: '10:00 AM' },
  { id: 6, time: '11:00 AM' },
  { id: 7, time: '12:00 AM' },
  { id: 8, time: '01:00 PM' },
  { id: 9, time: '02:00 PM' },
  { id: 10, time: '03:00 PM' },
  { id: 11, time: '04:00 PM' },
  { id: 12, time: '05:00 PM' },
  { id: 13, time: '06:00 PM' },
  { id: 14, time: '07:00 PM' },
  { id: 15, time: '08:00 PM' },
];

const renderDayAndWeekDayItem = ({ item }) => (
  <LinearGradient
    colors={item.active ? ['#9DCEFF', '#92A3FD'] : ['#F7F8F8', '#F7F8F8']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flexDirection: 'column', padding: 25, borderRadius: 10, marginRight: 10, marginBottom: 20 }}>
    <Text style={{ color: item.active ? '#fff' : '#7B6F72', lineHeight: 21, fontSize: 12, marginBottom: 10 }}>{item.weekDay}</Text>
    <Text style={{ color: item.active ? '#fff' : '#7B6F72', lineHeight: 18, fontSize: 14 }}>{item.day}</Text>
  </LinearGradient>
)

const renderTime = ({ item }) => (
  <View>
    <Text style={{ color: '#EB8F63', lineHeight: 18, fontSize: 12, paddingVertical: 20, paddingHorizontal: 20 }}>
      {item.time}
    </Text>
  </View>
);



const WorkoutSchedule = () => {
  const weekView = true
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: themeColor
  });

  // const renderItem = useCallback(({ item }) => {
  //   return <AgendaItem item={item} />;
  // }, []);

  const ITEMS = agendaItems
  const [visible, setVisible] = useState(false)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const navigation = useNavigation()

  return (
    <>
      <View style={{ backgroundColor: '#1B1B1B' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 120, marginBottom: 20, marginTop: 20, }}>
          <TouchableOpacity>
            <LeftArrowIcon />
          </TouchableOpacity>
          <Text style={{ color: '#EB8F63', lineHeight: 21, fontSize: 14 }}>May 2021</Text>
          <TouchableOpacity>
            <RightArrowIcon />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dayAndWeekDay}
          horizontal={true}
          renderItem={renderDayAndWeekDayItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false} Ï
        />
      </View>
      <LayoutWithoutScrollView paddingHorizontal={0}>
        <View style={{ position: 'relative' }}>
          <FlatList
            data={time}
            renderItem={renderTime}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ width: '100%', height: 0.6, backgroundColor: '#DDDADA' }} />
            )}
          />
          {/* <TouchableOpacity> */}
          <BigButtonAdd style={{ position: 'absolute', left: 320, top: 550 }} onPress={() => navigation.navigate('Add Schedule')} />

          <ScheduleCard showModal={showModal} left={'#EEA4CE'} right={'#C58BF2'} style={{ position: 'absolute', top: 85, left: 320, borderRadius: 20 }}>Ab Workout, 7:30am</ScheduleCard>

          <ScheduleCard showModal={showModal} left={'#EEA4CE'} right={'#C58BF2'} style={{ position: 'absolute', top: 170, left: 120, borderRadius: 20 }}>Upperbody Workout, 9am</ScheduleCard>

          <ScheduleCard showModal={showModal} left={'#F7F8F8'} right={'#F7F8F8'} style={{ position: 'absolute', top: 285, left: 120, borderRadius: 20 }} textColor="#EB8F63">Lowerbody Workout, 3pm</ScheduleCard>

          <Modal visible={visible} onDismiss={hideModal} style={{ position: 'absolute', backgroundColor: '#1B1B1B', width: 315, height: 243, left: 55, top: 70, borderRadius: 20, paddingHorizontal: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Text style={{ lineHeight: 24, fontSize: 16, fontWeight: 'semibold', color: '#FFFFFF', marginRight: 20 }}>Workout Schedule</Text>
                <TouchableOpacity>
                  <MoreIcon />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'column', marginTop: 20, marginBottom: 30 }}>
                <Text style={{ lineHeight: 24, fontSize: 16, fontWeight: '600', color: '#fff' }}>Lowerbody Workout</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <TimerIcon style={{ marginRight: 10 }} />
                  <Text style={{ color: '#EB8F63' }}>Today | 03:00PM</Text>
                </View>
              </View>


              <Button
                mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
                contentStyle={{ paddingVertical: 15, fontSize: 16, lineHeight: 24, fontWeight: 'bold' }}
                style={{ borderRadius: 50 }}
              >
                Mark as Done
              </Button>


            </View>

          </Modal>
          {/* </TouchableOpacity> */}

        </View>
      </LayoutWithoutScrollView>

      {/* <PaperProvider> */}
      {/* <Portal> */}

      {/* </Portal> */}
      {/* </PaperProvider> */}

    </>
  )
}

export default WorkoutSchedule

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize'
  }
});