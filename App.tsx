import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import racesRes from './assets/data/races.json'
import { Entypo } from '@expo/vector-icons';
import { Colors }  from './src/Constants/Colors'
import RaceListItem from './src/components/RaceListItem';


const races = racesRes.data.races.response




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={races}
      renderItem={({ item }) => (
         <RaceListItem item={item} />
      )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
