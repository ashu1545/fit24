import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import LayoutWithoutScrollView from 'src/component/Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView';
import LongCard from 'src/component/Cards/LongCard/LongCard';
import ImageInNotificationOne from "assets/imageInNotificationOne.svg"
import ImageInNotificationTwo from "assets/imageInNotificationTwo.svg"
import ImageInNotificationThree from "assets/imageInNotificationThree.svg"
import ImageInNotificationFour from "assets/imageInNotificationFour.svg"
import ImageInNotificationFive from "assets/imageInNotificationFive.svg"
import ThreeDots from "assets/threeDots.svg"


const NotificationPage = () => {
  const notifications = [
    {
      id: 1,
      avatar: <ImageInNotificationOne />,
      title: 'Hey, it’s time for lunch',
      subtitle: 'About 1 minutes ago',
      rightIcon: <ThreeDots />
    },
    {
      id: 2,
      avatar: <ImageInNotificationTwo />,
      title: 'Don’t miss your lowerbody workout',
      subtitle: 'About 3 hours ago',
      rightIcon: <ThreeDots />
    },
    {
      id: 3,
      avatar: <ImageInNotificationThree />,
      title: 'Hey, let’s add some meals for your b..',
      subtitle: 'About 3 hours ago',
      rightIcon: <ThreeDots />
    },
    {
      id: 4,
      avatar: <ImageInNotificationFour />,
      title: 'Congratulations, You have finished A..',
      subtitle: '29 May',
      rightIcon: <ThreeDots />
    },
    {
      id: 5,
      avatar: <ImageInNotificationFive />,
      title: 'Hey, it’s time for lunch',
      subtitle: '8 April',
      rightIcon: <ThreeDots />
    },
    {
      id: 6,
      avatar: <ImageInNotificationTwo />,
      title: 'Ups, You have missed your Lowerbo...',
      subtitle: '3 April',
      rightIcon: <ThreeDots />
    },
  ]

  const renderItem = ({ item }) => (
    <>
      <LongCard
        avatar={item.avatar}
        title={item.title}
        subtitle={item.subtitle}
        rightIcon={item.rightIcon}
      />
    </>
  )

  return (
    <LayoutWithoutScrollView>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ borderBottomColor: '#DDDADA', borderBottomWidth: 0.9 }}></View>
        )}
      />
    </LayoutWithoutScrollView>
  )
}

export default NotificationPage;
