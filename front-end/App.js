import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import axios from 'axios';
import GetJobs from './components/GetJobs';



export default function App() {
   
  return (
    <GetJobs></GetJobs>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
