import * as React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';

export const addOne = (input: number) => input + 1

export const Counter = () => {
  const [count, setCount] = React.useState(0)

  return (
    <View style={styles.container}>
      <Text>You pressed {count} times</Text>
      <Button onPress={() => setCount(addOne(count))} title='Press Me' />
    </View>
  )
}

export const MyProvider = ({ children }: { children: any }) => {
  return <PaperProvider>{children}</PaperProvider>
}
export const AppBar = () => {
  return (<View style={{ height: 60, backgroundColor: "red" }}>
    <Icon name="ios-book" size={60} color="#4F8EF7" />
    <Text>Hello</Text>
  </View>)
}

export const AppBar2 = () => {
  return (<Appbar.Header>
    <Appbar.Content title="Title" subtitle={'Subtitle'} />
    <Appbar.Action icon="magnify" onPress={() => { }} />
  </Appbar.Header>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
})
