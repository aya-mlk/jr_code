import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

const index = () => {
  return (
    <ImageBackground soruce={require("../../assets/adventureBg.png")}>
      <View>
        <Text>HELLO</Text>
      </View>
    </ImageBackground>
  )
}

export default index