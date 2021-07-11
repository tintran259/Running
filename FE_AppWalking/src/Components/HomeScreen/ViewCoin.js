// libs
import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

const ViewCoins = ({ coins, value, Styles, onPress, prices }) => {
  return (
    <View style={Styles.viewCoinsItems}>
      <Text style={Styles.textBrt}>Card {prices} VND</Text>
      <TouchableOpacity style={[Styles.BTNgIVE, `${coins}` !== value && { backgroundColor: '#dfe6e9' }]} disabled={`${coins}` !== value ? true : false} onPress={onPress}>
        <Text style={[Styles.colorBtn, `${coins}` !== value && { color: '#fff' }]}>{value} Coins</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ViewCoins