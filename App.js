import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  Platform,
  Pressable,
  Button,
  Alert,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={[styles.androidSafeArea, styles.container]}>
      <View style={styles.container}>
        {/* imagem logo */}
        <Image
          source={require("./componentes/imagens/01.png")}
          style={{ width: 120, height: 140, marginBottom: 20 }}
        />

        {/* caixa de login */}
        <View style={[styles.loginBox, styles.borderMargin]}>
          <Text style={{ color: "white", fontSize: 15, marginBottom: 10,}} >Seja Bem-Vindos, faça o seu login ou cadastre-se</Text>

          <Text style={styles.labelInput}>Nome de usuario: </Text>
          <TextInput
            placeholder="Digite o seu nome"
            style={styles.input}
          ></TextInput>

          <Text style={styles.labelInput}>Senha:</Text>
          <TextInput
            placeholder="Digite a sua senha"
            style={styles.input}
            secureTextEntry
          ></TextInput>

          <Button
            title="Entrar"
            color="black"
            onPress={() => Alert.alert("Seja Bem-Vindo!")}
          ></Button>
        </View>

        {/* botão 03 - opcional */}
        <View style={styles.alinhamentoHozontal}>

          {/* botão 03 - opcional */}
          <Button
            title="Recuperar Senha"
            color="midnightblue"
            onPress={() =>
              Alert.alert(
                "Gostaria de recuper sua senha? selecione o metodo!",
                "Selecione uma das opções:",
                [
                  {
                    text: "Enviar email",
                    onPress: () => console.log("Botão Cancelado precionado"),
                  },
                  {
                    text: "Enviar SMS",
                    onPress: () => console.log("Botão OK precionado"),
                  },
                ]
              )
            }
          ></Button>
        </View>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },

  container: {
    flex: 1,
    backgroundColor: "darkblue",
    alignItems: "center",
    justifyContent: "center",
    padding: 25,
  },

  loginBox: {
    height: "auto",
    backgroundColor: "midnightblue",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },

  labelInput: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },

  borderMargin: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
  },

  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },

  button: {
    width: 300,
    height: 40,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "lightblue",
    alignItems: "center",
  },

  alinhamentoHozontal: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
    width: "100%",
    height: 50,
    borderRadius: 1,
  },

  Alert: {
    alignContent: "center",
    justifyContent: "center",
  }
});
