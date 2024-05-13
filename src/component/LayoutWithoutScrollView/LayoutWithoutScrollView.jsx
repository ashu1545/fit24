import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native"

const LayoutWithoutScrollView = ({ children }) => {

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar />
        {children}
      </SafeAreaView>
    </View>
  )
}

export default LayoutWithoutScrollView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    // gap: 20,
    // marginBottom: 80,
    backgroundColor: '#1B1B1B'
  },
})