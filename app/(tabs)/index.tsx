import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text>Home Page</Text>
      <Link href="/pkhUsers/1">Go to User 1</Link>
      <Pressable onPress={() => 
        router.push({
            pathname : "/pkhUsers/[id]",
            params : {id : 2}
        })
      }>
        <Text>Go to user 2</Text>
      </Pressable> 
    </View>
  );
};

export default HomePage;
