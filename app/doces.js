import {
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";

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
          <View style={styles.card}>
            <Image
              source={require("../assets/maca.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Maçã do Amor</Text>
            <Text style={styles.preco}>R$ 7,00</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/pacoca.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Paçoca</Text>
            <Text style={styles.preco}>R$ 3,00</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require("../assets/pe.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Pé de Moleque</Text>
            <Text style={styles.preco}>R$ 5,00</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/fuba.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Bolo de Fubá</Text>
            <Text style={styles.preco}>R$ 6,00</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.card}>
            <Image
              source={require("../assets/canjica.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Canjica</Text>
            <Text style={styles.preco}>R$ 8,00</Text>
          </View>

          <View style={styles.card}>
            <Image
              source={require("../assets/rapadura.png")}
              style={styles.image}
            />
            <Text style={styles.nome}>Rapadura</Text>
            <Text style={styles.preco}>R$ 4,00</Text>
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
