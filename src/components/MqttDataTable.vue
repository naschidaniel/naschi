<template>
  <table>
    <caption style="caption-side: bottom">
      Messwerte
    </caption>
    <thead>
      <tr>
        <th>Topic</th>
        <th>Zeit</th>
        <th>Wert</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.topic">
        <td>{{ item.topic }}</td>
        <td>{{ formatTime(new Date(item.timestamp)) }}</td>
        <td>
          {{ item.value }} °C
          <span
            class="badge"
            :class="
              compareDates(new Date(item.timestamp), maxAgeTimestamp)
                ? 'up'
                : 'down'
            "
          ></span>
        </td>
      </tr>
    </tbody>
  </table>
  <table style="margin-top: 3em">
    <caption style="caption-side: bottom">
      Legende
    </caption>
    <thead>
      <tr>
        <th>Topic</th>
        <th>Zeit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Systemzeit</td>
        <td>{{ formatTime(new Date()) }}</td>
      </tr>
      <tr>
        <td>Livedaten</td>
        <td>
          <span class="badge" :class="connected ? 'up' : 'down'"></span>
          <span v-if="connected">Verbindung zum Websocket hergestellt</span
          ><span v-else>Keine Verbindung zum Websocket</span>
        </td>
      </tr>
      <tr>
        <td><span class="badge down"></span></td>
        <td>Die Werte sind älter als {{ threshold }} Sekunden</td>
      </tr>
      <tr>
        <td><span class="badge up"></span></td>
        <td>Die Werte sind aktuell</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import mqtt from "mqtt";
import { formatTime, compareDates } from "../util/formatDate";
import { ref, onMounted } from "vue";

type SensorValue = {
  topic: string;
  value: number;
  timestamp: string;
};

const threshold = 10; // seconds
const items = ref([] as SensorValue[]);
const connected = ref(false);
const maxAgeTimestamp = ref(new Date(Date.now() - 1000 * threshold));

onMounted(async () => {
  items.value[0] = await fetch("/data/data.json").then((response) =>
    response.json(),
  );
  setMaxAgeTimestamp();
});

const client = mqtt.connect("wss://naschi.at:8081");
client.on("connect", () => {
  connected.value = true;
  client.subscribe("huehnerstall/temperature", (err) => {
    if (!err) console.log("Subscribed to huehnerstall/temperature");
  });
});

client.on("message", (_topic, message) => {
  items.value[0] = JSON.parse(message.toString());
});

client.on("close", () => {
  connected.value = false;
});

function setMaxAgeTimestamp() {
  setTimeout(function () {
    maxAgeTimestamp.value = new Date(Date.now() - 1000 * threshold);
    setMaxAgeTimestamp();
  }, 5);
}
</script>

<style>
.badge {
  height: 12px;
  width: 12px;
  padding: 1px;
  margin-left: 5px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
}

.up {
  background-color: rgb(101, 243, 101);
}

.down {
  background-color: rgb(243, 101, 101);
}

table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #ddd;
  padding: 8px;
  vertical-align: middle;
}

tr:nth-child(even) {
  background-color: #011a1a;
}

tr:hover {
  background-color: #002323;
}

th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #2865a2;
  color: rgb(240, 240, 240);
}
</style>
