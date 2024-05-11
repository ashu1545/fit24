import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"



const ProgressBar = ({rotationDegree, width, height, flexValue, marginTop, volume, marginRight}) => {
    // const [degree, setDegree] = useState(null)
    // useEffect(() => {
    //     setDegree(rotationDegree)
    // }, [])

    const styles = StyleSheet.create({
        contain: {
            flex: flexValue,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: marginRight,
            marginTop: marginTop
        },
        standingBox: {
            width: width,
            height: height,
            backgroundColor: '#F7F8F8', // Full box color
            transform: [{ rotate: rotationDegree }],
            borderRadius: 50
        },
        halfFilled: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: volume, // Half of the full box width
            height: '100%',
            backgroundColor: '#C58BF2', // Half-filled color
            // borderRadius: 50,
            // borderBottomRadius: 50,
            // borderStartStartRadius: 50,
            // borderBottomStartRadius: 20,
            // borderBottomLeftRadius: 20
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50
        },
    })

    return (
        <View style={styles.contain}>
            {/* Full box */}
            <View style={styles.standingBox}>
                {/* Half-filled portion */}
                <View style={styles.halfFilled}></View>
            </View>
        </View>
    )
}


export default ProgressBar


