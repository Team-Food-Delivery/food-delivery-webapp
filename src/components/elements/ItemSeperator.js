import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  itemSeperator: { 
    height: 0.5, 
    width: '100%', 
    backgroundColor: '#C8C8C8' 
  }
})

const ItemSeparator = ({ styles: ItemSeparatorPropStyles }) => {
  return <View style={[styles.itemSeperator, ItemSeparatorPropStyles]} />
};

export default ItemSeparator;