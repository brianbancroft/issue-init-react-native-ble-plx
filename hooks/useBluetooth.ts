import { useEffect, useState } from "react";
import { BleManager } from "react-native-ble-plx";

export const manager = new BleManager();

function useBluetooth() {
  const [devicesObserved, setDevicesObserved] = useState<{ array: string[] }>({
    array: [],
  });

  useEffect(() => {
    const subscription = manager.onStateChange((state) => {
      if (state === "PoweredOn") {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
    return () => subscription.remove();
  }, [manager]);

  function scanAndConnect() {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      let newDevice = device?.name ?? "";
      console.log("New device ", newDevice);

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (
        device?.name === "TI BLE Sensor Tag" ||
        device?.name === "SensorTag"
      ) {
        // Stop scanning as it's not necessary if you are scanning for one device.
        manager.stopDeviceScan();

        // Proceed with connection.
      }
    });
  }

  return { scanAndConnect };
}

export default useBluetooth;
