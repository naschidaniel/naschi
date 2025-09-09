<template>
  <table>
      <tr>
        <th>Topic</th>
        <th>Zeit</th>
        <th>Wert</th>
      </tr>
      <tr v-for="item in items" :key="item.topic">
        <td
          >{{ item.topic }}</td
        >
        <td>{{ formatTime(new Date(item.timestamp)) }}</td>
        <td
          >{{ item.value }} °C
          <span class="badge" :class="isExceeded(new Date(item.timestamp), 3000) ? 'up' : 'down'"></span></td
        >
      </tr>
    </table>
</template>

<script setup lang="ts">
import mqtt from "mqtt";
import { formatTime, isExceeded } from "../util/formatDate";
import { ref, onMounted } from "vue";

type SensorValue = {
  topic: string;
  value: number;
  timestamp: string;
};

const items = ref([] as SensorValue[]);

onMounted(async () => {
  items.value[0] = await fetch('/data/data.json').then((response) => response.json());
})

const client = mqtt.connect("wss://naschi.at:8081");
client.on("connect", () => {
  client.subscribe("huehnerstall/temperature", (err) => {
    if (!err) console.log("Subscribed to huehnerstall/temperature");
  });
});

client.on("message", (_topic, message) => {
  items.value[0] = JSON.parse(message.toString());
});
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
    background-color: #e3e3e3;
    color: rgb(35, 31, 31);
  }

  tr:hover {
    background-color: #a8a8a8;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #2865a2;
    color: rgb(240, 240, 240);
  }
</style>
