import React  from 'react';
import { View, TouchableOpacity  } from 'react-native';
import { Icon } from 'react-native-elements';
import { Link } from 'react-router-native';
import { SecureStore } from 'expo';

import styles from '../styles/navigation';


export default class Navigation extends React.Component {
  state = {
    id: null
  }

  componentDidMount () {
    SecureStore.getItemAsync('user')
    .then(user => {
      if (user) {
        user = JSON.parse(user)
        this.setState({ id: user.user.id })
      }
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
        <View style={styles.navigation}>
          <Link component={TouchableOpacity} to='/home'>
            <Icon
              name='home'
              type='feather'
              iconStyle={styles.icon}
            />
          </Link>

          <Link component={TouchableOpacity} to='/ranglist'>
            <Icon
              name='award'
              type='feather'
              iconStyle={styles.icon}
            />
          </Link>

          <Link component={TouchableOpacity} to={`/profile/${this.state.id}/`}>
            <Icon
              name='user'
              type='feather'
              iconStyle={styles.icon}
            />
          </Link>

          <Link component={TouchableOpacity} to='/settings'>
            <Icon
              name='settings'
              type='feather'
              iconStyle={styles.icon}
            />
          </Link>
        </View>
    );
  }
}
