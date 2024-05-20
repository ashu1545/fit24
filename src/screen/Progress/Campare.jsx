import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import Layout from 'src/component/Layouts/Layout/Layout'
import HeaderButton from 'src/component/Headers/HeaderButton/HeaderButton'
import DisplayHeader from 'src/component/Headers/DisplayHeader/DisplayHeader'
import DisplayCompareHeader from 'src/component/Headers/DisplayHeader/DisplayCompareHeader'
import HeaderLeftContent from 'src/component/Headers/HeaderLeftContent/HeaderLeftContent'
import CalendarIcon from "assets/calendarIcon.svg"
import ArrowIcon from "assets/arrowIcon.svg"
import HeaderRightContent from 'src/component/Headers/HeaderRightContent/HeaderRightContent'


const { height } = Dimensions.get('window');

const Campare = ({navigation}) => {

    const buttonMarginFromBottom = height * 0.5;
    console.log(buttonMarginFromBottom)
    return (
        <Layout>

            <View style={{backgroundColor:"#ffffff", borderRadius:10,marginTop:30, marginBottom:20 , height:60}}>
                <DisplayCompareHeader
                    left={<HeaderLeftContent
                        headerTitle={'Select Month 1'}
                        headerColor={'#EB8F63'}
                        svgIcon={<CalendarIcon style={{ marginRight: 10, marginLeft:10 }} />}
                    />
                    }
                    right={
                        <HeaderRightContent
                        headerTitle={'May'}
                        headerColor={'#EB8F63'}
                        svgIcon={<ArrowIcon style={{ marginRight: 10, marginLeft:10 }}  />}
                    />
                }
                />
            </View>

            <View style={{backgroundColor:"#ffffff", borderRadius:10, height:60, marginBottom:20 }}>
                <DisplayCompareHeader
                    left={<HeaderLeftContent
                        headerTitle={'Select Month 2'}
                        headerColor={'#EB8F63'}
                        svgIcon={<CalendarIcon style={{ marginRight: 10, marginLeft:10 }} />}
                    />
                    }
                    right={
                        <HeaderRightContent
                        headerTitle={'Select Month'}
                        headerColor={'#EB8F63'}
                        svgIcon={<ArrowIcon style={{ marginRight: 10, marginLeft:10 }} />}
                    />
                    
                    }
                />
            </View>
            

            <View style={{ position: 'relative', marginTop: buttonMarginFromBottom }}>
                <HeaderButton onPress={()=> navigation.navigate('Result')}>
                    Compare
                </HeaderButton>

            </View>

        </Layout>
    )
}

export default Campare

const styles = StyleSheet.create({})