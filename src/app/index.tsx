import {  ActivityIndicator, FlatList,  StyleSheet, Text, View } from 'react-native';
import RaceListItem from '../components/RaceListItem';
import dayjs from "dayjs";
import { gql, useQuery } from '@apollo/client';


const query = gql`
  query MyQuery($season: String, $competition: String) {
  races(season: $season, competition: $competition) {
    response {
      id
      date
      season
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



export default function HomeScreen() {

  const { data, loading, error } = useQuery(query, {
    variables: { season: "2023", competition: "23" }
  })
 
  if (loading) {
    return <ActivityIndicator />
  }

  if (error) {
   return <Text>error to fetch races: {error.message}</Text>
  }

  const races = [...data.races.response]

  console.log(JSON.stringify(data, null, 2))


  const sortedRace = races.sort((r1, r2) => 
   dayjs(r2.date).diff(dayjs(r1.date))
  )

  return (
    <View style={styles.container}>
      <FlatList
      data={sortedRace}
      renderItem={({ item, index }) => (
         <RaceListItem item={item} round={sortedRace.length - index} />
      )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
