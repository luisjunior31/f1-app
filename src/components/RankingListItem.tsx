import { Image, StyleSheet, Text, View } from "react-native";
import raceRankingResponse from '../../assets/data/race-rankings.json'

const raceRanking = raceRankingResponse.data.raceRankings.response

type RankingListItemProps = {
    item: (typeof raceRanking[0])
}

export default function RankingListItem({
    item 
}: RankingListItemProps) {
    return (
      <View style={styles.contain}>
        <Text style={styles.position}>
            {item.position}
        </Text>

          <Image
          source={{ uri: item.driver.image }}
          style={styles.driverImg}
          />

            <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                    {item.driver.name}
                </Text>

                <Text>
                    {item.team.name}
                </Text>
            </View>

         <Text style={styles.time}>
            {item.time}
         </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        backgroundColor: 'white',
        paddingHorizontal: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,

        

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    position: {
        fontFamily: 'F1-Wide',
        width: 40,
        textAlign: 'center'
    },
    name: {
        fontFamily: 'F1-Bold',
        marginBottom: 5
    },
    time: {
      fontSize: 12,
      backgroundColor: 'gainsboro',
      paddingVertical: 3,
      paddingHorizontal: 10,
  
  
      borderRadius: 10,
      overflow: 'hidden',
  
  
      color: 'dimgray',
      fontWeight: "500",
      marginTop: 5,
    },
    driverImg: {
        height: 60,
        aspectRatio: 1,
        marginRight: 10,
    }
})