import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import add from '../realm/add2';

const dummy = () => {
  return 10;
};

const options = ({navigation}) => ({
  title: 'リスト追加',
  headerStyle: {
    backgroundColor: '#f4511e',
    height: 70,
  },
  headerTintColor: '#ffffff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 26,
    letterSpacing: 3,
  },
  headerTitleAlign: 'center',
});

const Body = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputName}>入力欄</Text>
        <TextInput
          style={styles.textInputArea}
          onChangeText={text => onChangeText(text)}
        />
      </View>
      <View style={styles.btnContainer}>
        <Text
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}>
          取消
        </Text>
        <Text
          style={styles.btn}
          onPress={() => {
            add(text);
            navigation.goBack();
          }}>
          作成
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textInputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInputName: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 10,
  },
  textInputArea: {
    width: 300,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 5,
  },
  btnContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  btn: {
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 40,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 5,
    //backgroundColor: 'yellow',
  },
});

export {options, Body};
