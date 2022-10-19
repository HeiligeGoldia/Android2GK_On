import { View, Text, Button } from "react-native"

export const Home = ({navigation}) => {
    const a = 'kien db'
    return (<View>
            <Text>home</Text>
            <Text>{a}</Text>
            <Button title="alo" onPress={()=>{
                navigation.navigate('StarNet', {b: a})
            }}></Button>
        </View>)
}