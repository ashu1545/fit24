import { View, Text } from "react-native"


const ImageHolder = ({ image, imageName, backgroundColor = '#F7F8F8' }) => {

    return (
        <View style={{ marginRight: 20 }}>
            <View style={{ backgroundColor: backgroundColor, alignItems: 'center', alignContent: 'center', height: 130, width: 130, borderRadius: 20, marginBottom: 10, justifyContent: 'center' }}>
                {image}
            </View>
            <Text>{imageName}</Text>
        </View>
    )
}

export default ImageHolder