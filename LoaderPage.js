import { View, Text,ActivityIndicator,StyleSheet ,SafeAreaView} from 'react-native'
import React,{useState} from 'react'

export default function LoaderPage() {
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={[styles.container, styles.horizontal]}>
       <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="red" />
  </View>
  </View>
    </SafeAreaView>
   
    
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
  });