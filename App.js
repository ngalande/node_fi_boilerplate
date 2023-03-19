/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  NativeModules,
  NativeEventEmitter
} from 'react-native';

import { Colors} from 'react-native/Libraries/NewAppScreen';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, } from '@ui-kitten/components';
import {NodeKitProvider} from '@node-fi/react-native-sdk';
import {ChainId} from '@node-fi/chain-config';
import { useCreateWallet, useWallet, useWalletAddress } from "@node-fi/react-native-sdk";



export default function App(props){
  const createWallet = useCreateWallet();
  const isDarkMode = useColorScheme() === 'dark';
  const API_KEY = "key"
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

 

  const test = () => {
    createWallet()
      .then((res) =>{
        console.log(res.address)
        return
      })
      .catch(err => {
        console.log(err)
      })
    console.log('walletAddress')
  }

  return (
    <>
    <NodeKitProvider
      apiKey={API_KEY}
      chainId={ChainId.Celo}
    >
      <View>
        <Text>Pappi B</Text>
      </View>
      <View>
        <Button onPress={() => test()} title='Test' />
      </View>
    </NodeKitProvider>
</>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


