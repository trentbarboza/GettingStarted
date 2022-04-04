import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Sandbox from "./screens/Sandbox";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.tsx to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    //----------FLEX----------------------------------------------
    <>
      
        <Sandbox title={"My Awesome Title"} />
      
    </>
    // <View style={styles.container}>
    //   <View style={styles.c1}></View>
    //   <View style={styles.c2}></View>
    //   <View style={styles.c3}>
    //   <Button title="Click Me" onPress={() => console.log("Clicked")}/>
    //   </View>

    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //Flex will determine how much of the screen to fill the container it's in. Also based on the number of containers.
    flex: 1,
    // backgroundColor: "red",
  },
  row: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center", //this gets centered in the secondary axis
    justifyContent: "center", //this gets centered along the main axis
  },
  c1: { flex: 1, backgroundColor: "red" },
  c2: { flex: 1, backgroundColor: "white" },
  c3: { flex: 1, backgroundColor: "blue" },
});

//Differences: Stylesheet, don't see rows and cols, no headings or p tags, just Text, Not importing react, when using hooks you will need to import React, we are now using views, we now have access to a status bar - status bar is the bar ontop of your phone
