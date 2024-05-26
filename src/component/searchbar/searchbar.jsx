import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Search from "assets/Search.svg";
import Filter from "assets/Filter.svg"
const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Search/>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#DDDADA"
      />
      <Filter/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginHorizontal: 20,
    marginTop:20
  },
  
  input: {
    flex: 1,
    fontSize: 10,
    color: '#DDDADA',
    marginLeft:10
  },
});

export default SearchBar;
