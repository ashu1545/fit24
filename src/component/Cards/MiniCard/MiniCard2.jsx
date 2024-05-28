import React from 'react';
import { View, Text } from "react-native";

const MiniCard2 = ({ pic, title, subtitle, width = '45%' }) => {
    return (
        <View style={{ 
            backgroundColor: '#F7B2B2', 
            borderRadius: 20, 
            flexDirection: 'row', 
            padding: 20, 
            justifyContent: pic ? 'flex-start' : 'center', 
            alignItems: 'center',
            width: width 
        }}>
            {pic && <View style={{ marginRight: 10 }}>{pic}</View>}
            <View>
                <Text style={{ color: '#EB8F63', lineHeight: 21, fontSize: 14 }}>{title}</Text>
                <Text style={{ color: '#EB8F63', lineHeight: 20, fontSize: 12 }}>{subtitle}</Text>
            </View>
        </View>
    );
}

export default MiniCard2;
