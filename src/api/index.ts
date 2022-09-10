import AsyncStorage from '@react-native-async-storage/async-storage';
import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import axios from 'axios';

const getUrl = (env: 'local' | 'dev' | 'prod') => {
  switch(env) {
    case 'local':
      return 'http://localhost:3030';

    case 'dev':
      return 'https://bls.ngrok.io/sourcey-api-dev';
  }
}

const app = feathers();

const restClient = rest(getUrl('dev'));

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
