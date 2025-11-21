import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const DetailScreen = ({route, navigation}: any) => {
  const { product } = route.params;
  
  return (
    <ScrollView className="flex-1 bg-gray-50 p-5">
      <View className="flex-1 justify-center items-center p-6  mb-6">
        <Image
          source={{ uri: product.image }}
          className="w-full h-80 rounded-xl"
          resizeMode="cover"
        />
        <Text className="text-4xl font-bold text-gray-800 mt-4">{product.name}</Text>
        <Text className="text-sm font-bold text-blue-600 bg-blue-200 mt-4 border border-blue-600 rounded-lg px-5 py-1">{product.category}</Text>
      </View>
      <View className="mb-6">
        <Text className="text-xl font-semibold text-gray-700">รายละเอียดสินค้า</Text>
        <Text className="text-sm text-gray-600 mt-2">{product.description || 'ไม่มีคำอธิบายเพิ่มเติม'}</Text>
        <Text className="text-sm text-gray-600 mt-2">{product.features || 'ไม่มีฟีเจอร์พิเศษ'}</Text>
    
      </View>
      <View className="mb-6">
        <Text className="text-2xl font-bold text-blue-500">฿{product.price}</Text>
      </View>
      <TouchableOpacity
        onPress={() => alert('หมดทุกอย่างจ้า')}
        className="bg-blue-500 p-4 rounded-lg"
      >
        <Text className="text-white text-center text-lg font-semibold">เพิ่มลงตะกร้า</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="mt-6 p-3 border border-blue-500 rounded-lg"
      >
        <Text className="text-blue-500 text-center text-lg">กลับ</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default DetailScreen
