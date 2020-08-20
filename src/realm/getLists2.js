const Realm = require('realm');

const ListSchema = {
  name: 'List',
  properties: {
    name: 'string',
    content: 'string',
    date: 'date',
  },
};

const getLists = async () => {
  await Realm.open({
    path: 'listRealm.Realm',
    schema: [ListSchema],
  })
    .then((realm) => {
      const lists = realm.objects('List');
      console.log(lists);
      return lists;
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
