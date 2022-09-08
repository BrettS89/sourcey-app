import AsyncStorage from '@react-native-async-storage/async-storage';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const url = 'http://localhost:3030';

const app = feathers();

const restClient = rest(url);

app.configure(restClient.axios(axios));

const setAuthHeader = async (context: any) => {
  let token: string | undefined; 

  try {
    token = await AsyncStorage.getItem('token') as string | undefined;
  } catch {}

  context.params.headers = Object.assign({}, context.params.headers, {
    'authorization': token,
  });
  return context;
}

app.hooks({
  before: {
    all: [
      setAuthHeader,
    ]
  }
});

export default app;
