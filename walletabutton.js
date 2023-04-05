import { useCreateWallet, useWallet, useWalletAddress } from "@node-fi/react-native-sdk";
import { TouchableOpacity, Text, Button } from "react-native";

export default function WalletButton(){
    const createWallet = useCreateWallet();
    const test = () => {
      console.log('second')
      // const account = ethers.Wallet.createRandom()
      // console.log(account.address)
        createWallet()
          .then((res) =>{
            console.log(res.address)
            console.log('walletAddress')
            
          })
          .catch(err => {
            console.log("Errors: ",err)
            // console.log('walletAddress')
          })
      }

      return(
        
        <Button
            onPress={()=> test()}
            title='Text'
            />
                
      )
}