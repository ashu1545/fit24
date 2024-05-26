import React, { useRef, useState } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import Cricle from "assets/circle1.svg";
import Cricle2 from "assets/circle2.svg";
import Line from "assets/line.svg";
import Calories from "assets/calories.svg";
import Step from 'src/component/Step/Step';
import MiniCard2 from 'src/component/Cards/MiniCard/MiniCard2';

const ThirdMealPlanner = () => {
  
  const bottomSheetRef = useRef(null);
  const [sliderValue, setSliderValue] = useState(0); // State to hold the slider value

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContainer}>
        <Text style={{fontWeight:700, fontSize: 16, color: '#000000'}}>Blueberry Pancakes</Text>
        <Text style={{fontSize: 12, fontWeight: 400, color: '#EB8F63'}}>by James Ruth</Text>

        <Text style={{fontWeight:700, fontSize: 16, color: '#000000', marginTop:18}}>Nutrition</Text>

        <Text style={{fontWeight:400, fontSize: 12, color: '#000000', marginTop:1}}>
        Pancakes are some people's favorite breakfast, who doesn't like pancakes? Especially with the real honey splash on top of the pancakes, of course everyone loves that! besides being Read More...
        </Text>

      
        <MiniCard2 pic={<Calories/>} title={'Love'} subtitle={'amaka'}/>


        <Step number={'01'} circleSvg={<Cricle/>} lineSvg={<Line/>} title={'Step 1'} description={'Prepare all of the ingredients that needed'}/>
        <Step number={'02'} circleSvg={<Cricle2/>} lineSvg={<Line/>} title={'Step 2'} description={'Prepare all of the ingredients that needed'}/>
        <Step number={'03'} circleSvg={<Cricle2/>} lineSvg={<Line/>} title={'Step 3'} description={'Prepare all of the ingredients that needed'}/>
        <Step number={'04'} circleSvg={<Cricle2/>} lineSvg={<Line/>} title={'Step 3'} description={'Prepare all of the ingredients that needed'}/>


          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>

         

          <TouchableOpacity 
                        onPress={()=>{}}
                        style={{
                            height:35,
                            width:'50%',
                            backgroundColor:'#EB8563',
                            marginVertical: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius:20
                            
                        }}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 12}}>
                    Add To Breakfast
                </Text>
            </TouchableOpacity>

          </View>

          
       
    </View>
  );

  const handlePresentBottomSheet = () => {
    bottomSheetRef.current.present();
  };

  return (
    <View style={styles.container}>

    <Image
          source={require('../../../assets/cake4.png')} 
          
        />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['25%', '50%', '90%']}
        index={0}
        enableContentTapInteraction={false}
      >
        {renderBottomSheetContent()}
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EB8F63',
  },
  bottomSheetContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ThirdMealPlanner;
