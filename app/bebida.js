import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import {Card} from './componentes/Card'

export default function Bebida() {
  return (
    <ImageBackground
      source={require("../assets/image.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🍹 Bebidas</Text>

        <View style={styles.row}>
          <Card texto={'Quentão'} valor={"6,00"} foto={require("../assets/quentao.png")} />
          <Card texto={'Água'} valor={"3,00"} foto={require("../assets/agua.png")} />
        </View>

        <View style={styles.row}>
          <Card texto={'Coca-Cola'} valor={"5,00"} foto={require("../assets/coca.png")} />
          <Card texto={'Suco Natural'} valor={"7,00"} foto={require("../assets/suco.png")} />
        </View>

        <View>
            <Card  style={styles.card} texto={'⠀⠀Chocolate⠀⠀⠀⠀⠀Quente'} valor={"8,00"} foto={require("../assets/chocolate.png")} />
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
