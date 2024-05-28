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


export default function CardCarusel({navigation}) {
    const [movies, setMovies] = React.useState([
      { id: 1, imageUrl: require("../../../../assets/cake.png"), title: "BreakFast", subtitle: "120+ Foods", backgroundColor: '#855138' },
      { id: 2, imageUrl: require("../../../../assets/bread.png"), title: "Lunch", subtitle: "103+ Foods",backgroundColor: '#432784' },
  
    ]);
    const scrollX = React.useRef(new Animated.Value(0)).current;
  
  
    if (movies.length === 0) {
      return <Loading />;
    }
  
    return (
      <SafeAreaView >
        {/* <Backdrop movies={movies} scrollX={scrollX} /> */}
        {/* <StatusBar hidden /> */}
  
        <View style={{ flex: 1,   flexDirection: "column",marginTop:20 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold",color:"#ffffff" }} >Find Somthing to Eat</Text>
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
              <View style={{ width: 200, margin: 20 }} >
  
                <Animated.View
                  style={{
                    marginHorizontal: 0,
                    backgroundColor: item.backgroundColor,
                    alignItems: "center",
                    justifyContent: "center",
                    height: 200,
                    borderBottomLeftRadius:50,
                    borderBottomRightRadius:20,
                    borderStartEndRadius:70,
                    borderTopRightRadius:110,
                    borderTopLeftRadius:50
                  }}
                >
  
                  
                <Image
                  source={item.imageUrl}
                  style={styles.posterImage}
                />

                  <View style={{position:'absolute', left:10, bottom:10}}>
                  <Text style={{ fontSize: 20,  paddingHorizontal: 20, color: "white", }} numberOfLines={3}>
                    {item.title}
                  </Text>

                  <Text style={{ fontSize: 16,  paddingHorizontal: 20, color: "#EB8F63", }} numberOfLines={3}>
                    {item.subtitle}
                  </Text>



                  <View style={{
                    left:20
                  }}>

                  <TouchableOpacity 
                        onPress={()=>{}}
                        style={{
                            height:35,
                            width:'60%',
                            backgroundColor:'#EB8563',
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:20
                            
                        }}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                    Select
                </Text>
            </TouchableOpacity>

                  </View>


                 

                  </View>
  
                
                
  
  
  
                </Animated.View>
              </View>
            );
          }}
        />
      
  
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
      height: 100
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
  
      width: 120,
      height: ITEM_SIZE * 1,
      resizeMode: 'contain',
      borderRadius: 12,
      marginBottom: 10,
      position: 'absolute',
      bottom:25,
      left:100
    },
  });