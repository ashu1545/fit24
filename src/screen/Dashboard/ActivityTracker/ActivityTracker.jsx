import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper';

import React,{useContext, useState} from 'react'
import Layout from 'src/component/Layouts/Layout/Layout';
import { AppContext } from 'src/context_api/AppContext';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPlus from "assets/buttonPlus.svg"
import GlassCup from "assets/glassCup.svg"
import Boots from "assets/boots.svg"
import LatestActivityPicOne from "assets/latestActivityPicOne.svg"
import LatestActivityPicTwo from "assets/latestActivityPicTwo.svg"
import ThreeDots from "assets/threeDots.svg"
import MiniCard from 'src/component/Cards/MiniCard/MiniCard';
import DisplayHeader from 'src/component/Headers/DisplayHeader/DisplayHeader';
import ProgressBar from 'src/component/ProgressBar';
import LongCard from 'src/component/Cards/LongCard/LongCard';
import HeaderText from 'src/component/Headers/HeaderText/HeaderText';
import HeaderButton from 'src/component/Headers/HeaderButton/HeaderButton';

import useHealthData from "../../../useHealthData";
const ActivityTracker = ({ navigation }) => {

  const {runningData,walkingData} = useContext(AppContext)
  const [date, setDate] = useState(new Date());
    const { steps, flights, distance } = useHealthData(date);
  
    console.log(steps, flights, distance, "data123")
  const NotificationNavigate = () => {
    navigation.navigate('Notification');
  }


  return (
    <Layout>
      <View
        style={{
          marginTop: 40,
          backgroundColor: "#855138",
          borderRadius: 20,
          paddingHorizontal: 25,
          paddingBottom: 25,
          flexDirection: 'column',
          justifyContent: "space-between",
        }}
      >
        <DisplayHeader
          left={<HeaderText>Today Target</HeaderText>}
          right={<ButtonPlus width={24} height={24} />}
          marginTop={20}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MiniCard
            pic={<GlassCup />}
            title={'8L'}
            subtitle={'Water Intake'}
          />
          <MiniCard
            pic={<Boots />}
            title={steps ? steps.toString() : '0'}
            subtitle={'Foot Steps'}
          />
        </View>
      </View>

      <DisplayHeader
        left={<HeaderText>Activity Progress</HeaderText>}
        right={<HeaderButton icon={'chevron-down'}>Weekly</HeaderButton>}
      />

      <View style={{ backgroundColor: '#fff', padding: 20, height: 220, borderRadius: 20 }}>
        <View style={{ flexDirection: 'row', marginTop: 60 }}>
          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'28%'}
            marginRight={30}

            backgroundColor={"#EB8F63"}
            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Sun'}

          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'75%'}
            marginRight={30}

            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Mon'}

          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'50%'}
            marginRight={30}

            backgroundColor={"#EB8F63"}
            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Tue'}
          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'65%'}
            marginRight={30}

            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Wed'}
          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'85%'}
            marginRight={30}

            backgroundColor={"#EB8F63"}
            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Thu'}
          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'28%'}
            marginRight={30}

            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Fri'}

          />

          <ProgressBar
            rotationDegree='-90deg'
            width={135}
            height={22}
            flexValue={1}
            volume={'65%'}

            backgroundColor={"#EB8F63"}
            borderBottomRightRadius={50}
            borderTopRightRadius={50}
            dayOfTheWeek={'Sat'}

          />
        </View>
      </View>

      <DisplayHeader
        left={<HeaderText>Latest Activity</HeaderText>}
        right={<Text style={{ color: '#EB8F63' }}>See more</Text>}
      />

      <LongCard
        avatar={<LatestActivityPicOne />}
        title={'Drinking 300ml Water'}
        subtitle={'About 3 minutes ago'}
        backgroundColor={'#fff'}
        rightIcon={<ThreeDots />}
      />

      <LongCard
        avatar={<LatestActivityPicTwo />}
        title={'Eat Snack (Fitbar)'}
        subtitle={'About 10 minutes ago'}
        backgroundColor={'#fff'}
        rightIcon={<ThreeDots />}
      />
    </Layout>
  )
}

export default ActivityTracker