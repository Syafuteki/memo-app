import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Main from './src/components/Main';
import * as ListTable from './src/components/ListTable';
import * as ListEdit from './src/components/ListEdit';
import * as ListAdd from './src/components/ListAdd';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main.Body}
          options={Main.options}
        />
        <Stack.Screen
          name="ListTable"
          component={ListTable.Body}
          options={ListTable.options}
        />
        <Stack.Screen
          name="ListEdit"
          component={ListEdit.Body}
          options={ListEdit.options}
        />
        <Stack.Screen
          name="ListAdd"
          component={ListAdd.Body}
          options={ListAdd.options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
