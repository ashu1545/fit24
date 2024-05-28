import React from "react";
import {View} from 'react-native';
import Layout from "src/component/Layouts/Layout/Layout";
import SearchBar from "../../component/searchbar/searchbar";
import BoxCarusel from "src/component/Cards/cardslider/boxSlider";
import LongCard from "src/component/Cards/LongCard/LongCard";
import Cake from "assets/cake2.svg";
import Button from "assets/Button.svg";
import Meal from "assets/meal.svg";
import Carousel from "src/component/Cards/cardslider/carusel";
import HeaderNavigation from "src/component/HeaderNavigation";




const BreakFast = () =>{

    const data = [
        {
          id: 1,
          imageUrl: require("../../../assets/cake3.png"),
          title: "Honey Pancake",
          backgroundColor: '#855138'
        },
        {
          id: 2,
          imageUrl: require("../../../assets/bread.png"),
          title: "Cania Bread",
          backgroundColor: '#432784'
        },
        {
          id: 3,
          imageUrl: require("../../../assets/bread.png"),
          title: "Pie",
          backgroundColor: '#32cd32'
        },
      ];

            return(
                    <Layout backgroundColor="#1B1B1B">
                           <View style={{
                        marginTop:10
                    }}>
                      
                     
                      <HeaderNavigation headerText={'BreakFasat'} status={'john'}/>

                    </View>

                    <SearchBar placeholder={'Search Pancake'}/>


                    <BoxCarusel/>


                    <Carousel title={'Recommendation for Diet'} data={data} imageWidth={120}/>




<LongCard
        avatar={<Cake />}
        title={'Blueberry Pancake'}
        subtitle={'Medium | 30mins | 230kcal'}
        backgroundColor={'#fff'}
        rightIcon={<Button />}
      />

<LongCard
        avatar={<Meal />}
        title={'Salmon Nigiri'}
        subtitle={'Medium | 30mins | 230kcal'}
        backgroundColor={'#fff'}
        rightIcon={<Button />}
      />

     


                    </Layout>
            );
}

export default BreakFast;