import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const SettingsOptionItem = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <Icon name={icon} size={22} color="#000" />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Feather name="chevron-right" size={20} color="#777" />
    </TouchableOpacity>
  );
};

export default SettingsOptionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 15,
    marginLeft: 15,
    color: '#000',
    fontWeight: '500',
  },
});
