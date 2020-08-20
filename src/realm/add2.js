const Realm = require('realm');

const ListSchema = {
  name: 'List',
  properties: {
    name: 'string',
    content: 'string',
    date: 'date',
  },
};

const add = (name) => {
  const date = new Date();
  Realm.open({
    path: 'listRealm.Realm',
    schema: [ListSchema],
  })
    .then((realm) => {
      try {
        realm.write(() => {
          realm.create('List', {name: name, content: '', date: date});
        });
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
add('wata');
//export default add;
