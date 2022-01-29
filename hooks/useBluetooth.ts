import { useEffect, useState } from "react";
import { BleManager } from "react-native-ble-plx";

function useBluetooth() {
  const [devicesObserved, setDevicesObserved] = useState([]);

  console.log("BleManager ", BleManager);

  const foo = new BleManager();

  useEffect(() => {}, []);

  // useEffect(() => {}, [manager]);

  return { foo: "bar" };
}

export default useBluetooth;
