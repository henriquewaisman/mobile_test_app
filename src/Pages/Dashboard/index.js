import { Button, Text, View } from "react-native";
import { Link } from '@react-navigation/native';
import styles from './styles';

export default function Dashboard(){
    return (
            <View style={styles.container}>
                <Text style={styles.content}>Dashboard Content</Text>
                <Text style={styles.content}>Dashboard Content</Text>
                <Text style={styles.content}>Dashboard Content</Text>
                <Text style={styles.content}>Dashboard Content</Text>
                <Link to={{screen: 'Login'}} style={styles.link}>Unlog</Link>
            </View>
            
    );
}
