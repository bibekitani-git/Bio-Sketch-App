import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      {/* The code below will display my BioSketch @ UC, and it's amazing!!!!! */}
      
      <Text style={styles.title}>
        WELCOME TO THE UNIVERSITY of the CUMBERLANDS{"\n"}
        Course ID: MSCS 533
      </Text>

      <Image 
        style={styles.headshot} 
        source={require('../assets/IMG_4419.JPG')} 
      />

      <Text style={styles.bioText}>
       Bibek Itani{"\n\n"}
        Solution Architect at Delta Air Lines
        Passionate about Data, AI, and Engineering
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#e60026', // Use UC red for the text title
  },
  bioText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  headshot: {
    height: 180,
    width: 180,
    borderRadius: 90, // Circular profile picture
    borderWidth: 2,
    borderColor: '#e60026',
  }
});