import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text style={{backgroundColor:"grey",marginTop:30 ,fontSize:15,textAlign:"left",textAlignVertical:"center",padding:20}}>nav</Text>
        <View style={styles.container}>
          <ScrollView  horizontal>
              <Image source={require('./assets/image1.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              <Image source={require('./assets/image2.webp')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              <Image source={require('./assets/image3.jpg')} style={{width:395,height:200,resizeMode:"contain"}}></Image>
              
          </ScrollView>
        </View>
    </View>  
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    alignItems: "flex-start",
    justifyContent: 'center',
  },
});
