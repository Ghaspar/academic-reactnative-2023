import {Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle} >Nome do evento</Text>
            <Text style={styles.textSubTitle} >Sexta, 15 de Abril</Text>
            <TextInput 
                style={styles.input} 
                placeholder="Nome do participante"
                placeholderTextColor="#3dbde3"
                keyboardType="numeric"
            />
        </View>
      );
}
    