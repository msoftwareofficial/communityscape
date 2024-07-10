import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../components/BackButtons';
import FText, { FontWeights } from '../components/Ftext';
import { colours } from '../constants/colours';
import LocationTile from '../components/LocationTile';
import Chicago from '../assets/images/Chicago.jpeg';
import Miami from '../assets/images/miami.jpeg';
import NewYork from '../assets/images/NewYork.jpeg';
import LasVegas from '../assets/images/LasVegas.jpeg';
import LA from '../assets/images/LA.jpeg';
import Washington from '../assets/images/Washington.jpeg';
import { useNavigation } from '@react-navigation/native';


import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';



const TopLocations = () => {

    const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('LocationDetails');
  };
    const locations = [
        { number: 1, name: 'Chicago', image: Chicago },
        {number: 2, name: 'Miami', image: Miami},
        {number: 3, name: 'New York', image: NewYork},
    {number: 4, name: 'Las Vegas', image: LasVegas},
    {number: 5, name: 'Los Angeles', image: LA},
    {number: 6, name: 'Washington', image: Washington}
        
    ]

    
    return(
    <ScrollView> 
        <BackButton/>
        <FText color={colours.typography_60} fontSize='h3' style={styles.heading}> Top Locations </FText>
        <FText color={colours.typography_60} fontSize='small' style={{marginLeft: 30}}> Find the best places to live </FText>

<View style={{ marginHorizontal: '4%', marginTop: 20 }}>
                <FlatList
                    data={locations}
                    keyExtractor={(item) => item.number.toString()}
                    renderItem={({ item }) => <LocationTile location={item}
                        onPress={() => navigation.navigate('LocationDetails', { name: item.name, image: item.image,num: item.number })}
                    />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </View>

        
    </ScrollView>
    )
}

export default TopLocations;

const styles = StyleSheet.create({
    heading: {
        fontWeight:700,
        marginTop: 120,
        marginLeft: 20
    },
    tilesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginLeft: 20,
        width: "50%",
        marginRight: 30
        
      },
    //   flatListContent: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-around',
    //     marginTop: 20,
    //     width: "40%"
       
    //   },
})

