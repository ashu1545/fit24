import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const ImageCarousel = ({ images }) => {
  const handleImageSelect = index => {
    
    console.log('Selected image index:', index);
    
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        loop={false}
        autoplay={true}
        autoplayTimeout={5}
        showsPagination={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{ uri: image }} style={styles.image} />
            <TouchableOpacity style={styles.selectButton} onPress={() => handleImageSelect(index)}>
              <Text style={styles.selectText}>Select</Text>
            </TouchableOpacity>
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 40,
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover', // Ensure the image covers the container
  },
  dot: {
    backgroundColor: 'rgba(255,255,255,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  navigationButton: {
    paddingHorizontal: 10,
  },
  selectButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width:"90%"
  },
  selectText: {
    color: '#fff',
  },
});

export default ImageCarousel;
