import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartScreen = () => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
      <View className='p-6'>
        <Text className='text-3xl font-bold'>My cart</Text>
      </View>
    </ScrollView>
  )
}

export default CartScreen

