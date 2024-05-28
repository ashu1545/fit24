import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  Platform,
  TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Carousel({ title, data, imageWidth }) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  if (data.length === 0) {
    return <Loading />;
  }

  return (
    <SafeAreaView>
      <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#ffffff" }}>{title}</Text>
      </View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
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
            <View style={{ width: 200, margin: 20 }}>
              <Animated.View
                style={{
                  marginHorizontal: 0,
                  backgroundColor: item.backgroundColor, // Set the background color from item data
                  alignItems: "center",
                  justifyContent: "center",
                  height: 210,
                  width: 200,
                  borderRadius: 34,
                }}
              >
                <Image
                  source={item.imageUrl}
                  style={[
                    styles.posterImage,
                    { width: imageWidth }, // Apply the imageWidth prop
                  ]}
                />
                <View style={{ position: 'absolute', left: 25, bottom: 75 }}>
                  <Text style={{ fontSize: 16, paddingHorizontal: 20, color: "white" }} numberOfLines={3}>
                    {item.title}
                  </Text>
                </View>


                <TouchableOpacity 
                        onPress={()=>{}}
                        style={{
                            height:35,
                            width:'60%',
                            backgroundColor:'#EB8563',
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:20,
                            position:'absolute',
                            top:140
                            
                        }}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                    View
                </Text>
            </TouchableOpacity>
              </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  posterImage: {
    height: 90,
    position: 'absolute',
    top: 10,
    right: 40,
    borderRadius: 12,
  },
});
