import { useSelector } from 'react-redux';
import { contentSelector } from '../redux';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';

import colors from '../shared/colors';
import Playlists from '../modules/content/playlists';
import Playlist from '../modules/content/playlist';
import Account from '../modules/misc/account';
import Discover from '../modules/content/discover';

import Welcome from '../modules/auth/welcome';
import Init from '../modules/auth/init';
import Login from '../modules/auth/login';
import Signup from '../modules/auth/signup';
import SignupVerification from '../modules/auth/signup-verification';

import Header from '../components/header';

const RootStack = createNativeStackNavigator();

const DiscoverStack = createNativeStackNavigator();
const PlaylistsStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();

const DiscoverStackComponent = () => {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen options={{
        header: () => <Header type='title' title='Discover' />,
      }} name='DiscoverScreen' component={Discover} />
    </DiscoverStack.Navigator>
  );
};

const PlaylistsStackComponent = () => {
  const content = useSelector(contentSelector);
  const playlist = content.playlists.find(p => p._id === content.selectedPlaylist);

  return (
    <PlaylistsStack.Navigator>
      <PlaylistsStack.Screen options={{
        header: () => <Header type='title' title='Playlists' addPlaylist />,
      }} name='PlaylistsScreen' component={Playlists} />
      <PlaylistsStack.Screen options={{
        header: () => <Header type='back' title={playlist?.name} />,
      }} name='PlaylistScreen' component={Playlist} />
    </PlaylistsStack.Navigator>
  );
};

const AccountStackComponent = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen options={{
        header: () => <Header type='title' title='Account' />,
      }} name='AccountScreen' component={Account} />
    </AccountStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: colors.background,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'menu';

          if (route.name === 'Playlists') iconName = 'list';
          if (route.name === 'Account') iconName = 'person';
          if (route.name === 'Discover') iconName = 'play';

          //@ts-ignore
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerShown: false,
        tabBarActiveTintColor: colors.main,
      })}
    >
      <Tab.Screen name='Discover' component={DiscoverStackComponent} />
      <Tab.Screen name='Playlists' component={PlaylistsStackComponent} />
      <Tab.Screen name='Account' component={AccountStackComponent} />

    </Tab.Navigator>
  );
};

const rootStack = () => {
  return (
    <>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <RootStack.Screen name='Init' component={Init} />
          <RootStack.Screen name='Home' component={TabNav}/>
          <RootStack.Screen name='Landing' component={Welcome} />
          <RootStack.Screen name='Login' component={Login} />
          <RootStack.Screen name='Signup' component={Signup} />
          <RootStack.Screen name='SignupVerification' component={SignupVerification} />

        </RootStack.Navigator>
      </NavigationContainer>
    </>    
  );
};

export default rootStack;
