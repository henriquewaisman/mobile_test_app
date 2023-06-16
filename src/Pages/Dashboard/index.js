import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Rpg(props){
    return (
            <View style={styles.container}>
                <View style={styles.viewImg}>
                    <Image source={{
                        uri: props.rpg.imgUrl
                    }} style={styles.img}/>
                </View>
                <View style={styles.viewData}>
                    <Text style={styles.name}>{props.rpg.name}</Text>
                    <Text style={styles.desc}>{props.rpg.desc}</Text>
                        <Button style={styles.btn} color='red' title="Propor Troca"/>
                </View>
            </View>
    );
}
