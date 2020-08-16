import Icon from 'react-native-vector-icons/FontAwesome5';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';

const options = ({navigation}) => ({
  title: 'ロゴ',
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
  headerRight: () => (
    <Icon
      name="bars"
      size={30}
      onPress={() => navigation.navigate('ListTable')}
      style={{
        color: '#ffffff',
        paddingRight: 20,
      }}
    />
  ),
});

const dummy = () => {
  return 10;
};
const Body = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.name}>
          {/*1番目のリスト取得*/
          dummy()}
        </Text>
        <View style={styles.container}>
          <Icon name="angle-left" size={30} style={styles.icon} />
          <View
            /*タップしたら編集*/
            style={styles.content}>
            <Text>リストの内容取得</Text>
          </View>
          <Icon name="angle-right" size={30} style={styles.icon} />
        </View>
        <View style={styles.btnContainer}>
          <Text
            style={styles.btn}
            onPress={() => navigation.navigate('ListAdd')}>
            追加
          </Text>
          <Text
            style={styles.btn}
            onPress={() => navigation.navigate('ListEdit')}>
            編集
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
    fontSize: 30,
    letterSpacing: 3,
    marginTop: 5,
    marginBottom: 15,
  },
  container: {
    height: '80%',
    flexDirection: 'row',
    marginBottom: 15,
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    paddingTop: '50%',
    //backgroundColor: 'green',
  },
  content: {
    flex: 8,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 10,
    //backgroundColor: 'red',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    fontSize: 18,
    marginHorizontal: 40,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 5,
    //backgroundColor: 'yellow',
  },
});

export {options, Body};
