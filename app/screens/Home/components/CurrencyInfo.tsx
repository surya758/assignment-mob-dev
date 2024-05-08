import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { convertCurrency } from '@utils/helpers'

type Props = {
  fromCurrency: string;
  toCurrency: string;
}

const CurrencyInfo = ({fromCurrency, toCurrency}: Props) => {
  return (
    <View>
      <Text>1 {fromCurrency} = {convertCurrency(1, fromCurrency, toCurrency)} {toCurrency}</Text>
    </View>
  )
}

export default CurrencyInfo

const styles = StyleSheet.create({})