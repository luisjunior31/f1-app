import { Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import RankingListItem from '../../../components/RankingListItem'
import { useGlobalSearchParams } from 'expo-router'
import { gql, useQuery } from '@apollo/client'


const query = gql`
  query MyQuery($id: String!) {
  raceRankings(race: $id) {
    response {
      position
      time
      team {
        id
        name
      }
      driver {
        id
        image
        name
      }
    }
  }
}
`

const RaceRaking = () => {

  const { id } = useGlobalSearchParams()

  const { data, loading } = useQuery(query, {
    variables: { id: String(id) }
  })


  if (loading) {
    return <ActivityIndicator />
  }


  const raceRankings = data?.raceRankings?.response 

  console.log(data)

  if (!raceRankings) {
    return <Text>sorry is some wrong!!</Text>
  }

  return (
   <FlatList
   data={raceRankings}
   renderItem={({ item }) => 
   <RankingListItem item={item} />
  }
   />
  )
}

export default RaceRaking