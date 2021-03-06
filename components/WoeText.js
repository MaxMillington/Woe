import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const WoeText = (props) => {
  const woeText = props.text.split('|')
  const text = woeText.map((text) => {
    return (
      <Text
        key={text}
        style={styles.text}
      >
        {text}
      </Text>
    )
  })

  return (
    <View style={styles.textContainer}>
      {text}
    </View>
  )
}

WoeText.propTypes = {
  text: PropTypes.string.isRequired
}

export default WoeText

const styles = StyleSheet.create({
  textContainer : {
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  text: {
    marginVertical: 5,
    fontSize: 19,
    fontWeight: 'bold',
  }
});
