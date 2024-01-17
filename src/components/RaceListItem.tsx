import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors }  from '../Constants/Colors'
import racesRes from '../../assets/data/races.json'
import dayjs from 'dayjs'
import { Link } from 'expo-router';


const races = racesRes.data.races.response

export default function RaceListItem({ 
  item,
  round
 }: {
   item: (typeof races[0])
   round: number
  }) {
    return (
      <Link href={`/race/${item.id}`}asChild>
        <Pressable style={styles.itemCont}>
          <View style={styles.dateCont}>
            <Text style={styles.date}>
              {dayjs(item.date).subtract(2, 'days').format('DD')}
              -{dayjs(item.date).format('DD')}
            </Text>
            <Text style={styles.month}>
              {dayjs(item.date).format('MMM')}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.round}>Round {round}</Text>
            <Text style={styles.contry}>{item.competition.location.country}</Text>
            <Text style={styles.descript}>
              F1 racing {item.competition.name} {item.season}
            </Text>
          </View>

          <Entypo name="chevron-right" size={24} color={Colors.primary} />
        </Pressable>
      </Link>
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
    date: {
      fontFamily: 'F1-Regular'
    },
    month: {
      backgroundColor: 'gainsboro',
      paddingVertical: 3,
      paddingHorizontal: 10,
  
  
      borderRadius: 10,
      overflow: 'hidden',
  
  
      color: 'dimgray',
      fontWeight: 'bold',
      marginTop: 5,

      fontFamily: 'F1-Bold'
    },
    round: {
      color: Colors.primary,
      fontFamily: 'F1-Regular'
    },
    contry: {
      fontSize: 18,
      fontFamily: 'F1-Bold',
      marginVertical: 7
    },
    descript: {
      color: 'darkgray'
    }
  });