#!/usr/bin/env python
"""subscribe to mqtt topic and print messages"""

import paho.mqtt.client as mqtt
import json
import os
from dotenv import load_dotenv

load_dotenv()

CLIENTID = os.getenv("CLIENTID")
HOST = os.getenv("HOST")
PORT = int(os.getenv("PORT"))
TOPIC = os.getenv("TOPIC")


def on_connect(client, userdata, flags, reason_code, properties):
    print(f"Connected with result code {reason_code}")
    client.subscribe(TOPIC)


# The callback for when a PUBLISH message is received from the server.
def on_message(client, userdata, msg) -> str:
    print(msg.topic + " " + str(msg.payload))
    data = json.loads(msg.payload)
    with open("../data/data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)


def main():
    """Run administrative tasks."""
    mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    mqttc.on_connect = on_connect
    mqttc.on_message = on_message
    mqttc.connect(HOST, PORT, 60)
    mqttc.loop_forever()

if __name__ == "__main__":
    main()
