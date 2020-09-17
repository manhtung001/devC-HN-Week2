import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgs1 = [
  require('./assets/1.jpg'),
  require('./assets/2.jpg'),
  require('./assets/3.jpg'),
];

const imgs2 = [
  require('./assets/4.jpg'),
  require('./assets/5.jpg'),
  require('./assets/6.jpg'),
];


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerDirection}>
        <AntDesign style={styles.headerDirectionIcon1} name="left" size={36} color="#747FA6" />
        <MaterialCommunityIcons name="dots-horizontal" size={36} color="#747FA6" />
      </View>
      <View style={styles.headerWrapper}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <Image style={styles.headerInfoImg} source={require('./assets/avatar.png')} />
            <View style={styles.headerInfoDetail}>
              <Text style={styles.headerInfoDetailName}>
                Tung Khong
            </Text>
              <Text style={styles.headerInfoDetailJob}>
                Developer
            </Text>
              <View style={styles.headerInfoDetailBtn}>
                <TouchableOpacity
                  onPress={() => {
                    alert("followed");
                  }}
                >
                  <View style={styles.headerInfoDetailBtnFollow}>
                    <Text style={styles.headerInfoDetailBtnFollowText}>Follow</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    alert("message sended");
                  }}
                >
                  <View style={styles.headerInfoDetailBtnMess}>
                    <Ionicons name="ios-send" size={30} color="white" />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.headerCount}>
            <View style={styles.headerCountChild}>
              <Text style={styles.headerCountChildNum}>210</Text>
              <Text style={styles.headerCountChildText}>Photos</Text>
            </View>
            <View style={styles.headerCountChild}>
              <Text style={styles.headerCountChildNum}>15k</Text>
              <Text style={styles.headerCountChildText}>Followers</Text>
            </View>
            <View style={styles.headerCountChild}>
              <Text style={styles.headerCountChildNum}>605</Text>
              <Text style={styles.headerCountChildText}>Following</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.scrollView}>
            <View>
              {imgs1.map((img, index) => 
              <Image 
              key={index} 
              style={[styles.bodyImg, index%2 === 1 ? {height: 200 }: {height: 170} ]}
              source={img} 
              />)}
            </View>
            <View>
              {imgs2.map((img, index) => 
              <Image 
              key={index}
              style={[styles.bodyImg, index%2 === 0 ? {height: 250 }: {height: 190} ]}
              source={img} 

              />)}
            </View>
          </View>
        </View>
      </ScrollView>
      </View>
      <View style={styles.bottom}>
        <AntDesign name="home" size={30} color="#747FA6" />
        <MaterialIcons name="add-circle-outline" size={30} color="#747FA6" />
        <MaterialIcons name="person-outline" size={30} color="#747FA6" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  headerDirection: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingRight: 10,
  },
  headerDirectionIcon1: {
    paddingLeft: 10
  },
  headerDirectionIcon2: {
    paddingRight: 20
  },
  headerWrapper: {
    flex: 4,
  },
  header: {
    flex: 2,
  },
  headerInfo: {
    flex: 2.5,
    flexDirection: "row",
  },
  headerInfoImg: {
    width: 110,
    height: 110,
    borderRadius: 60,
    marginLeft: 30,
    marginRight: 30
  },
  headerInfoDetail: {
    flex: 1,
  },
  headerInfoDetailName: {
    fontWeight: "700",
    fontSize: 24,
    color: POLO_BLUE_COLOR
  },
  headerInfoDetailJob: {
    fontSize: 16,
    fontWeight: "500",
    color: "#888888",
    marginTop: 6,
    marginBottom: 20
  },
  headerInfoDetailBtn: {
    flexDirection: "row"
  },
  headerInfoDetailBtnFollow: {
    backgroundColor: FOLLOW_COLOR,
    width: 120,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"

  },
  headerInfoDetailBtnFollowText: {
    fontWeight: "600",
    fontSize: 20,
    color: "white"
  },
  headerInfoDetailBtnMess: {
    backgroundColor: SEND_MESSAGE_COLOR,
    marginLeft: 14,
    width: 70,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerCount: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 40,
    paddingLeft: 40,
    marginTop: 30
  },
  headerCountChild: {
    alignItems: "center"
  },
  headerCountChildNum: {
    fontWeight: "700",
    fontSize: 24,
    color: POLO_BLUE_COLOR
  },
  headerCountChildText: {
    fontSize: 14,
    color: "#888888",
    marginTop: 10
  },
  body: {
    flex: 2,
    marginTop: 50
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "center"
  },
  bodyImg: {
    width: 160,
    height: 160,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10
  },
  bottom: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
