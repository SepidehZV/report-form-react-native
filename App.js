
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './components/Header';
import AddReport from './components/AddReport';
import Form from './components/Form';
import Status from './components/Status';


export default function App() {
  const [mode, setMode] = useState('Create');
  const [reports, setReports] = useState([])
  

  function saveReport (report) {
    const newReport = {id: reports.length + 1 , ...report}
    setReports( prev => ([...prev, newReport]));
    setMode("Status");
    console.log(reports);
  }
  
  function transition(mode) {
    setMode(mode);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollViewStyle} >
        {mode === 'Create' && <AddReport openForm={transition}/>}
        {mode === 'Form' && <Form saveReport={saveReport} backToReportPage = {transition}/>}
        {mode === 'Status' && <Status backToReportPage = {transition}/>}
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
    
  },
  scrollViewStyle: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
});
