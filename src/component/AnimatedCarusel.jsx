
import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Platform,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');


import { LinearGradient } from 'expo-linear-gradient';

const SPACING = 0;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Backdrop = ({ movies, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={(item) => item.id + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          // if (!item.backdrop) {
          //   return null;
          // }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            // extrapolate:'clamp'
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={item.imageUrl}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default function AnimatedCarusel({navigation}) {
  const [movies, setMovies] = React.useState([
    { id: 1, imageUrl: require("../../assets/SignUpIcon1.png"), title: "Improve Shape", description: "I have a low amount of body fat and need / want to build more muscle" },
    { id: 2, imageUrl: require("../../assets/SignUpIcon2.png"), title: "Lean & Tone", description: "I’m “skinny fat”. look thin but have no shape. I want to add learn muscle in the right way" },
    { id: 3, imageUrl: require("../../assets/SignUpIcon3.png"), title: "Lose a Fat", description: "I have over 20 lbs to lose. I want to drop all this fat and gain muscle mass" },

  ]);
  const scrollX = React.useRef(new Animated.Value(0)).current;


  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* <Backdrop movies={movies} scrollX={scrollX} /> */}
      {/* <StatusBar hidden /> */}

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "column",marginTop:20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold",color:"#ffffff" }} >What is your goal ?</Text>
        <Text style={{ color: "#7B6F72", fontSize: 14, textAlign: "center",color:"#ffffff" }}>It will help us to choose a best program for you</Text>
      </View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}

        data={movies}
        keyExtractor={(item) => item.id}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment='start'
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.imageUrl) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, -50, 100],
            extrapolate: 'clamp',
          });

          return (
            <View style={{ width: ITEM_SIZE * 1, margin: 20 }} >

              <Animated.View
                style={{
                  marginHorizontal: 0,
                  //padding: 50,

                  //transform: [{ translateY }],
                  backgroundColor: '#EB8563',
                  alignItems: "center",
                  justifyContent: "center",
                  height: 500,
                  borderRadius: 34,

                }}
              >

                <Image
                  source={item.imageUrl}
                  style={styles.posterImage}
                />


                <Text style={{ fontSize: 16, textAlign: "center", paddingHorizontal: 20, color: "white", }} numberOfLines={3}>
                  {item.title}
                </Text>
                <View style={{ width: '30%', borderBottomColor: 'white', borderBottomWidth: 1, marginVertical: 2 }} >
                </View>


                <Text style={{ fontSize: 12, textAlign: "center", paddingHorizontal: 20, color: "white", marginTop: 40 }} numberOfLines={3}>
                  {item.description}
                </Text>

              </Animated.View>
            </View>
          );
        }}
      />
      <View style={styles.secondContainer}>
        <TouchableOpacity style={{ backgroundColor: "#EB8563", width: "100%", justifyContent: "center", alignItems: "center", height:45, borderRadius:30,  }}
         onPress={() => navigation.navigate("LoginFirstScreen")}
        >
          <Text style={{color:"#ffffff"}}>
            Get Started
          </Text>
        </TouchableOpacity>



      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor:"#090909"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer2: {
    widht: 200,
    height: 200
  },
  Imagecontainer: {
    backgroundColor: "#090909"
  },
  secondContainer: {

    justifyContent: "flex-end",
    width: "100%",
    paddingHorizontal: 20,
    

    marginBottom: 20
  },
  posterImage: {

    width: ITEM_SIZE * 1,
    height: ITEM_SIZE * 1,
    resizeMode: 'contain',
    borderRadius: 12,
    marginBottom: 10,
  },
});