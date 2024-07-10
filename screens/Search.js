import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, TextInput, FlatList } from 'react-native';
import { colours } from '../constants/colours';
import fonts from '../constants/fonts';

const Profile = () => {
  const [search, setSearch] = useState('')

  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearch(text);
    const newData = DATA.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setFilteredData(newData);
  };

console.log(filteredData?.length)


  const DATA = [
    {
      id: '1',
      name: 'Bungalow House',
      imageUrl: require('../assets/images/3.png'),
      rating: '4.5',
      location: 'Jakarta, Indonesia',
      price :'$ 271'
    },
    {
      id: '2',
      name: 'Bridgeland Modern House',
      imageUrl: require('../assets/images/4.png'),
      rating: '4.0',
      location: 'Semarang, Indonesia',
      price :'$ 271'

    },
    {
      id: 'Mill Sper House',
      name: 'Mill Sper House',
      imageUrl: require('../assets/images/1.png'),
      rating: '4.5',
      location: 'Jakarta, Indonesia',
      price :'$ 271'

    },
    {
      id: '2',
      name: 'Flower Heaven Appartment',
      imageUrl: require('../assets/images/2.png'),
      rating: '4.0',
      location: 'Bali, Indonesia',
      price :'$ 271'

    },
  ];
  
  const Item = ({ name, imageUrl, rating, location,price }) => (
    <View style={styles.item}>
      <ImageBackground source={ imageUrl } style={styles.imageBackground} imageStyle={styles.image}>
        <Image style={{height:25,width:25,marginLeft:'auto',marginRight:"5%",marginTop:'5%'}} source={require('../assets/images/heart.png')}/>
        {/* <Icon name="heart-outline" size={24} color="#fff" style={styles.heartIcon} /> */}
        <View style={{height:25,width:72,backgroundColor:'#1F4C6B',borderRadius:20,marginTop:'auto',marginLeft:'auto',marginBottom:'5%',marginRight:'5%',alignItems:'center',justifyContent:'center'}}>
<Text style={{fontSize:12,color:colours.white,fontFamily:fonts.LatoBold}}>{price}<Text style={{fontSize:6,fontFamily:fonts.LatoRegular}}>    /month</Text></Text>
        </View>
      </ImageBackground>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoRow}>
      <Image style={{height:9,width:9}} source={require('../assets/images/star.png')}/>
  
        <Text style={styles.rating}>{rating}</Text>
        <Image resizeMode='contain' style={{height:9,width:9}} source={require('../assets/images/loc.png')}/>

        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
<ScrollView>

      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:'5%',marginTop:'5%'}}>

<TouchableOpacity>
<Image resizeMode='contain' style={{height:50,width:50}} source={require('../assets/images/Profile/back.png')}/>
</TouchableOpacity>
<Text style={{color:colours.typography_80,fontFamily:fonts.LatoBold,fontSize:14}}>Search results</Text>

<TouchableOpacity>
<Image resizeMode='contain' style={{height:50,width:50}} source={require('../assets/images/Profile/share.png')}/>
</TouchableOpacity>
      </View>
  
<View style={{height:55,backgroundColor:'#f5f4f8',elevation:2,width:'90%',alignSelf:'center',borderRadius:20,flexDirection:'row',alignItems:"center",marginTop:'5%'}}>
<TextInput   value={search}
        onChangeText={handleSearch} style={{width:'85%',color:'black'}}/>
<Image style={{height:20,width:20}} source={require('../assets/images/Search/search.png')}/>
</View>

<View style={{flexDirection:'row',alignItems:'center',marginLeft:'10%'}}>
<Text style={{color:colours.typography_80,fontFamily:fonts.LatoRegular,fontSize:14,marginTop:'2%',marginRight:"auto"}}><Text style={{fontFamily:fonts.LatoRegular}}>Found {filteredData?.length == undefined ? '0' : filteredData?.length}</Text> estates</Text>

<Image resizeMode='contain' style={{height:40,width:'63%',alignSelf:'center',marginTop:"2%",left:40}} source={require('../assets/images/Profile/sidebutton.png')}/>
</View>





{
  filteredData?.length == 0 ||  filteredData?.length == undefined ? (
    <View style={{alignItems:'center',marginTop:'30%'}}>
    <Image style={{height:142,width:142}} source={require('../assets/images/Search/no.png')}/>
<Text style={{color:colours.typography_80,fontFamily:fonts.LatoBold,fontSize:25,marginTop:'5%'}}><Text style={{fontFamily:fonts.LatoRegular}}>Search</Text> not found </Text>
<Text style={{color:colours.typography_80,fontFamily:fonts.LatoRegular,fontSize:12,marginTop:'5%',width:"80%",textAlign:'center'}}>Sorry, we can’t find the real estates you are looking for. Maybe, a little spelling mistake?</Text>


  </View>

  ):(
<View> 
<FlatList
    data={filteredData}
    renderItem={({ item }) => (
      <Item
        name={item.name}
        imageUrl={item.imageUrl}
        rating={item.rating}
        location={item.location}
        price ={item.price}
      />
    )}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={styles.list}
  />
</View>
  )
}
<View style={{height:20}}/>
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colours.app_background

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 10,
  },
  item: {
height:231,
width:160,
    margin: 5,
    backgroundColor: '#F5F4F8',
    borderRadius: 10,
    overflow: 'hidden',
    elevation:1

  },
  imageBackground: {
    height: 160,
    width:144,
    alignSelf:'center',
    marginTop:"5%"
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
    color:colours.typography_80,
    fontFamily:fonts.LatoBold,
    marginLeft:'8%',
    marginTop:"5%"

  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop:'7%'
  },
  rating: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 8,
    color:colours.typography_80,
    fontFamily:fonts.LatoBold,

  },
  locationIcon: {
    marginLeft: 10,
  },
  location: {
    marginLeft: 5,
    marginRight: 15,
    fontSize: 8,
    color:colours.typography_80,
    fontFamily:fonts.LatoRegular,
  },
});

export default Profile;

