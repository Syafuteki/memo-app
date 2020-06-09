import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from 'react-native';

const dummy = () => {
  return 10;
};

const options = ({navigation}) => ({
  title: 'リスト編集',
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
  const Data = [
    {
      id: 1,
      name: '脱税太郎',
    },
    {
      id: 2,
      name: 'カードローン',
    },
    {
      id: 3,
      name: 'Ghosn is gone',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        ListHeaderComponentStyle={styles.flatListHeader}
        ListHeaderComponent={() => {
          //空要素
          return <View />;
        }}
        ListEmptyComponent={() => {
          return (
            <View>
              <Text>作成されたリストはありません</Text>
              <Button title="作成しますか？" onPress={dummy()} />
            </View>
          );
        }}
        data={Data}
        renderItem={({item}) => {
          return (
            <TouchableHighlight underlayColor="#DDDDDD" onPress={dummy}>
              <View style={styles.itemContainer}>
                <Icon name="check" size={25} style={styles.icon} />
                <Text style={styles.itemContent}>{item.name}</Text>
              </View>
            </TouchableHighlight>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.btnContainer}>
        <Text
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}>
          取消
        </Text>
        <Text style={styles.btn}>削除</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList: {
    //height: '80%',
    //backgroundColor: 'red',
  },
  flatListHeader: {
    marginTop: 130,
  },
  itemContainer: {
    
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
    marginRight: 10,
  },
  itemContent: {
    fontSize: 24,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 20,
    //backgroundColor: 'red',
  },
  btnContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
