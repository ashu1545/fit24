import { View, Text } from "react-native"
import CalendarIcon from "assets/calendarIcon.svg"
import LayoutWithoutScrollView from "src/component/Layouts/LayoutWithoutScrollView/LayoutWithoutScrollView"
import DisplayHeader from "src/component/Headers/DisplayHeader/DisplayHeader"
import HeaderLeftContent from "src/component/Headers/HeaderLeftContent/HeaderLeftContent"
import SingleBarbel from "assets/singleBarbel.svg"
import ArrowIcon from "assets/arrowIcon.svg"
import SwapIcon from "assets/swapIcon"
import RepetitionsIcon from "assets/repetitionsIcon.svg"
import { Button } from 'react-native-paper';

const AddSchedule = () => {

  return (
    <LayoutWithoutScrollView>
      <View style={{ flexDirection: 'row', marginVertical: 40 }}>
        <CalendarIcon style={{ marginRight: 10 }} />
        <Text style={{ color: '#fff', lineHeight: 21, fontSize: 14, fontWeight: 'regular' }}>Thu, 27 May 2021</Text>
      </View>

      <View>
        <Text style={{ color: '#FFFFFF', lineHeight: 21, fontSize: 14, fontWeight: 'medium', marginBottom: 10 }}>
          Time
        </Text>

        <View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#D9D9D9', marginRight: 20 }}>2</Text>
            <Text style={{ color: '#D9D9D9', marginRight: 20 }}>29</Text>
            <Text style={{ color: '#D9D9D9', marginRight: 20 }}>AM</Text>
          </View>
          <View style={{ backgroundColor: '#DDDADA', width: '100%', height: 0.6, marginVertical: 10 }} />
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#fff', marginRight: 20 }}>2</Text>
            <Text style={{ color: '#fff', marginRight: 20 }}>29</Text>
            <Text style={{ color: '#fff', marginRight: 20 }}>PM</Text>
          </View>
          <View style={{ backgroundColor: '#DDDADA', width: '100%', height: 0.6, marginVertical: 10 }} />
        </View>
        <View>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Text style={{ color: '#D9D9D9', marginRight: 20 }}>4</Text>
            <Text style={{ color: '#D9D9D9', marginRight: 20 }}>31</Text>
            <Text style={{ color: '#D9D9D9', marginRight: 40 }}></Text>
          </View>
        </View>

      </View>

      <View>
        <Text style={{ color: '#fff', lineHeight: 21, fontSize: 14, fontWeight: 'medium', marginTop: 30 }}>Details Workout</Text>

        <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 10, padding: 15 }}>
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={'Choose Workout'}
                headerColor={'#4D3492'}
                svgIcon={<SingleBarbel style={{ marginRight: 10 }} />}
              />}
            marginTop={0}
            marginBottom={0}
            right={<View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#EB8F63', marginRight: 10 }}>Upperbody Workout</Text>
              <ArrowIcon />
            </View>}
          />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 10, padding: 15 }}>
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={'Difficulty'}
                headerColor={'#4D3492'}
                svgIcon={<SwapIcon style={{ marginRight: 10 }} />}
              />}
            marginTop={0}
            marginBottom={0}
            right={<View style={{ flexDirection: 'row' }}>
              <Text style={{ color: '#EB8F63', marginRight: 10 }}>Beginner</Text>
              <ArrowIcon />
            </View>}
          />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 10, padding: 15 }}>
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={'Custom Repititions'}
                headerColor={'#4D3492'}
                svgIcon={<RepetitionsIcon style={{ marginRight: 10 }} />}
              />}
            marginTop={0}
            marginBottom={0}
          />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 20, marginTop: 10, padding: 15 }}>
          <DisplayHeader
            left={
              <HeaderLeftContent
                headerTitle={'Custom Weights'}
                headerColor={'#4D3492'}
                svgIcon={<RepetitionsIcon style={{ marginRight: 10 }} />}
              />}
            marginTop={0}
            marginBottom={0}
          />
        </View>
      </View>


      <Button
        mode="contained" theme={{ colors: { primary: '#EB8F63' } }}
        contentStyle={{ paddingVertical: 15, fontSize: 16, lineHeight: 24, fontWeight: 'bold' }}
        style={{ borderRadius: 50, marginTop: 180 }}
      >
        Save
      </Button>

    </LayoutWithoutScrollView>
  )
}

export default AddSchedule