import { StyleSheet, Text, View } from 'react-native'
import React, { Children, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{

}>

const Divider = ({children}: Props) => {
  return (
    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, opacity: 0.2, marginVertical:10, width: "100%"}}>
      {children}
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({})