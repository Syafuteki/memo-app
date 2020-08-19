import Icon from 'react-native-vector-icons/FontAwesome';
import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from 'react-native';
import getLists from '../realm/getLists2';

const dummy = () => {
  return 10;
};

const options = ({navigation}) => ({
  title: 'リスト一覧',
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
      name="close"
      size={30}
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        color: '#ffffff',
        paddingRight: 20,
      }}
    />
  ),
});

const Body = () => {
  const array = getLists();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
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
        data={array}
        renderItem={({item}) => {
          return (
            <View style={styles.itemContainer}>
              <Text
                onPress={() => {
                  dummy();
                }}
                style={styles.itemContent}>
                {item.name}
              </Text>
            </View>
          );
        }}
        //keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
  itemContent: {
    fontSize: 24,
    paddingVertical: 5,
    paddingLeft: 5,
    paddingRight: 20,
    //backgroundColor: 'red',
  },
});

export {options, Body};
