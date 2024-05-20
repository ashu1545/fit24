import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from 'src/component/Layouts/Layout/Layout'
import Statistics from './Statistics'

const Result = () => {
  const [activeButton, setActiveButton] = useState('Statistics')

  const handlePress = (button) => {
    setActiveButton(button)
  }

  return (
    <Layout>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: activeButton === 'Statistics' ? "#EB8F63" : "#ddd" }
          ]}
          onPress={() => handlePress('Statistics')}
        >
          <Text style={[
            styles.buttonText,
            { color: activeButton === 'Statistics' ? "#ffffff" : "#EB8F63" }
          ]}>
            Statistics
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: activeButton === 'Photo' ? "#EB8F63" : "#ddd" }
          ]}
          onPress={() => handlePress('Photo')}
        >
          <Text style={[
            styles.buttonText,
            { color: activeButton === 'Photo' ? "#ffffff" : "#EB8F63" }
          ]}>
            Photo
          </Text>
        </TouchableOpacity>
      </View>
      {activeButton === 'Statistics' ? <Statistics /> : <Text>Photo Content</Text>}
    </Layout>
  )
}

export default Result

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    width: "100%",
  },
  button: {
    width: "40%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
})
