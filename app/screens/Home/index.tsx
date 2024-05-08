import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Header} from '@components'
import {TITLE} from '@config/constant'
// import {} from './components';


type Props = {}

const Home = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={TITLE.CURRENCY_CONVERTER}/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        margin:20
    }
})