import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BackButton from '../components/BackButtons';
import FText, { FontWeights } from '../components/Ftext';
import { colours } from '../constants/colours';
import { ScrollView } from 'react-native';
import Michael from '../assets/images/Michael.jpeg';
import Samantha from '../assets/images/Samantha.jpeg';
import Jaden from '../assets/images/Jaden.jpeg';
import Lara from '../assets/images/Lara.jpeg';
import Breanna from '../assets/images/Breanna.jpeg';
import Anderson from '../assets/images/Anderson.jpeg';
import ArchitectTile from '../components/ArchitectTile';


const TopArchitects = ({ navigation }) => {

    const Architects = [{ number: 1, name: 'Michael Lang', image: Michael, rating: 4.7, homeSold: 455 },
    { number: 2, name: 'Samantha Williams', image: Samantha, rating: 4.5, homeSold: 400 },
    { number: 3, name: 'Jaden Smith', image: Jaden, rating: 4.7, homeSold: 455 },
    { number: 4, name: 'Lara Clark', image: Lara, rating: 4.5, homeSold: 410 },
    { number: 5, name: 'Breanna Vanhoutem', image: Breanna, rating: 4.7, homeSold: 465 },
    { number: 6, name: 'Will Anderson', image: Anderson, rating: 4.2, homeSold: 480 },
    ]
    return (
        <ScrollView style={{ flex: 1 }}>
            <BackButton />
            <FText color={colours.typography_60} fontSize='h3' style={styles.heading}> Top Architects </FText>
            <FText color={colours.typography_60} fontSize='small' style={{ marginLeft: 30 }}> Find the best architects through our platform </FText>
            <View style={{ marginHorizontal: '4%', marginTop: 20 }}>
                <FlatList
                    data={Architects}
                    keyExtractor={(item) => item.number.toString()}
                    renderItem={({ item }) => <ArchitectTile architect={item}
                        onPress={() => navigation.navigate('ProfileDetails', { name: item.name, image: item.image, rating: item.rating, homeSold: item.homeSold, num: item.number })}
                    />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                />
            </View>
        </ScrollView>
    )
}

export default TopArchitects;

const styles = StyleSheet.create({
    heading: {
        fontWeight: 700,
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
})