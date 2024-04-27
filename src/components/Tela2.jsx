import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'

export default function Tela2(props) {
  return (
    <View>
      <Text>Altura</Text>
      <TextInput
        //  onChangeText={}
        placeholder="dica"
        keyboardType="numeric"
        inputMode='numeric'
      />
      <Text>Peso</Text>
      <TextInput
        //  onChangeText={}
        placeholder="dica"
        keyboardType="numeric"
        inputMode='numeric'
      />
      <Button
        title='Calcular'
        onPress={() => props.navigation.navigate("TelaResultado")}
        color={'green'} />
    </View>
  )
}