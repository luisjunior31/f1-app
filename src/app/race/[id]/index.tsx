import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const RaceDetail = () => {

  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>RaceDetail: {id}</Text>
    </View>
  )
}

export default RaceDetail