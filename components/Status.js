import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Status (props) {
  
  setTimeout(() => {
    props.backToReportPage("Create");
  }, 2000);
  return (
   <View style={styles.status}>
     <FontAwesome name="check" size={24} color="white" />
     <Text style={styles.title}>Report Submitted Successfully</Text>
   </View>
  );
}


const styles = StyleSheet.create({
  status: {
    
    height: 60,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#40BD85',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  title: {
    color: 'white',
    fontWeight:"400",
    fontSize: 18,
    paddingHorizontal: 10
    
  }
});