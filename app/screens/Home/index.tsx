import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import {Header, Divider} from '@components'
import {TITLE} from '@config/constant'
import {CurrencyInfo} from './components';
import {convertCurrency} from '@utils/helpers'


type Props = {}

const Home = (props: Props) => {
  const [baseAmount, setBaseAmount] = useState("0");
  const [calculatedAmount, setCalculatedAmount] = useState("0");
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');

  const handleOnChangeText = (text: string, inputType?: 'from' | 'to') => {
    const amount = text ? parseFloat(text) : 0;
    if(inputType === 'from'){
      setBaseAmount(text);
      setCalculatedAmount(convertCurrency(amount, fromCurrency, toCurrency))
    } else {
      setCalculatedAmount(text),
      setBaseAmount(convertCurrency(amount, toCurrency, fromCurrency))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={TITLE.CURRENCY_CONVERTER}/>

      <TextInput
        style={{margin:20, fontSize: 30, fontWeight: 'condensedBold'}}
        placeholder='0'
        value={baseAmount}
        onChangeText={(e) => handleOnChangeText(e, 'from')}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <CurrencyInfo fromCurrency={fromCurrency} toCurrency={toCurrency}/>

      <Divider/>

      <TextInput
        style={{margin:20, fontSize: 30, fontWeight: 'condensedBold'}}
        placeholder='0'
        value={calculatedAmount}
        onChangeText={handleOnChangeText}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <CurrencyInfo fromCurrency={toCurrency} toCurrency={fromCurrency}/>

    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        margin:20,
        alignItems: 'center'
    }
})