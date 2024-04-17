import { StyleSheet, Text, View ,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';

const HeaderNavigation = ({headerText}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftIcon}>
        <IconButton
                icon="chevron-left"
                iconColor="black"
                size={25}
                onPress={() => console.log('Pressed')}
              />

        </View>
        <View style={styles.middleText}>
          <Text style={styles.headerText}>{headerText}</Text>
        </View>
        <View style={styles.rightIcons}>
          
          <IconButton
                icon="dots-horizontal"
                iconColor="black"
                size={25}
                onPress={() => console.log('Pressed')}
              />
        
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderNavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  leftIcon: {
    // Style for left icon container
    width:45,
    height:45,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#F7F8F8",
    backgroundColor:"#F7F8F8",
    alignItems:"center",
    justifyContent:"center"
  },
  middleText: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    // Your text styles
  },
  rightIcons: {
    width:45,
    height:45,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#F7F8F8",
    backgroundColor:"#F7F8F8",
    alignItems:"center",
    justifyContent:"center"
  },
});
