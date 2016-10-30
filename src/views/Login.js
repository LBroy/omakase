import React, {
  Component
} from 'react';
import {
  View, Text, StyleSheet, Image
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';
import {
  Colors, Sizes
} from '../../res/Constants';

// components
import FacebookButton from '../components/account/FacebookButton';
import Photo from '../components/common/Photo';
import Button from '../components/common/Button';

/**
 * If fetching user is unsuccessful, allow logging with existing acct
 * or register for a new one
 */
export default class Login extends Component {
  componentDidMount() {
    StatusBar.setHidden(true, 'slide');
  }

  render() {
    return (
      <Photo
        photoId='login'
        style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../../res/img/logo.png')}
                style={styles.logo} />
            </View>
            <Text style={[styles.text, styles.title]}>
              A better way to travel
            </Text>
            <Text style={styles.text}>
              Explore the world for free by using your smartphone's camera
            </Text>
          </View>
        </View>
        <Button
          squareBorders
          style={{
            paddingTop: Sizes.InnerFrame,
            paddingBottom: Sizes.InnerFrame
          }}
          color={Colors.Facebook}
          fontColor={Colors.Text}
          fontAwesome
          icon='facebook'
          label='Login with Facebook' />
      </Photo>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.Background
  },

  header: {
    flex: 1,
    padding: Sizes.InnerFrame,
    backgroundColor: Colors.Overlay
  },

  headerContainer: {
    alignSelf: 'stretch',
    borderRadius: 10
  },

  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.LightWhiteOverlay,
    overflow: 'hidden',
    marginBottom: Sizes.InnerFrame * 3
  },

  logo: {
    width: 25,
    height: 25
  },

  text: {
    fontSize: Sizes.H1 * 2,
    color: Colors.Text,
    backgroundColor: Colors.Transparent,
    fontWeight: '100'
  },

  title: {
    fontSize: Sizes.H1 * 2.5,
    fontWeight: '200'
  }
});
