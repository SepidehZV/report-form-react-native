import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from "react-native";

import DatePicker from "react-native-datepicker";

export default function Form(props) {
  
  const [report, setReport] = useState({
    username: "",
    email: "",
    description: "",
    date: new Date()
  })
  const onDateChange = (date) => {
    setReport( prev => ({...prev , date}))
  };
  function onSubmit () {
    if (!report.username || !report.email || !report.description) {
      Alert.alert("Invalid Inputs", 
      "Fill the required inputs!",
     )
    } else {
      props.saveReport(report)

    }
  }
  function onCancel () {
    props.backToReportPage("Create");
  }
  return (
    <View style={styles.formContainer}>
      <Text>Username: </Text>
      <TextInput
        textContentType= 'username'
        placeholder="Enter Username" 
        style={styles.input}
        onChangeText={username => setReport( prev => ({...prev , username}))}/>
      <Text>Email: </Text>
      <TextInput 
        textContentType= 'emailAddress'
        placeholder="Enter Email"
        style={styles.input} 
        onChangeText={email => setReport( prev => ({...prev , email}))}/>
      <Text>Please describe the problem you want to report (300 words): </Text>
      <TextInput
        placeholder="Description"
        style={[styles.input, styles.inputDesc]}
        multiline={true}
        numberOfLines={4}
        onChangeText={description => setReport( prev => ({...prev , description}))}
      />
      <Text>When did this problem occur? </Text>
      <DatePicker
        style={styles.datePickerStyle}
        date={report.date} 
        mode="date" 
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-01-2020"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
            marginRight: 36,
            height: 60,
            padding: 8,
            fontSize: 16,
            borderRadius: 5,
            borderWidth: 1,
          },
        }}
        onDateChange={onDateChange}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={onSubmit}>
     
     <Text style={styles.btnText}>Submit</Text>
     
   </TouchableOpacity>
   <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
     
     <Text style={styles.btnText}>Cancel</Text>
     
   </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 15,
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
  },
  inputDesc: {
    paddingTop:12,
    height: 150,
  },
  datePickerStyle: {
    width: "100%",
    marginTop: 15,
    alignSelf: "center",
  },
  submitBtn: {
    marginTop: 30,
    height: 60,
    padding: 15,
    backgroundColor: '#FA8072',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
    
  },
  cancelBtn: {
    marginTop: 10,
    height: 60,
    padding: 15,
    backgroundColor: '#B3B5B5',
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
