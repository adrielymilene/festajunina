import { StyleSheet, View, Image, Text } from "react-native";

export const Card = ({texto, valor, foto}) => {
  return (
    <View style={styles.card}>
      <Image source={foto} style={styles.image} />
      <Text style={styles.nome}>{texto}</Text>
      <Text style={styles.preco}>R$ {valor}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
})