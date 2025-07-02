import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";

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
          <View style={styles.card}>
            <Image
              source={require("../assets/pamonha.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Pamonha</Text>
            <Text style={styles.preco}>R$ 6,00</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/pastel.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Pastel</Text>
            <Text style={styles.preco}>R$ 8,00</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require("../assets/espeto.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Espetinho</Text>
            <Text style={styles.preco}>R$ 10,00</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/milho.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Milho</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </View>
        </View>
        <View>
          <View style={styles.card1}>
            <Image
              source={require("../assets/cachorro.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Cachorro-Quente</Text>
            <Text style={styles.preco}>R$ 7,00</Text>
          </View>
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
  card: {
    backgroundColor: "#FFD700",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    width: "48%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  preco: {
    fontSize: 17,
    color: "#666",
    marginTop: 4,
  },
});
