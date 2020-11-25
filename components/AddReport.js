import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function AddReport (props) {
  

  return (
   <TouchableOpacity style={styles.reportBtn} onPress={() => props.openForm("Form")}>
     <FontAwesome name="plus" size={24} color="white" />
     <Text style={styles.btnText}>Report</Text>
     
   </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  reportBtn: {
    
    height: 60,
    padding: 15,
    backgroundColor: '#FA8072',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
    
  },
  btnText: {
    color: 'white',
    fontWeight:"400",
    fontSize: 18,
    paddingHorizontal: 10
    
  }
});