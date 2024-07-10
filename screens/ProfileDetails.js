import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import { colours } from '../constants/colours';
import fonts from '../constants/fonts';
import Michael from '../assets/images/Michael.jpeg';
import Samantha from '../assets/images/Samantha.jpeg';
import Jaden from '../assets/images/Jaden.jpeg';
import Lara from '../assets/images/Lara.jpeg';
import Breanna from '../assets/images/Breanna.jpeg';
import Anderson from '../assets/images/Anderson.jpeg';

const ProfileDetails = ({ route, navigation }) => {

    const { name, image, rating, homeSold, num } = route.params;
    console.log(name, image, rating, homeSold, num);

    const ImgPath = (name) => {
        switch (name) {
            case 'Michael Lang':
                return Michael;
            case 'Samantha Williams':
                return Samantha;
            case 'Jaden Smith':
                return Jaden;
            case 'Lara Clark':
                return Lara;
            case 'Breanna Vanhoutem':
                return Breanna;
            case 'Will Anderson':
                return Anderson;
            default:
                return Michael;
        }
    }

    const DATA = [
        {
            id: '1',
            name: 'Bungalow House',
            imageUrl: require('../assets/images/3.png'),
            rating: '4.5',
            location: 'Jakarta, Indonesia',
            price: '$ 271'
        },
        {
            id: '2',
            name: 'Bridgeland Modern House',
            imageUrl: require('../assets/images/4.png'),
            rating: '4.0',
            location: 'Semarang, Indonesia',
            price: '$ 271'

        },
    ]

    const CommonCard = ({ name, imageUrl, rating, location, price }) => (
        <TouchableOpacity style={styles.item} activeOpacity={.8}>
            <ImageBackground source={imageUrl} style={styles.imageBackground} imageStyle={styles.image}>
                <Image style={{ height: 25, width: 25, marginLeft: 'auto', marginRight: "5%", marginTop: '5%' }} source={require('../assets/images/heart.png')} />
                {/* <Icon name="heart-outline" size={24} color="#fff" style={styles.heartIcon} /> */}
                <View style={{ height: 25, width: 72, backgroundColor: '#1F4C6B', borderRadius: 20, marginTop: 'auto', marginLeft: 'auto', marginBottom: '5%', marginRight: '5%', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 12, color: colours.white, fontFamily: fonts.LatoBold }}>{price}<Text style={{ fontSize: 6, fontFamily: fonts.LatoRegular }}>    /month</Text></Text>
                </View>
            </ImageBackground>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.infoRow}>
                <Image style={{ height: 9, width: 9 }} source={require('../assets/images/star.png')} />

                <Text style={styles.rating}>{rating}</Text>
                <Image resizeMode='contain' style={{ height: 9, width: 9 }} source={require('../assets/images/loc.png')} />

                <Text style={styles.location}>{location}</Text>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <ScrollView>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: '5%', marginTop: '5%' }}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image resizeMode='contain' style={{ height: 50, width: 50 }} source={require('../assets/images/Profile/back.png')} />
                    </TouchableOpacity>
                    <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoBold, fontSize: 14 }}>Profile</Text>

                    <TouchableOpacity>
                        <Image resizeMode='contain' style={{ height: 50, width: 50 }} source={require('../assets/images/Profile/share.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoBold, fontSize: 14, alignSelf: 'center', marginTop: '10%' }}>{name}</Text>
                <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoRegular, fontSize: 10, alignSelf: 'center', marginTop: '1%' }}>{name}.trust@email.com</Text>

                <Image style={{ height: 95, width: 95, alignSelf: 'center', marginTop: "2%", borderRadius: 95 / 2 }} source={ImgPath(name)} />
                <Image resizeMode='contain' style={{ height: 25, width: 25, position: 'relative', left: 200, bottom: 24 }} source={require('../assets/images/Profile/1.png')} />

                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginHorizontal: '5%', marginTop: '8%' }}>
                    <View style={{ height: 70, width: '30%', backgroundColor: '#234F681C', borderRadius: 20, alignItems: 'center', justifyContent: "center" }}>
                        <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoBold, fontSize: 14, marginTop: '2%' }}>{rating}</Text>
                        <Image resizeMode='contain' style={{ height: 16, width: '89%', marginTop: '4%' }} source={require('../assets/images/Profile/stars.png')} />
                    </View>


                    <View style={{ height: 70, width: '30%', borderColor: '#234F681C', borderRadius: 20, alignItems: 'center', justifyContent: "center", borderWidth: 1 }}>
                        <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoBold, fontSize: 14, marginTop: '2%' }}>235</Text>
                        <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoRegular, fontSize: 14, marginTop: '2%' }}>Reviews</Text>
                    </View>


                    <View style={{ height: 70, width: '30%', borderColor: '#234F681C', borderRadius: 20, alignItems: 'center', justifyContent: "center", borderWidth: 1 }}>
                        <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoBold, fontSize: 14, marginTop: '2%' }}>{homeSold}</Text>
                        <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoRegular, fontSize: 14, marginTop: '2%' }}>Sold</Text>
                    </View>
                </View>


                <ImageBackground resizeMode='contain' style={{ height: 50, width: '93%', alignSelf: 'center', marginTop: "2%" }} source={require('../assets/images/Profile/buttons.png')}>
                </ImageBackground>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '10%' }}>
                    <Text style={{ color: colours.typography_80, fontFamily: fonts.LatoRegular, fontSize: 14, marginTop: '2%', marginRight: "auto" }}><Text style={{ fontFamily: fonts.LatoRegular }}>140</Text> listings</Text>

                    <Image resizeMode='contain' style={{ height: 40, width: '63%', alignSelf: 'center', marginTop: "2%", left: 40 }} source={require('../assets/images/Profile/sidebutton.png')} />
                </View>

                {/* <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center' }}>
                    <Image resizeMode='contain' style={{ height: 249, width: '40%', marginRight: '5%' }} source={require('../assets/images/Profile/item1.png')} />
                    <Image resizeMode='contain' style={{ height: 249, width: '40%' }} source={require('../assets/images/Profile/item2.png')} />
                </View> */}

                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <CommonCard name={item.name} imageUrl={item.imageUrl} rating={item.rating} location={item.location} price={item.price} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />

                <TouchableOpacity style={{ height: 63, width: '90%', alignSelf: "center", alignItems: "center", justifyContent: 'center', backgroundColor: '#8BC83F' }}>
                    <Text style={{ color: colours.white, fontFamily: fonts.LatoBold, fontSize: 16 }}>Start Chat</Text>
                </TouchableOpacity>
                <View style={{ height: 20 }} />
            </ScrollView>

        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.app_background

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    // Add more styles as needed
    list: {
        paddingHorizontal: 10,
    },
    item: {
        height: 231,
        width: 160,
        margin: 5,
        backgroundColor: '#F5F4F8',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 1

    },
    imageBackground: {
        height: 160,
        width: 144,
        alignSelf: 'center',
        marginTop: "5%"
    },
    image: {
        width: 144,
        height: 160,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    name: {
        fontSize: 12,
        color: colours.typography_80,
        fontFamily: fonts.LatoBold,
        marginLeft: '8%',
        marginTop: "5%"

    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
        marginTop: '7%'
    },
    rating: {
        marginLeft: 5,
        marginRight: 15,
        fontSize: 8,
        color: colours.typography_80,
        fontFamily: fonts.LatoBold,

    },
    locationIcon: {
        marginLeft: 10,
    },
    location: {
        marginLeft: 5,
        marginRight: 15,
        fontSize: 8,
        color: colours.typography_80,
        fontFamily: fonts.LatoRegular,
    },
});

export default ProfileDetails;
