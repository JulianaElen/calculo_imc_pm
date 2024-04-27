import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Tela3(props) {
  return (
    <View>
      <Text>Resultado</Text>
      <Button
        title='Início'
        onPress={() => props.navigation.navigate("TelaInicial")}
        color={'green'} />
    </View>
  )
}