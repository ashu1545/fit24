import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Layout from 'src/component/Layouts/Layout/Layout'
import HeaderNavigation from 'src/component/HeaderNavigation'
import DisplayHeader from 'src/component/Headers/DisplayHeader/DisplayHeader'
import { LinearGradient } from 'expo-linear-gradient';
import Photocamera from "assets/photocamera.svg"
import ProgressCalendar from "assets/progressCalendar.svg"
import HeaderText from 'src/component/Headers/HeaderText/HeaderText'
import HeaderButton from 'src/component/Headers/HeaderButton/HeaderButton'

const data = [
  { id: '1', title: 'Item 1', image: require("../../../assets/photo.png") },
  { id: '2', title: 'Item 2', image: require("../../../assets/photo3.png") },
  { id: '3', title: 'Item 3', image: require("../../../assets/photo2.png") },
  { id: '4', title: 'Item 4', image: require("../../../assets/photo3.png") },
  { id: '5', title: 'Item 5', image: require("../../../assets/photo4.png") },
];

const data1 = [
  { id: '1', title: 'Item 1', image: require("../../../assets/photo4.png") },
  { id: '2', title: 'Item 2', image: require("../../../assets/photo3.png") },
  { id: '3', title: 'Item 3', image: require("../../../assets/photo3.png") },
  { id: '4', title: 'Item 4', image: require("../../../assets/photo.png") },
  { id: '5', title: 'Item 5', image: require("../../../assets/photo3.png") },
];

const ProgressPhoto = ({navigation}) => {

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />

    </View>
  );
  const renderItem1 = ({ item }) => (
    <>
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />

      </View>

    </>
  );
  return (
    <Layout>

      <LinearGradient
        colors={['#855138', '#855138']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          marginTop: 20,
          width: "100%",
          padding: 10,
          height:150,
          borderRadius: 20,
          justifyContent: "space-between",
          flexDirection:"row",
          
        }}
      >
        <View style={{width:"50%", height:"100%", flexDirection:"column", alignitems:"center", justifyContent:"center"}}>
          <Text style={{color:"#ffffff", marginBottom:5, textAlign:"center"}}>Track With Your Progress Each Month with Photo</Text>
          <HeaderButton>Learn more</HeaderButton>
        </View>
        <View style={{width:"50%", height:"100%", alignItems:"center", justifyContent:"center"}}>
         <ProgressCalendar/>
        </View>
        
      </LinearGradient>

      <LinearGradient
        colors={['#855138', '#855138']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          marginTop: 20,
          width: "100%",
          padding: 10,
          borderRadius: 20,
          justifyContent: "space-between",
        }}
      >
        <DisplayHeader
          left={<HeaderText>Campare my Photo </HeaderText>}
          marginTop={10}
          right={<HeaderButton onPress={() => navigation.navigate("Compare")}>Campare</HeaderButton>}
        />
      </LinearGradient>


      <View style={{ flexDirection: "column", gap: 5 }}>
        <DisplayHeader
          left={<Text style={{ color: '#ffffff' }}>Gallery</Text>}
          right={<Text style={{ color: '#EB8F63' }}>See more</Text>}
        />
        <Text style={{ color: "#EB8F63", }}>2 June</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <Text style={{ color: "#EB8F63", }}>4 June</Text>
        <FlatList
          data={data1}
          renderItem={renderItem1}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{ position: "rrelative", left: 310, top: -60 }}>
          <LinearGradient
            colors={['#C58BF2', '#EEA4CE',]}
            style={{ borderRadius: 50, width: 50, height: 50, alignItems: "center", justifyContent: "center" }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Photocamera />

          </LinearGradient>

        </View>


      </View>


    </Layout>
  )
}

export default ProgressPhoto

const styles = StyleSheet.create({
  item: {
    //backgroundColor: '#f9c2ff',
    //padding: 20,
    //marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',

  },
  title: {
    fontSize: 18,
    marginTop: 8,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});