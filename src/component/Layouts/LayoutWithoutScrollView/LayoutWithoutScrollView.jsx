import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

const LayoutWithoutScrollView = ({
  children,
  backgroundColor = "#1B1B1B",
  paddingHorizontal = 20,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: paddingHorizontal,
      // gap: 20,
      // marginBottom: 80,
      backgroundColor: backgroundColor,
    },
  });
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar />
        {children}
      </SafeAreaView>
    </View>
  );
};

export default LayoutWithoutScrollView;
