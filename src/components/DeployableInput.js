import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStore from '../stores/MainStore';
import {
  FONT_SIZE_PLACEHOLDER,
  FONT_SIZE_VALUE,
  getInputWidth,
  getMainWidth,
  IMAGE_SIZE,
  styles
} from './styles/InputStyles';
import {BUTTONS, PRIMARY} from '../screens/styles/Commons';

const ownStyles = StyleSheet.create({
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeHolder: {
    fontSize: FONT_SIZE_VALUE,
    color: '#a5a5a5'
  },
  placeHolderTop: {
    fontSize: FONT_SIZE_PLACEHOLDER,
    color: 'gray',
    marginTop: wp('4%'),
    marginBottom: -5
  },
  text: {
    fontSize: FONT_SIZE_VALUE,
    color: PRIMARY
  },
  listContainer: {
    height: hp('50%')
  },
  listItem: {
    width: wp('70%'),
    borderWidth: 0.5,
    borderColor: 'lightgray',
    backgroundColor: BUTTONS,
    justifyContent: 'center',
    alignItems: 'center',
    height: 32
  },
  listItemTitle: {
    fontSize: 14,
    color: PRIMARY
  },
  rightBtnArrow: {
    width: 30,
    height: 40,
    position: 'absolute',
    end: 0,
    padding: 14,
    resizeMode: 'contain'
  }
});

export default ({
  value,
  placeholder,
  data,
  descName,
  keyName,
  image,
  itemPress,
  noKeyExtractor,
  sorted,
  maskValue,
  onEmptyList,
  width,
  error
}) => {
  const getDesc = item => {
    return descName ? item[descName] : item.description;
  };

  const getKey = item => {
    return keyName ? item[keyName] : item.id;
  };

  const renderItem = value => {
    return (
      <TouchableOpacity
        style={ownStyles.listItem}
        onPress={() => {
          itemPress(value);
          MainStore.showPopup = false;
        }}>
        <Text style={ownStyles.listItemTitle}>{getDesc(value)}</Text>
      </TouchableOpacity>
    );
  };

  const renderPopup = () => {
    return (
      <View style={ownStyles.listContainer}>
        {noKeyExtractor ? (
          <FlatList
            data={
              sorted
                ? data.sort((a, b) => {
                    return getDesc(a).localeCompare(getDesc(b));
                  })
                : data
            }
            renderItem={({item}) => renderItem(item)}
          />
        ) : (
          <FlatList
            data={
              sorted
                ? data.sort((a, b) => {
                    return getDesc(a).localeCompare(getDesc(b));
                  })
                : data
            }
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => getKey(item).toString()}
          />
        )}
      </View>
    );
  };

  const renderSelectedItem = () => {
    if (maskValue !== undefined) {
      return (
        <Text style={ownStyles.text} numberOfLines={1}>
          {value !== undefined ? maskValue(value) : null}
        </Text>
      );
    } else {
      return (
        <Text style={ownStyles.text} numberOfLines={1}>
          {value !== undefined ? value.description : null}
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={{...styles.main, width: getMainWidth(width)}}
      onPress={() => {
        if (data.length >= 1) {
          MainStore.showPopup = true;
          MainStore.popupContent = renderPopup();
        } else if (onEmptyList !== undefined) {
          onEmptyList();
        }
      }}>
      <>
        {image && <Image style={styles.leftImage} source={image} tintColor={PRIMARY} />}
        <View>
          <Text style={ownStyles.placeHolderTop}>{placeholder && value ? placeholder : ''}</Text>
          <View style={{...ownStyles.mainContent, width: getInputWidth(width, image) - 12}}>
            {value === null && <Text style={ownStyles.placeHolder}>{placeholder}</Text>}
            {value !== null && renderSelectedItem()}
            {data.length >= 1 && <Image style={styles.rightBtnArrow} source={require('../assets/arrow-down.png')} tintColor={PRIMARY} />}
          </View>
          <View style={{...styles.underline, width: getInputWidth(width, image) - IMAGE_SIZE + 12}} />
          <Text style={styles.error}>{error}</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};
