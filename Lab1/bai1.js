import { View, Text, Pressable, Image, StatusBar, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Bai1({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar style="light" hidden={true} />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-around",
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <LeftComponent />
        <CenterComponent name="Header" />
        <RightComponent />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <LeftComponent />
        <CenterComponent name="Body" />
        <RightComponent />

        
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10,
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <LeftComponent />
        <CenterComponent />
        <RightComponent />

        
      </View>

      {/* Button chuyển sang Bai2 */}
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Button
          title="Chuyển đến Bai2"
          onPress={() => navigation.navigate("Bai2")}
        />
      </View>
    </View>
  );
}

const LeftComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Pressable
        onPress={() => {}}
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color="gray"
          style={{
            borderRadius: 15,
            borderWidth: 1,
          }}
        />
      </Pressable>
    </View>
  );
};

const CenterComponent = ({ name }) => {
  return (
    <View style={{ flex: 2, alignItems: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
          color: "gray",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const RightComponent = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("./assets/icon.png")}
        style={{ width: 50, height: 50, resizeMode: "cover", borderRadius: 25 }}
      />
    </View>
  );
};
 