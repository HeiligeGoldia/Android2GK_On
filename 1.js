import { View, Text, Button } from "react-native"

export const Home = ({navigation}) => {
    return (<View>
            <Text>home</Text>
            <Button title="alo" onPress={()=>{
                navigation.navigate('StarNet')
            }}></Button>
        </View>)
}