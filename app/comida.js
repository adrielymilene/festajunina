import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import {Card} from './componentes/Card'

export default function Comida() {
  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🍛 Comidas Típicas</Text>

        <View style={styles.row}>
          <Card texto={'Pamonha'} valor={"6,00"} foto={require("../assets/pamonha.png")} />
          <Card texto={'Pastel'} valor={"8,00"} foto={require("../assets/pastel.png")} />
        </View>

        <View style={styles.row}>
          <Card texto={'ESpetinho'} valor={"10,00"} foto={require("../assets/espeto.png")} />
          <Card texto={'Milho'} valor={"5,00"} foto={require("../assets/milho.png")} />
        </View>

        <View>
          <Card texto={'CachorroQuente'} valor={"7,00"} foto={require("../assets/cachorro.png")} />
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
   card1: {
    backgroundColor: "#FFD700",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    width: "55%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
