import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Feather, AntDesign, EvilIcons } from '@expo/vector-icons';

import api from '../services/api';
import styles from './styles';

function SpotList({ techs, navigation }) {
  const [spots, setSpots] = useState([]);


  function navigateToLogin() {
    navigation.navigate('Login');
  }

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/spots', {
        params: { techs }
      })

      setSpots(response.data);
    }

    loadSpots();
  }, []);

  function handleNavigation(id) {
    navigation.navigate('Book', { id })
  }
  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={navigateToLogin}>
         <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{techs}  </Text>
        <AntDesign name="poweroff" size={26} color="#E02041" />
      </Text>
      </TouchableOpacity>
     

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => String(spot.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: `http://192.168.0.109:3333/uploads/${item.thumbnail}` }} />
            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}/dia` : 'GRATUITO'}</Text>
            <TouchableOpacity onPress={() => handleNavigation(item.id)}
              style={styles.button}>
              <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}
export default withNavigation(SpotList);