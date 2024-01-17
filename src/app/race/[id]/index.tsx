import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { gql, useQuery } from '@apollo/client'


const query = gql`
  query MyQuery($season: String, $competition: String) {
  races(season: $season, competition: $competition) {
    response {
      id
      date
      season
      circuit {
        id
        image
        name
      }
      competition {
        name
        location {
          country
        }
      }
    }
  }
}
`


const RaceDetail = () => {

  const { id } = useLocalSearchParams()

  const { data, loading } = useQuery(query, {
    variables: { id: id }
  })


  if (loading) {
    return <ActivityIndicator />
  }

  const race = data.races.response[0]

  if (!race) {
    return <Text>race not founded!!</Text>
  }


  return (
    <View style={styles.page}>
      <Text style={{
        fontSize: 22,
        fontFamily: 'F1-Regular'
      }}>
       <Text style={{ fontFamily: 'F1-Bold' }}>
        {
          race.competition.location.country 
        }
        {' '}
       </Text>

        {race.season}
        </Text>

        <Text>
          {race.circuit.name}
        </Text>

        <Image
         source={{ uri: race.circuit.image }}
         style={styles.img}
         resizeMode='contain'
         />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 10
  },
  img: {
    width: '100%',
    aspectRatio: 16 / 9,
    marginVertical: 15
  }
})

export default RaceDetail