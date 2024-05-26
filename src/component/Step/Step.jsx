import { Text, View } from "react-native"

const Step = ({ number, circleSvg, lineSvg, title, description }) => {

  return (
    <View style={{ flexDirection: 'row', marginBottom: -15, marginTop: 15 }}>
      <Text style={{ color: '#C58BF2', lineHeight: 21, fontSize: 14, marginRight:10 }}>{number}</Text>
      <View style={{ flexDirection: 'column' }}>
        {/* Circle svg*/}
        {circleSvg}
        {/* Line svg */}
        {lineSvg}
      </View>

      <View style={{ flexDirection: 'column', width: 283 }}>
        <Text style={{ lineHeight: 25, fontSize: 14, fontWeight: 'regular', color: '#D9D9D9', marginLeft: 12, marginBottom: 8 }}>{title}</Text>
        <Text style={{ lineHeight: 18, fontWeight: 'regular', fontSize: 12, color: '#EB8F63',marginLeft: 12, }}>{description}</Text>
      </View>
    </View>
  )
}

export default Step