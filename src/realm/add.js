const Realm = require('realm');

const listSchema = {
  name: 'list',
  properties: {
    name: 'string',
    content: 'string',
    date: 'date',
  },
};
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
  Modal,
} from 'react-native';
const add = name => {
  const realm = new Realm({path: 'db', schema: [listSchema]});
  try {
    realm.write(() => {
      const date = new Date();
      realm.create('list', {
        name: name,
        content: 'あいうえお',
        date: date,
      });
    });
    realm.close();
  } catch (e) {
      <Error error={e} />
  }
};
const Error = () => {
  return (
    <Modal>
      <Text>{this.props.error}</Text>
    </Modal>
  );
};
export default add;
