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

export default function BoxCarusel({ navigation }) {
  const [movies, setMovies] = React.useState([
    { id: 1, imageUrl: require("../../../../assets/bread.png"), title: "Salad", backgroundColor: '#855138' },
    { id: 2, imageUrl: require("../../../../assets/bread.png"), title: "Cake", backgroundColor: '#432784' },
    { id: 3, imageUrl: require("../../../../assets/bread.png"), title: "Pie", backgroundColor: '#855138' },
  ]);
  
  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ffffff" }}>Category</Text>
      </View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
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
            <View style={{ width: 140, margin: 20 }}>
              <Animated.View
                style={{
                  marginHorizontal: 0,
                  backgroundColor: item.backgroundColor, 
                  alignItems: "center",
                  justifyContent: "center",
                  height: 150,
                  width: 150,
                  borderRadius: 34,
                }}
              >
                <Image
                  source={item.imageUrl}
                  style={styles.posterImage}
                />
                <View style={{ position: 'absolute', left: 25, bottom: 50 }}>
                  <Text style={{ fontSize: 20, paddingHorizontal: 20, color: "white" }} numberOfLines={3}>
                    {item.title}
                  </Text>
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
    backgroundColor: "#090909"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer2: {
    width: 200,
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
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 50,
    borderRadius: 12,
  },
});
