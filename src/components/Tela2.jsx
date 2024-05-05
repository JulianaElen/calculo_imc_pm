import { View, Text, Button, TextInput, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Tela2(props) {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(0);

  useEffect( () => {
    if((parseFloat(peso) > 0) && parseFloat(altura) > 0){
      let calc = peso / (altura*altura);
      setImc(calc);
    }
  }, [peso, altura]);

  function confirmarImc() {
    if(imc > 0) {
      props.navigation.navigate("TelaResultado", {valorImc: imc})
    } else {
      Alert.alert("Digite peso e altura antes de calcular.")
    }
  }

  return (
    <View>
      <Text>Altura</Text>
      <TextInput
        onChangeText={(valor) => {setAltura(valor)}}
        placeholder="dica"
        keyboardType="numeric"
        inputMode='numeric'
      />
      <Text>Peso</Text>
      <TextInput
        onChangeText={(valor) => {setPeso(valor)}}
        placeholder="dica"
        keyboardType="numeric"
        inputMode='numeric'
      />
      <Button
        title='Calcular'
        onPress={() => confirmarImc()}
        color={'green'} />
    </View>
  )
}