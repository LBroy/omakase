import React, {
  Component
} from 'react';
import {
  StyleSheet, View, ListView
} from 'react-native';
import {
  Sizes, Colors
} from '../../../res/Constants';
import Database, {
  Firebase
} from '../../utils/Firebase';

// components
import Activity from './Activity';
import BlankActivity from './BlankActivity';
import Swipeout from 'react-native-swipeout';

export default class BookingSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };

    this.ref = Database.ref(
      `bookings/${this.props.bookingId}/itinerary`
    );

    console.log(this.props.bookingId);
  }

  componentDidMount() {
    this.listener = this.ref.on('value', data => {
      data.exists()
      && this.setState({
        data: this.state.data.cloneWithRows(
          Object.keys(data.val())
        )
      });
    });
  }

  renderRow(activityId) {
    return (
      <Swipeout
        right={[
          {
            text: 'Remove',
            color: Colors.AlternateText,
            backgroundColor: Colors.Red
          }
        ]}>
        <Activity
          thin
          activityId={activityId} />
      </Swipeout>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          enableEmptySections
          removeClippedSubviews
          initialListSize={0}
          renderRow={this.renderRow}
          dataSource={this.state.data}
          scrollRenderAheadDistance={6} />
        <BlankActivity
          style={styles.blank} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Sizes.InnerFrame,
    alignSelf: 'stretch'
  },

  blank: {
    marginTop: 5
  }
});
