const Realm = require('realm');

const getLists = () => {
  //const realm = new Realm({path: 'db', schema: [listSchema]});
  try {
    const lists = realm.objects('List').filtered('listName.@size > 0');
    let result = [];
    if (lists.length == 0) {
      result = '記録なし';
    } else {
      lists.forEach((objects, index) => {
        result[index] = objects.name;
      });
    }
    realm.close();
  } catch (e) {}
};

export default getLists;