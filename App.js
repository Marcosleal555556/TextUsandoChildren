import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import Txt from './assets/src/Components/TxtComponent';
import Txt2 from './assets/src/Components/txt2Components';
import Txt3 from './assets/src/Components/txt3Components';
import Fundo from './assets/src/Components/FundoComponent';

export default function App() {
  return (
    <View style={styles.container}>
   <Fundo>


   <Txt />
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
