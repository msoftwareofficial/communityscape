import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Chicago from '../assets/images/Chicago.jpeg';
import FText from './Ftext';
import { colours } from '../constants/colours';

const ArchitectTile = ({ architect, onPress }) => {

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={architect.image} style={styles.image} />
      <View style={styles.numberBadge}>
        <Text style={styles.numberText}>{`#${architect.number}`}</Text>
      </View>
      <FText color={colours.typography_60} fontSize="small" style={styles.architectName}>{architect.name}</FText>
      <View style={styles.bottomView}>
        <View style={styles.ratingView}>
          <Image source={require('../assets/images/star.png')} style={styles.star} />
          <FText color={colours.typography_60} fontSize="small" style={styles.rating}>{architect.rating}</FText>
        </View>
        <View style={styles.soldView}>
          <Image source={require('../assets/images/arcHome.png')} style={styles.location} />
          <FText color={colours.typography_60} fontSize="small" style={styles.locationText}>{architect.homeSold}</FText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArchitectTile;

const styles = StyleSheet.create({
  itemContainer: {
    margin: 8,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 3, // for Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 200,
    width: '45%',
    padding: 20
  },
  image: {
    width: '50%',
    height: 90,
    borderRadius: 90,
    width: 90
  },
  numberBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#7DCE82',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  numberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  architectName: {
    color: colours.typography_60,
    marginVertical: 8,
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 0

  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10
  },
  ratingView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  star: {
    width: 12,
    height: 12
  },
  rating: {
    color: colours.typography_60,
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '700'
  },
  location: {
    width: 12,
    height: 12
  },
  locationText: {
    color: colours.typography_60,
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 5
  },
  soldView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10
  }

});



