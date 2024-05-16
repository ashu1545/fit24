import { Text, View } from 'react-native'
import ProgressBar from 'src/component/ProgressBar'
import UpArrow from "assets/upArrow.svg"


const UpperbodyWorkoutModal = () => {

    return (
        <View style={{ backgroundColor: '#fff', flexDirection: 'column', borderRadius: 10, paddingHorizontal: 22, paddingVertical: 12 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#EB8F63' }}>Fri, 28 May</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignSelf: 'center' }}>
                    <Text>90%</Text>
                    <UpArrow width={12} height={12} style={{ marginTop: 3 }} />

                </View>
            </View>
            <View><Text style={{ color: '#EB8F63' }}>Upperbody Workout</Text></View>
            <View>
                <ProgressBar
                    rotationDegree='0deg'
                    width={110}
                    height={5}
                    marginTop={4}
                    volume={'88%'}
                />
            </View>

        </View>
    )
}

export default UpperbodyWorkoutModal