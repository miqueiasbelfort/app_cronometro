import { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      numero: 0,
      botao: 'VAI',
      lastTime: null
    }
    this.timer = null
    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  vai(){

    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null

      this.setState({botao: 'VAI'})
    }else {
      this.timer = setInterval(() => {
        this.setState({numero: this.state.numero + 0.1})
      }, 100)
      this.setState({botao: 'PARAR'})
    }
  }
  limpar(){
    if(this.timer != null){
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      lastTime: this.state.numero,
      numero: 0,
      botao: 'VAI'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image source={require("./cronometro.png")} style={styles.cronometro} />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnText}> {this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnText}>LIMPAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lastTimerContainer}>
          <Text styl={styles.textTimer}>Último tempo: {
            this.state.lastTime > 0 && this.state.lastTime.toFixed(2) + 's'
          }</Text>
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
  lastTimerContainer: {
    marginTop: 40,
  },
  textTimer: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#fff',
  }
});
