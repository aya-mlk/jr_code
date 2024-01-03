import React from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Link } from "expo-router"

function Home() {

  const categories = [{ image: require("../assets/categories/football.png"), title: "football" },
                      { image: require("../assets/categories/aventure.png"), title: "aventure" },
                      { image: require("../assets/categories/space.png"), title: "space" },
                      { image: require("../assets/categories/maths.png"), title: "mathematique" },
                      { image: require("../assets/categories/football.png"), title: "football" }]

  const adventureClick = () => {
    
  }
                      
  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}
    >

      <View style={styles.menuContainer}>
        <View style={styles.menuBox}>
          <FontAwesome5 name="bars" size={24} color="white" />
        </View>
      </View>

      <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            categories.map(({title, image}, index) => (
              <Link href="/adventures" key={index} style={index != 0 ? styles.scrollViewElement : ""}>
                <Image source={image} style={styles.image} />
                <Text style={styles.scrollText}>
                  {title}
                </Text>
              </Link>
            ))
          }
        </ScrollView>
      </View>

      <View style={styles.btnContainer}>
        <Pressable style={styles.btn}>
          <Text>Mes projets</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text>Tutoriels</Text>
        </Pressable>
      </View>

    </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    padding: 30,
    columnGap: 12,
    display: "flex"
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  menuBox: {
    backgroundColor: "#E0AAFF",
    padding: 10,
    borderRadius: "100",
    width: "auto"
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: "end",
   justifyContent: "end"
  },
  scrollViewElement: {
    marginLeft: 40,
  },
  btnContainer: {
    flexDirection: "row",

    alignItems:"center",
    justifyContent: "space-around"
  },
  btn: {
    backgroundColor: "#E0AAFF",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 5
  },
  scrollText: {
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 15,
    color: "white"
  }
});

export default Home;
