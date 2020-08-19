const Realm = require('realm');

const ListSchema = {
  name: 'List',
  properties: {
    name: 'string',
    content: 'string',
    date: 'date',
  },
};

const getLists = () => {
  Realm.open({
    path: 'listRealm.Realm',
    schema: [ListSchema],
  })
    .then((realm) => {
      try {
        const lists = realm.objects('List');
        console.log(lists);
        console.log('aaa');
        return lists;
      } catch (e) {
        //* ここアラートかなんか出す
        console.log(e);
      }
    })
    .catch((e) => {
      //* ここアラートかなんか出す
      console.log(e);
    })
    .finally(() => {
      realm.close();
    });
};

getLists();
//export default getLists;
