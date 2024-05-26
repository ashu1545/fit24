import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

const Layout = ({ children, backgroundColor = "#1B1B1B" }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      // gap: 20,
      // marginBottom: 80,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <StatusBar />
          {children}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Layout;
