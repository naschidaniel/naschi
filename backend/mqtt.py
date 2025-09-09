#!/usr/bin/env python
"""subscribe to mqtt topic and print messages"""

import paho.mqtt.client as mqtt
import json
import os
from dotenv import load_dotenv
from collections import OrderedDict

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

    try:
        with open("../data/data.json", "r", encoding="utf-8") as f:
            data_raw = f.read()
            data_list = (
                json.loads(data_raw, object_pairs_hook=OrderedDict) if data_raw else []
            )
    except FileNotFoundError:
        data_list = []

    try:
        topic_index = next(
            (index for (index, d) in enumerate(data_list) if d["topic"] == TOPIC), None
        )
        if topic_index is not None:
            data_list.pop(topic_index)
    except ValueError:
        pass
    data_list.append(json.loads(msg.payload))
    data_list.sort(key=lambda x: x["topic"], reverse=False)

    with open("../data/data.json", "w", encoding="utf-8") as f:
        json.dump(data_list, f, indent=2)


def main():
    """Run administrative tasks."""
    mqttc = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
    mqttc.on_connect = on_connect
    mqttc.on_message = on_message
    mqttc.connect(HOST, PORT, 60)
    mqttc.loop_forever()


if __name__ == "__main__":
    main()
