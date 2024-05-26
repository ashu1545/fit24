import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"

const LongCard2 = ({ avatar, avatarbackground, title, subtitle, subtitleColor = '#A4A9AD', progressBar, backgroundColor, rightIcon }) => {

    return (
        <View style={{ backgroundColor: backgroundColor, flexDirection: 'row', padding: 20, borderRadius: 20, justifyContent: 'space-between', marginTop: 5 }}>
           


            <View style={{backgroundColor: avatarbackground, height: 50,  width: '20%', padding:3, borderRadius:10}}>
                {avatar}
            </View>
            
            <View style={{ width: !progressBar ? 191 : null }}>
                <Text style={{ color: '#DDDADA', lineHeight: 18, fontSize: 12, fontWeight: 500 }}>{title}</Text>
                <Text style={{ color: subtitleColor, lineHeight: 15, fontSize: 10, fontWeight: 400 }}>{subtitle}</Text>

                {progressBar}
            </View>
            <View>
                <TouchableOpacity>
                    {rightIcon}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LongCard2