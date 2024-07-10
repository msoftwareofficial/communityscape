import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FText from "../components/Ftext";
import { colours } from "../constants/colours";
import DropDownPicker from "react-native-dropdown-picker";

const Homescreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [dropdownValue, setDropdownValue] = useState("jakarta");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const ImgPath = "../assets/images/Home/";
  const TabData = [
    "All",
    "House",
    "Apartment",
    "Villa",
    "Office",
    "Hotel",
    "Restaurant",
    "Cafe",
    "Bar",
    "Shop",
  ];

  const DropDownPickerView = () => (
    <DropDownPicker
      items={[
        { label: "Jakarta, Indonesia", value: "jakarta" },
        { label: "New York, USA", value: "new_york" },
        { label: "Paris, France", value: "paris" },
        { label: "Tokyo, Japan", value: "tokyo" },
        { label: "London, UK", value: "london" },
        { label: "Berlin, Germany", value: "berlin" },
        { label: "Sydney, Australia", value: "sydney" },
        { label: "Toronto, Canada", value: "toronto" },
      ]}
      open={dropdownOpen}
      value={dropdownValue}
      setOpen={setDropdownOpen}
      setValue={setDropdownValue}
      defaultValue={"jakarta"}
      containerStyle={{ height: 40, width: "100%" }}
      style={{
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        borderColor: "transparent",
      }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        zIndex: 999,
        elevation: 999,
      }}
      onChangeItem={(item) => setDropdownValue(item.value)}
    />
  );

  const SuggestionView = () => (
    <TouchableOpacity style={styles.suggestionView} activeOpacity={0.8}>
      <View style={styles.imgShadow} />
      <Image
        source={require(ImgPath + "suggestion.png")}
        style={{ width: 280, height: 200, marginTop: 20 }}
        resizeMode="contain"
      />
      <View style={{ position: "absolute", top: 46, left: 20, zIndex: 9 }}>
        <FText
          fontSize="h6"
          fontWeight="900"
          color={colours.secondary}
          style={{ marginTop: 20 }}
        >
          Get Location Suggestion
        </FText>
        {/* <FText fontSize="medium" fontWeight="400" color={colours.secondary} style={{ marginTop: 15 }}>All discount up to 60%</FText> */}
      </View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 6,
          left: 0,
          backgroundColor: colours.primary,
          paddingVertical: 8,
          paddingHorizontal: 26,
          zIndex: 9,
          borderTopRightRadius: 20,
        }}
        activeOpacity={0.8}
      >
        <Image
          source={require(ImgPath + "arrow.png")}
          style={{ width: 30, height: 30, resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const FeaturedCard = () => (
    <TouchableOpacity style={styles.featuredCard} activeOpacity={0.8}>
      <Image
        source={require(ImgPath + "Featured.png")}
        style={styles.featureImg}
      />
      <Image
        source={require(ImgPath + "fillHeart.png")}
        style={styles.heartImg}
      />
      <View style={styles.tagView}>
        <FText fontSize="small" fontWeight="400" color={colours.secondary}>
          Apartment
        </FText>
      </View>
      <View style={styles.featuretextView}>
        <FText
          fontSize="medium"
          fontWeight="700"
          color={colours.typography_80}
          style={{ marginTop: 4 }}
        >
          Sky Dandelions{"\n"}Apartment
        </FText>
        <View style={styles.ratingView}>
          <Image source={require(ImgPath + "star.png")} style={styles.rating} />
          <FText
            fontSize="small"
            fontWeight="700"
            color={colours.typography_80}
          >
            4.5
          </FText>
        </View>
        <View style={styles.locationView}>
          <Image
            source={require(ImgPath + "location.png")}
            style={styles.location}
          />
          <FText
            fontSize="small"
            fontWeight="400"
            color={colours.typography_80}
          >
            Jakarta, Indonesia
          </FText>
        </View>
        <FText
          fontSize="medium"
          fontWeight="700"
          color={colours.typography_80}
          style={{ marginTop: 10 }}
        >
          $ 290{" "}
          <FText
            fontSize="small"
            fontWeight="400"
            color={colours.typography_80}
          >
            /month
          </FText>
        </FText>
      </View>
    </TouchableOpacity>
  );

  const TopLocationCard = () => (
    <TouchableOpacity style={styles.topLocationView} activeOpacity={0.8}>
      <Image
        source={require(ImgPath + "topLocation.png")}
        style={styles.topLoactionImg}
      />
      <FText
        fontSize="medium"
        fontWeight="700"
        color={colours.typography_80}
        style={{ marginBottom: 2 }}
      >
        Bali
      </FText>
    </TouchableOpacity>
  );

  const TopArchitectCard = () => (
    <TouchableOpacity style={styles.architectsView} activeOpacity={0.8}>
      <View style={styles.architectsImgView}>
        <Image
          source={require(ImgPath + "architects1.png")}
          style={styles.architectsImg}
        />
      </View>
      <FText
        fontSize="medium"
        fontWeight="700"
        color={colours.typography_80}
        style={{ marginTop: 10 }}
      >
        Amanda
      </FText>
    </TouchableOpacity>
  );

  const NearByCard = () => (
    <View style={styles.nearByView}>
      <Image
        source={require(ImgPath + "nearbyEstates.png")}
        style={styles.nearByImg}
      />
      <Image
        source={require(ImgPath + "fillHeart.png")}
        style={styles.heartnearImg}
      />
      <View style={styles.tagnearView}>
        <FText fontSize="small" fontWeight="900" color={colours.secondary}>
          $ 220
          <FText fontSize="small" fontWeight="400" color={colours.secondary}>
            /month
          </FText>
        </FText>
      </View>
      <FText
        fontSize="medium"
        fontWeight="700"
        color={colours.typography_80}
        style={{ marginTop: 14, marginLeft: 16 }}
      >
        Wings Tower
      </FText>
      <View style={styles.rateingandLocation}>
        <View style={styles.ratingView}>
          <Image source={require(ImgPath + "star.png")} style={styles.rating} />
          <FText
            fontSize="small"
            fontWeight="700"
            color={colours.typography_80}
          >
            4.5
          </FText>
        </View>
        <View
          style={{ ...styles.locationView, marginBottom: 0, marginLeft: 4 }}
        >
          <Image
            source={require(ImgPath + "location.png")}
            style={styles.location}
          />
          <FText
            fontSize="small"
            fontWeight="400"
            color={colours.typography_80}
          >
            Jakarta
          </FText>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.dataContainer}>
          <View style={styles.headerSection}>
            <View style={styles.dropDownView}>
              <DropDownPickerView />
            </View>
            <View style={styles.profileView}>
              <View style={styles.notificationView}>
                <Image
                  source={require(ImgPath + "notification.png")}
                  style={styles.notification}
                />
              </View>
              <View style={styles.personView}>
                <Image
                  source={require(ImgPath + "personImg.png")}
                  style={styles.person}
                />
              </View>
            </View>
          </View>
          <FText
            fontSize="h5"
            fontWeight="700"
            color={colours.typography_80}
            style={{ marginTop: 10, zIndex: -1 }}
          >
            Hey,{" "}
            <FText fontSize="h5" fontWeight="900" color={colours.primary}>
              Jonathan!
            </FText>
            {"\n"}Let's start exploring
          </FText>
          <View style={styles.searchView}>
            <Image
              source={require(ImgPath + "search.png")}
              style={{ width: 20, height: 20 }}
            />
            <TextInput
              placeholder="Search House, Apartment, etc"
              placeholderTextColor={"#A1A5C1"}
              style={{ flex: 1, marginLeft: 2 }}
            />
            <View style={styles.verticalLine} />
            <Image
              source={require(ImgPath + "mic.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              zIndex: -1,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {TabData.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => setActiveTab(index)}
                    style={{
                      backgroundColor:
                        activeTab === index ? colours.primary : "transparent",
                      paddingHorizontal: 25,
                      paddingVertical: 8,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: 10,
                    }}
                  >
                    <FText
                      key={index}
                      fontSize="medium"
                      fontWeight="400"
                      color={
                        activeTab === index
                          ? colours.secondary
                          : colours.typography_80
                      }
                    >
                      {item}
                    </FText>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SuggestionView key={index} />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <FText fontSize="h6" fontWeight="900" color={colours.typography_80}>
              Featured Estates
            </FText>
            <FText fontSize="small" fontWeight="400" color={colours.primary}>
              View All
            </FText>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <FeaturedCard key={index} />
              ))}
            </ScrollView>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <FText fontSize="h6" fontWeight="900" color={colours.typography_80}>
              Top Locations
            </FText>
            <FText
              fontSize="small"
              fontWeight="400"
              color={colours.primary}
              onPress={() => navigation.navigate("TopLocations")}
            >
              explore
            </FText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <TopLocationCard key={index} />
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <FText fontSize="h6" fontWeight="900" color={colours.typography_80}>
              Top Architects
            </FText>
            <FText
              fontSize="small"
              fontWeight="400"
              color={colours.primary}
              onPress={() => navigation.navigate("TopArchitects")}
            >
              explore
            </FText>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 16,
            }}
          >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <TopArchitectCard key={index} />
              ))}
            </ScrollView>
          </View>
          <FText
            fontSize="h6"
            fontWeight="900"
            color={colours.typography_80}
            style={{ marginTop: 20 }}
          >
            Explore Nearby Estates
          </FText>

          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <NearByCard />}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            columnWrapperStyle={{ justifyContent: "space-between" }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  dataContainer: {
    flex: 1,
    marginHorizontal: "4%",
  },
  headerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
  },
  dropDownView: {
    backgroundColor: "#F2F2F2",
    width: "50%",
    height: 50,
    borderRadius: 25,
  },
  profileView: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "flex-end",
  },
  notificationView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  personView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderColor: "#DFDFDF",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  notification: {
    width: 22,
    height: 22,
  },
  person: {
    width: 42,
    height: 42,
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F4F8",
    height: 60,
    borderRadius: 2,
    marginTop: 20,
    paddingHorizontal: 10,
    zIndex: -1,
  },
  verticalLine: {
    height: 30,
    width: 1,
    backgroundColor: "#DFDFDF",
    marginHorizontal: 10,
  },
  suggestionView: {
    marginRight: 20,
  },
  imgShadow: {
    position: "absolute",
    width: 277,
    height: 189,
    backgroundColor: "#000",
    opacity: 0.2,
    borderRadius: 30,
    marginTop: 26,
    zIndex: 1,
  },
  featuredCard: {
    width: 265,
    height: 180,
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  featureImg: {
    width: 120,
    height: "88%",
    borderRadius: 20,
    resizeMode: "cover",
    marginLeft: 6,
  },
  heartImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    top: 20,
    left: 12,
  },
  tagView: {
    position: "absolute",
    bottom: 20,
    left: 12,
    backgroundColor: colours.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 18,
  },
  rating: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  location: {
    width: 14,
    height: 14,
    resizeMode: "contain",
  },
  featuretextView: {
    alignItems: "flex-start",
    marginLeft: 10,
  },
  topLocationView: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F4F8",
    paddingLeft: 6,
    paddingRight: 20,
    borderRadius: 180,
    marginRight: 10,
  },
  topLoactionImg: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    marginTop: 10,
    resizeMode: "contain",
  },
  architectsView: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    padding: 5,
  },
  architectsImgView: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#F5F4F8",
    alignItems: "center",
    justifyContent: "center",
  },
  architectsImg: {
    width: 90,
    height: 90,
    borderRadius: 40,
    resizeMode: "contain",
  },
  nearByView: {
    width: "48%",
    height: 240,
    backgroundColor: "#F5F4F8",
    borderRadius: 20,
    marginTop: 20,
  },
  nearByImg: {
    width: "94%",
    height: "66%",
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: 6,
  },
  rateingandLocation: {
    marginTop: 4,
    flexDirection: "row",
    marginLeft: 16,
  },
  heartnearImg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    top: 15,
    right: 14,
  },
  tagnearView: {
    position: "absolute",
    bottom: "36%",
    right: 14,
    backgroundColor: colours.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
