import HeaderText from "../HeaderText/HeaderText"
import { StyleSheet, Text, View } from 'react-native'

const HeaderRightContent = ({ headerTitle, svgIcon, headerColor }) => {
    return (
        <View style={{flexDirection:"row", alignItems:"center"}}>
            
            <HeaderText headerColor={headerColor}>{headerTitle}</HeaderText>
            {svgIcon}
            
        </View>
    )
}

export default HeaderRightContent