import { ScrollView, Image, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className='bg-gray-50'>
      <View className='flex items-center justify-center h-screen'>
        <Text className='text-4xl font-bold'>โปรไฟล์ของคุณ</Text>
        <Image className='w-full' source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png"}} />
      </View>
    </View>
  )
}

export default Profile
