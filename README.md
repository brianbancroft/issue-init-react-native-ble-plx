## Sample Break

For the sake of sharing with `react-native-ble-plx` in an issue

Line of code in question is https://github.com/brianbancroft/issue-init-react-native-ble-plx/blob/main/hooks/useBluetooth.ts#L9

### Breakdown

```
[Unhandled promise rejection: TypeError: null is not an object (evaluating '_BleModule.BleModule.createClient')]
at node_modules/@react-navigation/native/src/useThenable.tsx:25:13 in resolve

BleManager  [Function BleManager]
BleManager  [Function BleManager]

TypeError: null is not an object (evaluating '_BleModule.BleModule.createClient')

This error is located at:
    in BluetoothTest (created by TabOneScreen)
    in RCTView (created by View)
    in View (created by View)
    in View (created by TabOneScreen)
    in TabOneScreen (created by SceneView)
    in StaticContainer
    in EnsureSingleNavigator (created by SceneView)
    in SceneView (created by BottomTabView)
    in RCTView (created by View)
    in View (created by Screen)
    in RCTView (created by View)
    in View (created by Background)
    in Background (created by Screen)
    in Screen (created by BottomTabView)
    in RNSScreen (created by AnimatedComponent)
    in AnimatedComponent
    in AnimatedComponentWrapper (created by Screen)
    in MaybeFreeze (created by Screen)
    in Screen (created by MaybeScreen)
    in MaybeScreen (created by BottomTabView)
    in RNSScreenContainer (created by ScreenContainer)
    in ScreenContainer (created by MaybeScreenContainer)
    in MaybeScreenContainer (created by BottomTabView)
    in RCTView (created by View)
    in View (created by SafeAreaInsetsContext)
    in SafeAreaProviderCompat (created by BottomTabView)
    in BottomTabView (created by BottomTabNavigator)
    in Unknown (created by BottomTabNavigator)
    in BottomTabNavigator (created by BottomTabNavigator)
    in BottomTabNavigator (created by SceneView)
    in StaticContainer
    in EnsureSingleNavigator (created by SceneView)
    in SceneView (created by SceneView)
    in RCTView (created by View)
    in View (created by DebugContainer)
    in DebugContainer (created by MaybeNestedStack)
    in MaybeNestedStack (created by SceneView)
    in RNSScreen (created by AnimatedComponent)
    in AnimatedComponent
    in AnimatedComponentWrapper (created by Screen)
    in MaybeFreeze (created by Screen)
    in Screen (created by SceneView)
    in SceneView (created by NativeStackViewInner)
    in RNSScreenStack (created by ScreenStack)
    in ScreenStack (created by NativeStackViewInner)
    in NativeStackViewInner (created by NativeStackView)
    in RCTView (created by View)
    in View (created by SafeAreaInsetsContext)
    in SafeAreaProviderCompat (created by NativeStackView)
    in NativeStackView (created by NativeStackNavigator)
    in NativeStackNavigator (created by RootNavigator)
    in RootNavigator (created by Navigation)
    in EnsureSingleNavigator
    in BaseNavigationContainer
    in ThemeProvider
    in NavigationContainerInner (created by Navigation)
    in Navigation (created by App)
    in RNCSafeAreaProvider (created by SafeAreaProvider)
    in SafeAreaProvider (created by App)
    in App (created by ExpoRoot)
    in ExpoRoot
    in RCTView (created by View)
    in View (created by AppContainer)
    in RCTView (created by View)
    in View (created by AppContainer)
    in AppContainer
at node_modules/react-native/Libraries/Core/ExceptionsManager.js:104:6 in reportException
at node_modules/react-native/Libraries/Core/ExceptionsManager.js:172:19 in handleException
at node_modules/react-native/Libraries/Core/ReactFiberErrorDialog.js:43:2 in showErrorDialog
at node_modules/@react-navigation/native/src/useThenable.tsx:25:13 in resolve
```
