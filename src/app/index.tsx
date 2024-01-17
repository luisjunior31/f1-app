import {  FlatList,  StyleSheet, View } from 'react-native';
import racesRes from '../../assets/data/races.json'
import RaceListItem from '../components/RaceListItem';
import dayjs from "dayjs";
import { Link, Stack } from 'expo-router';


const races = racesRes.data.races.response



export default function HomeScreen() {
 
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
