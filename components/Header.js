import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';


export default function Header (props) {
  

  return (
   <View style={styles.header}>
     <Ionicons name="ios-menu" size={24} color="white" />
    <Text style={styles.title}> {props.title} </Text>
     <FontAwesome name="home" size={24} color="white" />
   </View>
  );
}
Header.defaultProps = {
  title: "Report Page"
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    color: '#fff',
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  title: {
    color: 'white',
    fontWeight:"700",
    fontSize:20
    
  }
});