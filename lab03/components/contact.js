import { SafeAreaView, StyleSheet, Text, View  , ScrollView,Image,
    SectionList,} from 'react-native';
import styles from "../styles"
const contacts = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", name: "Ahmed", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw1z1mdzS8Zy-4HifwSf-SIn&ust=1686447427016000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJD7vLDIt_8CFQAAAAAdAAAAABAE" },
        { id: "1", name: "orabi", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw1z1mdzS8Zy-4HifwSf-SIn&ust=1686447427016000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJD7vLDIt_8CFQAAAAAdAAAAABAE" },
      ]
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "2", name: "Bob", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw1z1mdzS8Zy-4HifwSf-SIn&ust=1686447427016000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJD7vLDIt_8CFQAAAAAdAAAAABAE" },
        { id: "3", name: "Bella", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "4", name: "Charlie", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "5", name: "Catherine", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "6", name: "David", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "7", name: "Diana", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Favatar&psig=AOvVaw1z1mdzS8Zy-4HifwSf-SIn&ust=1686447427016000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJD7vLDIt_8CFQAAAAAdAAAAABAE" },
      ]
    },
    {
      id: "4",
      title: "E",
      data: [
        { id: "8", name: "Emma", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
        { id: "9", name: "Ethan", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
      ]
    },
    {
      id: "54",
      title: "F",
      data: [
        { id: "10", name: "Fatma", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
        { id: "11", name: "Fady", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
      ]
    },
    // Add more groups and contacts as needed
  ];
export default function ContactScreen() {
return (
    <SectionList sections={contacts} style={{marginBottom:50}}
      renderSectionHeader={({section:{title}})=><Text style={styles.header}>{title}</Text>}
      renderItem={({item:{name,image}})=>{return <View style={{flexDirection:"row"}}>
        <Image source={{
        uri: image,
      }} style={{width:50,height:50}}></Image><Text style={styles.itemStyle}>{name}</Text></View>}}
      keyExtractor={(props)=>props.id}
    ></SectionList>
);
}