import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Tela1 from './src/components/Tela1'
import Tela2 from './src/components/Tela2'
import Tela3 from './src/components/Tela3'

const navStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen 
        name='TelaInicial' 
        component={Tela1} 
        options={{
          title: 'Academia XTZ',
          headerTitleAlign: 'center'
        }}
        />
        <navStack.Screen 
        name='TelaDeCalculo' 
        component={Tela2} 
        options={{
          title: 'Calcule seu IMC',
          headerTitleAlign: 'center'
        }}
        />
        <navStack.Screen 
        name='TelaResultado' 
        component={Tela3} 
        options={{
          title: 'Resultado',
          headerTitleAlign: 'center'
        }}
        />
      </navStack.Navigator>
    </NavigationContainer>
  )
}