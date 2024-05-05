import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Tela3(props) {
  const { route } = props;
  const { valorImc } = route.params;
  const classificacao = getClassificacaoImc(valorImc);

  function getClassificacaoImc(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
      return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
      return "Obesidade grau I";
    } else if (imc >= 35 && imc < 40) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III";
    }
  }

  return (
    <View>
      <Text>Resultado</Text>
      <Text>Seu IMC é: {valorImc}</Text>
      <Text>Classificação: {classificacao}</Text>
      <Button
        title='Início'
        onPress={() => props.navigation.navigate("TelaInicial")}
        color={'green'} />
    </View>
  );
}
