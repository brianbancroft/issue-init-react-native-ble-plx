import React from "react";
// import useBluetooth from "../hooks/useBluetooth";
import { Button } from "react-native";

export default function BluetoothTest() {
  // const { scanAndConnect } = useBluetooth();

  function onPress() {
    console.log("hello world");
  }

  return (
    <Button
      onPress={onPress}
      title="Learn More"
      color="#262026"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}
