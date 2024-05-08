import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  title: string
}

const Header = ({title}: Props) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
    </View>
  )
  
}

export default Header

const styles = StyleSheet.create({})