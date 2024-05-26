import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const LongCard3 = ({ avatar, avatarbackground, title, text,  progressBar, backgroundColor,  }) => {

    return (
        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', padding: 20, borderRadius: 20, justifyContent: 'space-between', marginTop: 5 }}>
           
           <Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>{title}</Text>


            <View style={{backgroundColor: avatarbackground, height: 20,  width: '20%', padding:3, borderRadius:10, bottom:5}}>
                {avatar}
            </View>
            
            <View style={{ width: !progressBar ? 191 : null, top:10, right:100, margin:8 }}>

                {progressBar}
            </View>
            <View>
            <Text style={{ color: '#EB8F63', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>{text}</Text>

            </View>
        </View>
    )
}

export default LongCard3