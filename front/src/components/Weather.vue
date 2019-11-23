<template>
  <div class="Weather">
    <v-container class="grey lighten-5">
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="sant == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  Santiago de Chile
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ this.santiago_hora }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ this.santiago_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="sant != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="zur == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">Zurich</v-list-item-title>
                <v-list-item-subtitle>{{ zurich_hora }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ zurich_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="zur != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="auc == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">Auckland</v-list-item-title>
                <v-list-item-subtitle>{{ auckland_hora }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ auckland_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="auc != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="syd == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">Sidney</v-list-item-title>
                <v-list-item-subtitle>
                  {{ this.sydney_hora }}</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ this.sydney_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="syd != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="lon == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">Londres</v-list-item-title>
                <v-list-item-subtitle>{{ londres_hora }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ londres_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="lon != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" max-width="400" v-if="geo == true">
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title class="headline">Georgia</v-list-item-title>
                <v-list-item-subtitle>{{ georgia_hora }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="6"
                  >{{ georgia_temp }}&deg;C</v-col
                >
                <v-col cols="6">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                  ></v-img>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-card class="mx-auto" max-width="400" v-if="geo != true">
            <p>'How unfortunate! The API Request Failed'</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import cron from "node-cron";
//import store from "store";
export default {
  name: "Weather",
  props: {
    msg: String
  },
  data() {
    return {
      sant: true,
      zur: true,
      auc: true,
      syd: true,
      lon: true,
      geo: true,

      scnombre: "",
      santiago_temp: "",
      santiago_hora: "",
      zurich_temp: "",
      zurich_hora: "",
      auckland_temp: "",
      auckland_hora: "",
      sydney_temp: "",
      sydney_hora: "",
      londres_temp: "",
      londres_hora: "",
      georgia_temp: "",
      georgia_hora: "",

      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        {
          day: "Thursday",
          icon: "mdi-cloud",
          temp: "25\xB0/15\xB0"
        }
      ]
    };
  },

  methods: {
    async endpointBuscar(id) {
      let response = await axios.get(`http://localhost:3000/clima/` + id);

      return response.data;
    },
    grados(grados) {
      let centigrados = ((grados - 32) / 1.8).toFixed(0);
      return centigrados;
    },

    async datosTotales(lat, lon) {
      let datos = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/131672ca7bcb232eab0f819b70a95dd4/" +
          lat +
          "," +
          lon
      );

      return datos;
    },

    async add(id) {
      const a = await this.endpointBuscar(id);
      //console.log("dataaaaaaaaaaa", a.data);
      let lat = a.latitud;
      let lon = a.longitud;
      const b = await this.datosTotales(lat, lon);
      return b;
    },
    santiago() {
      this.add("CL").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed"
        };
      
        if (Math.random(0, 1) < 0.1) {
          //API BACK
//console.log('data', data)
            axios.post(`http://localhost:3000/error`, data);
          this.santiago();
        } else {
          this.santiago_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.santiago_temp = this.grados(
            Confirmado.data.currently.temperature
          );
        }
      });
    },
    zurich() {
      this.add("CH").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed - SANTIAGO"
        };
        
        if (Math.random(0, 1) < 0.1) {
          //apiback
          //console.log('data', data)
          axios.post(`http://localhost:3000/error`, data);
          this.zurich();
        } else {
          this.zurich_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.zurich_temp = this.grados(Confirmado.data.currently.temperature);
        }
      });
    },
    auckland() {
      this.add("NZ").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed - AUCKLAND"
        };
        
        if (Math.random(0, 1) < 0.1) {
          //back
          //console.log('data', data)
          axios.post(`http://localhost:3000/error`, data);
          this.auckland();
        } else {
          this.auckland_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.auckland_temp = this.grados(
            Confirmado.data.currently.temperature
          );
        }
      });
    },
    sydney() {
      this.add("AU").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed - SYDNEY"
        };
        if (Math.random(0, 1) < 0.1) {
          //console.log('data', data)
          axios.post(`http://localhost:3000/error`, data);
          //apiback
          this.sydney();
        } else {
          this.sydney_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.sydney_temp = this.grados(Confirmado.data.currently.temperature);
        }
      });
    },
    londres() {
      this.add("UK").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed - LONDRES"
        };
        
        if (Math.random(0, 1) < 0.1) {
          //console.log('data', data)
          //apiback
          axios.post(`http://localhost:3000/error`, data);
          this.londres();
        } else {
          this.londres_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.londres_temp = this.grados(
            Confirmado.data.currently.temperature
          );
        }
      });
    },
    usa() {
      this.add("USA").then(Confirmado => {
        let data = {
          'id': Confirmado.data.currently.time,
          'mensaje': "How unfortunate! The API Request Failed - GEORGIA"
        };
        
        if (Math.random(0, 1) < 0.1) {
          //console.log('data', data)
          //apiback
          axios.post(`http://localhost:3000/error`, data);
          this.usa();
        } else {
          this.georgia_hora = moment
            .unix(Confirmado.data.currently.time)
            .format("LLL");
          this.georgia_temp = this.grados(
            Confirmado.data.currently.temperature
          );
        }
      });
    }
  },
  created() {
    this.santiago();
    this.zurich();
    this.auckland();
    this.sydney();
    this.londres();
    this.usa();
  },

  mounted() {
    setInterval(() => {
      this.santiago();
      this.zurich();
      this.auckland();
      this.sydney();
      this.londres();
      this.usa();
    }, 10000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="stylus" scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
