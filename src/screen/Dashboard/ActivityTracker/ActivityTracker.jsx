import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper';

import React from 'react'
import Layout from 'src/component/Layout/Layout';
import { LinearGradient } from 'expo-linear-gradient';
import ButtonPlus from "assets/buttonPlus.svg"
import GlassCup from "assets/glassCup.svg"
import Boots from "assets/boots.svg"
import LatestActivityPicOne from "assets/latestActivityPicOne.svg"
import LatestActivityPicTwo from "assets/latestActivityPicTwo.svg"
import ThreeDots from "assets/threeDots.svg"
import MiniCard from 'src/component/MiniCard/MiniCard';
import DisplayHeader from 'src/component/DisplayHeader/DisplayHeader';
import ProgressBar from 'src/component/ProgressBar';
import LongCard from 'src/component/LongCard/LongCard';

const ActivityTracker = () => {
  const uiData = [
    { id: 1, leftImageUrl: require("assets/Drinkingwater.png"), text: "Drinking 300ml Water", timeText: "About 3 minutes ago", rightImageUrl: require("assets/Three_dot.png"), color: "#92A3FD", line: true },
    { id: 2, leftImageUrl: require("assets/EatSnacks.png"), text: "Eat Snack (Fitbar)", timeText: "About 10 minutes ago", rightImageUrl: require("assets/Three_dot.png"), color: "#C58BF2", line: false },
  ];

  return (
    <Layout>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "#855138",
          borderRadius: 20,
          paddingHorizontal: 25,
          paddingBottom: 25,
          flexDirection: 'column',
          justifyContent: "space-between",
        }}
      >
        <DisplayHeader
          left={'Today Target'}
          right={<ButtonPlus width={24} height={24} />}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MiniCard
            pic={<GlassCup />}
            title={'8L'}
            subtitle={'Water Intake'}
          />
          <MiniCard
            pic={<Boots />}
            title={'2400'}
            subtitle={'Foot Steps'}
          />
        </View>
      </View>

      <DisplayHeader
        left={'Activity Progress'}
        right={
          <Button
            icon="chevron-down"
            mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
            style={{ justifyContent: 'center' }}
            contentStyle={{ flexDirection: 'row-reverse' }}
          >
            Weekly
          </Button>
        }
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
        left={'Latest Activity'}
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

const styles = StyleSheet.create({

})