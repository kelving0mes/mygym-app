import { StyleSheet, Text, TextInput, View } from "react-native";
import LoginBtn from "../components/LoginBtn";



export default function Login() {
    return (
        <View style={styles.container}>
            <View style={{flex:2}}>
            </View>
            <View style={styles.viewContainer}>
                <Text style={styles.loginText}>Faça seu login</Text>
                <TextInput placeholder="email" style={styles.textInput} />
                <TextInput placeholder="senha" secureTextEntry={true} style={styles.textInput} />
                <LoginBtn/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#AED3F2',
    },
    viewContainer:{
        flex:6, 
        backgroundColor: '#0477BF',
        width:'100%', 
        alignItems:"center",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
    },
    loginText: {
        fontSize: 24,
        color: '#F5F5F5',
        marginVertical: 80,
    },
    textInput: {
        backgroundColor: '#F5F5F5',
        width: '65%',
        padding: 12,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#1B1A26',
        marginBottom: 8,
    },
});