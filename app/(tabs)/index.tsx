import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { decrement, increment,incrementByAmount,incrementAsync } from "../../state/counter/counterSlice";

const HomePage = () => {
  const count = useSelector((state:RootState)=> state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View>
      <Text>Count : {count}</Text>
      <Link href="/pkhUsers/1">Go to User 1</Link>
      <Pressable onPress={() => 
        router.push({
            pathname : "/pkhUsers/[id]",
            params : {id : 2}
        })
      }>
        <Text>Go to user 2</Text>
      </Pressable> 
      <Pressable onPress={() => dispatch(increment())}>
        <Text>Click to increase the counter</Text>
      </Pressable> 
      <Pressable onPress={() => dispatch(decrement())}>
        <Text>Click to decrease the counter</Text>
      </Pressable> 
      <Pressable onPress={() => dispatch(incrementByAmount(10))}>
        <Text>Click to increame by 10 the counter</Text>
      </Pressable> 
      <Pressable onPress={() => dispatch(incrementAsync(30))}>
        <Text>Click to increame 30 with delay async</Text>
      </Pressable> 
    </View>
  );
};

export default HomePage;
