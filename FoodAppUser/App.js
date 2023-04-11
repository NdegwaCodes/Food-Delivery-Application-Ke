import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/*Restaurant Item */}
      <View style={styles.restaurantContainer}>
    <Image source={{ url: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/uber-eats/restaurant.jpeg',}}
    style={styles.image}/>  
    <Text style={styles.title}>Two Buns Restaurant</Text>
    <Text style={styles.subtitle}>KSH 150 15-30 Minutes</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  restaurantContainer: {
    width: "100%",
  },
  Image: {
    width: '100%',
    aspectRatio: 5/3,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    fontWeight:"bold",
    marginVertical: 5,
  },
  subtitle: {
    color: "gray",
  },
});
