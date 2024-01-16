import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors }  from '../Constants/Colors'
import racesRes from '../../assets/data/races.json'


const races = racesRes.data.races.response

export default function RaceListItem({ item }: { item: (typeof races[0])}) {
    return (
      <View style={styles.itemCont}>
        <View style={styles.dateCont}>
          <Text style={styles.date}>12-06</Text>
          <Text style={styles.month}>JUN</Text>
        </View>
  
        <View style={{ flex: 1 }}>
          <Text style={styles.round}>Round 19</Text>
          <Text style={styles.contry}>{item.competition.location.country}</Text>
          <Text style={styles.descript}>F1 racing {item.competition.name} 2023</Text>
        </View>
        
        <Entypo name="chevron-right" size={24} color={Colors.primary}/>
      </View>
    )
  }



  const styles = StyleSheet.create({
    itemCont: {
      padding: 10,
      margin: 5,
      backgroundColor: 'whitesmoke',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
  
      shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  
  elevation: 7,
    },
    dateCont: {
       padding: 10,
       marginRight: 10,
       borderRightWidth: 1,
       borderColor: 'gainsboro',
       alignItems: 'center'
    },
    date: {},
    month: {
      backgroundColor: 'gainsboro',
      paddingVertical: 3,
      paddingHorizontal: 10,
  
  
      borderRadius: 10,
      overflow: 'hidden',
  
  
      color: 'dimgray',
      fontWeight: 'bold',
      marginTop: 5
    },
    round: {
      color: Colors.primary
    },
    contry: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    descript: {
      color: 'darkgray'
    }
  });