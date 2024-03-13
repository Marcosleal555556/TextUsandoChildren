import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Txt1 from './src/Components/TxtComponent';
import Txt2 from './src/Components/Txt2Components';
import Txt3 from './src/Components/Txt3Components';
import Fundo from './src/Components/FundoComponent';

export default function App() {
  return (
    <View style={styles.container}>
   <Fundo>


   <Txt1 />
   <Txt2 />
   <Txt3 />



   </Fundo>





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
  },
});
