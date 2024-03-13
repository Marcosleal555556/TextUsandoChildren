import { View, Text } from 'react-native';







export default function fundo({children}) {

return (
<View style= {{ backgroundColor: 'green'}}>


{children}


</View>

);
}