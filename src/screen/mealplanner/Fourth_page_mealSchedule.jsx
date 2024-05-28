import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Layout from 'src/component/Layouts/Layout/Layout';
import HeaderNavigation from 'src/component/HeaderNavigation';
import Meal from "assets/meal.svg";
import LongCard from 'src/component/Cards/LongCard/LongCard2';
import ArrowLeft from "assets/arrowLcircle.svg";
import Coffe from "assets/coffe.svg";
import Cake from "assets/cake2.svg";
import Chicken from "assets/chicken.svg";
import ProgressBar from 'src/component/ProgressBar';
import LongCard3 from 'src/component/Cards/LongCard/LongCard3';
import Calories from "assets/calories.svg";
import Proteins from "assets/proteins.svg";
import Fat from "assets/fat.svg";
import Orange from "assets/orange.svg";
import Apple from "assets/applepie.svg";




const MealSchedule = ()=>{
   

    return(
            <Layout backgroundColor="#1B1B1B">
                   
                     
                   <View style={{
                        marginTop:10
                    }}>
                      
                     
                      <HeaderNavigation headerText={'Meal Schedule'} status={'john'}/>


                 
                    </View>



                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.gridItem}>
                            <Text style={styles.text1}>Breakfast</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.text}>2 meals | 230 calories</Text>
                        </View>
                        </View>

                    <LongCard avatarbackground={'#A16004'} backgroundColor={'#1B1B1B'} avatar={<Cake/>} title={'Honey Pancake'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>
                    <LongCard avatarbackground={'#7443AB'} backgroundColor={'#1B1B1B'} avatar={<Coffe/>} title={'Coffe'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>


                    
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.gridItem}>
                            <Text style={styles.text1}>Lunch</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.text}>2 meals | 500 calories</Text>
                        </View>
                        </View>
                    <LongCard avatarbackground={'#7443AB'} backgroundColor={'#1B1B1B'} avatar={<Chicken/>} title={'Chicken Steak'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>
                    <LongCard avatarbackground={'#7443AB'} backgroundColor={'#1B1B1B'} avatar={<Coffe/>} title={'Honey Pancake'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>



                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.gridItem}>
                            <Text style={styles.text1}>Snacks</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Text style={styles.text}>2 meals | 140 calories</Text>
                        </View>
                        </View>
                    <LongCard backgroundColor={'#1B1B1B'} avatarbackground={'#7443AB'} avatar={<Orange/>} title={'Orange'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>
                    <LongCard backgroundColor={'#1B1B1B'} avatarbackground={'#A16004'} avatar={<Apple/>} title={'Apple Pie'} subtitle={'07:00am'} rightIcon={<ArrowLeft/>}/>



         


    <LongCard3 backgroundColor={'#fff'} avatar={<Calories/>} title={'Calories'} subtitle={'07:00am'} text={'320 kCal'} progressBar={<ProgressBar   
                    rotationDegree="180deg"
                    width={120}
                    height={20}
                    flexValue={1}
                    marginTop={10}
                    volume={50}
                    marginRight={10}
                    backgroundColor="#C58BF2"
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    
                    />}/>


     <LongCard3 backgroundColor={'#fff'} avatar={<Proteins/>} title={'Proteins'} subtitle={'07:00am'} text={'320 kCal'} progressBar={<ProgressBar   
                    rotationDegree="180deg"
                    width={120}
                    height={20}
                    flexValue={1}
                    marginTop={10}
                    volume={50}
                    marginRight={10}
                    backgroundColor="#C58BF2"
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    
                    />}/>



        <LongCard3 backgroundColor={'#fff'} avatar={<Fat/>} title={'Fats'} subtitle={'07:00am'} text={'320 kCal'} progressBar={<ProgressBar   
                    rotationDegree="180deg"
                    width={120}
                    height={20}
                    flexValue={1}
                    marginTop={10}
                    volume={50}
                    marginRight={10}
                    backgroundColor="#C58BF2"
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    
                    />}/>


        <LongCard3 backgroundColor={'#fff'} avatar={<Calories/>} title={'Carbs'} subtitle={'07:00am'} text={'320 kCal'} progressBar={<ProgressBar   
                    rotationDegree="180deg"
                    width={120}
                    height={20}
                    flexValue={1}
                    marginTop={10}
                    volume={50}
                    marginRight={10}
                    backgroundColor="#C58BF2"
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    
                    />}/>

                    </Layout>
    );
}

export default MealSchedule;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        
        
        margin: 5, 
        borderRadius: 10, 
        paddingVertical: 10, 
      },
      text: {
        color: '#EB8F63',
        fontSize: 16,
        fontWeight: '600',
      },

      text1: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
      },
})

