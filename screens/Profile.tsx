import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-5">
      <View className="items-center mt-16">
        <Image
          className="w-36 h-36 rounded-full border-4 border-white shadow-md"
          source={{
            uri: "https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png",
          }}
        />
        <Text className="text-3xl font-bold mt-4">Your profile</Text>
        <Text className="text-gray-500 text-lg mt-1">รายละเอียดเกี่ยวกับคุณ</Text>

        <View className="w-full bg-white p-5 mt-6 rounded-2xl shadow">
          <Text className="text-xl font-semibold mb-3">ข้อมูลส่วนตัว</Text>
          <View className="py-2">
            <Text className="text-gray-600">Name</Text>
            <Text className="font-medium">nattapong56</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Lastname</Text>
            <Text className="font-medium">yaimakmak</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Email</Text>
            <Text className="font-medium">nattapong56@gmail.com</Text>
          </View>
          <View className="py-2">
            <Text className="text-gray-600">Address</Text>
            <Text className="font-medium">
              เลขที่ 128/45 ซอยสุขสันต์ 5 ถนนลาดพร้าว แขวงคลองเจ้าคุณสิงห์ เขตลาดพร้าว กรุงเทพมหานคร 10310
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
