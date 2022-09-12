import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
    }
  }
  limpar(){

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={require("./cronometro.png")} style={styles.cronometro} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnText}>VAI</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00aeef",
  },
  cronometro: {},
  timer: {
    marginTop: -160,
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 70,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
});
