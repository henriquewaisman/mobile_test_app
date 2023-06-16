import { View, Text, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from './styles';

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style={styles.userText}>Usuário</Text>
            <TextInput style={styles.user} placeholder="usuário"/>
            <Text style={styles.passwordText}>Senha</Text>
            <TextInput style={styles.password} placeholder="senha"/>
            <Link to={{screen: 'Dashboard'}} style={styles.dashboardLink}>Login</Link>
            <Link to={{screen: 'Register'}} style={styles.registerLink}>Não tem conta? Cadastre-se</Link>
            <Link to={{screen: 'Password'}} style={styles.passwordLink}>Esqueci Minha Senha</Link>
        </View>
    )
}
