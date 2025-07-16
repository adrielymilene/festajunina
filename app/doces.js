import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import {Card} from './componentes/Card'

// const lista = [
//   {texto: "Maçã do Amor", valor: "6,00", foto: "../assets/maca.png"},
// ]

export default function Doce() {
  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🧁 Doces</Text>

        <View style={styles.row}>
          <Card texto={'Maçã do Amor'} valor={"6,00"} foto={require("../assets/maca.png")} />
          <Card texto={'Paçoca'} valor={"3,00"} foto={require("../assets/pacoca.png")} />
        </View>

        <View style={styles.row}>
          <Card texto={'Pé de Moleque do Amor'} valor={"5,00"} foto={require("../assets/pe.png")} />
          <Card texto={'Bolo de Fubá'} valor={"6,00"} foto={require("../assets/fuba.png")} />
        </View>

        <View style={styles.row}>
          <Card texto={'Canjica'} valor={"8,00"} foto={require("../assets/canjica.png")} />
          <Card texto={'Rapadura'} valor={"4,00"} foto={require("../assets/rapadura.png")} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  
});
