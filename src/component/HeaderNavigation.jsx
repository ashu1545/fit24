import { StyleSheet, Text, View ,Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton } from 'react-native-paper';

const HeaderNavigation = ({headerText, status}) => {
  console.log(status)
  return (
    <SafeAreaView style={{backgroundColor: status ? "#1B1B1B"  : "white", paddingHorizontal:status ? 20  : null}}>
      <View style={styles.header}>
        <View style={[styles.leftIcon, { borderColor:status ? "#1B1B1B"  : "#F7F8F8"}]}>
        <IconButton
                icon="chevron-left"
                iconColor="white"
                size={25}
                onPress={() => console.log('Pressed')}
              />

        </View>
        <View style={styles.middleText}>
          <Text style={[styles.headerText, {color: status ? "white" : "black"}]}>{headerText}</Text>
        </View>
        <View style={[styles.rightIcons,{ borderColor:status ? "#1B1B1B"  : "#F7F8F8",}]}>
          
          <IconButton
                icon="dots-horizontal"
                iconColor="white"
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
    borderColor:"#1B1B1B",
    backgroundColor:"#070707",
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
    borderColor:"#1B1B1B",
    backgroundColor:"#070707",
    alignItems:"center",
    justifyContent:"center"
  },
});
