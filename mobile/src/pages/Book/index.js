import React , {useState,useEffect}from 'react';

import {AsyncStorage,Alert,SafeAreaView,Text,TouchableOpacity,TextInput}  from 'react-native';

import api from '../../services/api';

import styles from './styles';

export default function Book ({navigation}) {
    const [date, setDate] = useState('');
    const booking_spot = navigation.getParam('id');
  
    async function handleSubmit() {
        const booking_user = await AsyncStorage.getItem('user');
    
        await api.post(`/booking/${booking_spot}`, {
          date,
        },{
          headers: {
            authorization : booking_user
          }
        })
        
    
        Alert.alert(`Solicitação de reserva enviada, com a data ${date}`);
    
        navigation.navigate('List');
      }
    
      function handleCancel() {
        navigation.navigate('List');
        Alert.alert('Solicitação de reserva cancelada.');

      }

return(
    
    <SafeAreaView style={styles.container}>
     
      <Text style={styles.label}>DATA DE INTERESSE *</Text>
      <TextInput
        style={styles.input}
        placeholder="Qual data você quer reservar?"
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}
      />

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
   
