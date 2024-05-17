import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from 'src/component/Layouts/Layout/Layout'
import HeaderNavigation from 'src/component/HeaderNavigation'
import DisplayHeader from 'src/component/Headers/DisplayHeader/DisplayHeader'

const ProgressPhoto = () => {
  return (
    <Layout>



      {/* <View>
      
      </View> */}

      <DisplayHeader
        left={<Text style={{ color: '#ffffff' }}>Gallery</Text>}
        right={<Text style={{ color: '#EB8F63' }}>See more</Text>}
      />

    </Layout>
  )
}

export default ProgressPhoto

const styles = StyleSheet.create({})