import React, { useState } from "react";
import useBluetooth from "../hooks/useBluetooth";
import { Button, Text } from "react-native";

export default function BluetoothTest() {
  const hook = useBluetooth();

  const [clicked, setClicked] = useState(false);

  function onPress() {
    setClicked(true);

    console.log("hello world");
  }

  return (
    <>
      <Text>
        {clicked
          ? "this button has been clicked"
          : "this button has not been clicked"}
      </Text>
      <Button
        onPress={onPress}
        title="Learn More"
        color="#262026"
        accessibilityLabel="Learn more about this purple button"
      />
    </>
  );
}
