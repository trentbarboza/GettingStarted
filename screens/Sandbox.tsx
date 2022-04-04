import { FC, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface ISandbox {
  title: string;
}

const Sandbox: FC<ISandbox> = ({ title }) => {
  //Fizz Buzz
  //Be able to add up & down
  //If num is divisible by 3 display Fizz
  //if num is divisible by 5 display Buzz
  //if num is divisible by 5 & 3 display Fizz Buzz

  const [num, setNum] = useState<number>(0);
//   const FizzBuzz =(n:number) =>{
//       if(n % 3 === 0 && n % 5 === 0){
//           return "Fizz Buzz";
//       }else if( n % 3 === 0){
//           return "Fizz";
//       }else if(n % 5 == 0){
//           return "Buzz";
//       }else{
//           return n;
//       }
//   }

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} />
      <Text>{num}</Text>
      <View style={styles.row}>
        <Button
          title={"Decrement Button"}
          onPress={() => num ? setNum(num - 1) : setNum(0)}
        />
        <Button
          title={"Increment Button"}
          onPress={() => setNum(num + 1)}
        />
      </View>
      <Text>{num % 5 === 0 && num % 3 === 0 ? 'Fizz Buzz' : num % 3 === 0 ? 'Fizz' : num % 5 === 0 ? 'Buzz' : null} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center"
  },
});
export default Sandbox;
