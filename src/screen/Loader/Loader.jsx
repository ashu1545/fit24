import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect,useState} from 'react'
import LoadingIndicator from 'src/component/LoadingIndicator/LoadingIndicator'


const Loader = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus(false);
    }, 4000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    
      <View style={styles.container}>
        {status && <LoadingIndicator size={100} /> } 
      </View>
    
  )
}

export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor:"#1B1B1B"
    
  },
})
