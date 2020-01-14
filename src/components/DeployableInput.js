import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStore from '../stores/MainStore';
import {
  styles,
  FONT_SIZE_PLACEHOLDER,
  FONT_SIZE_VALUE,
  INPUT_COLOR,
  getMainWidth,
  getInputWidth,
  IMAGE_SIZE
} from './styles/InputStyles';

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
    color: INPUT_COLOR
  },
  listContainer: {
    height: hp('50%')
  },
  listItem: {
    width: wp('70%'),
    borderWidth: 0.5,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32
  },
  listItemTitle: {
    fontSize: 14
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

export default props => {
  const getDesc = item => {
    return props.descName ? item[props.descName] : item.description;
  };

  const getKey = item => {
    return props.keyName ? item[props.keyName] : item.id;
  };

  const renderItem = value => {
    return (
      <TouchableOpacity
        style={ownStyles.listItem}
        onPress={() => {
          props.itemPress(value);
          MainStore.showPopup = false;
        }}>
        <Text style={ownStyles.listItemTitle}>{getDesc(value)}</Text>
      </TouchableOpacity>
    );
  };

  const renderPopup = () => {
    return (
      <View style={ownStyles.listContainer}>
        {props.noKeyExtractor ? (
          <FlatList
            data={
              props.sorted
                ? props.data.sort((a, b) => {
                    return getDesc(a).localeCompare(getDesc(b));
                  })
                : props.data
            }
            renderItem={({item}) => renderItem(item)}
          />
        ) : (
          <FlatList
            data={
              props.sorted
                ? props.data.sort((a, b) => {
                    return getDesc(a).localeCompare(getDesc(b));
                  })
                : props.data
            }
            renderItem={({item}) => renderItem(item)}
            keyExtractor={item => getKey(item).toString()}
          />
        )}
      </View>
    );
  };

  const renderSelectedItem = () => {
    if (props.maskValue !== undefined) {
      return (
        <Text style={ownStyles.text} numberOfLines={1}>
          {props.value !== undefined ? props.maskValue(props.value) : null}
        </Text>
      );
    } else {
      return (
        <Text style={ownStyles.text} numberOfLines={1}>
          {props.value !== undefined ? props.value.description : null}
        </Text>
      );
    }
  };

  return (
    <TouchableOpacity
      style={{...styles.main, width: getMainWidth(props)}}
      onPress={() => {
        if (props.data.length >= 1) {
          MainStore.showPopup = true;
          MainStore.popupContent = renderPopup();
        } else if (props.onEmptyList !== undefined) {
          props.onEmptyList();
        }
      }}>
      <>
        {props.image && <Image style={styles.leftImage} source={props.image} />}
        <View>
          <Text style={ownStyles.placeHolderTop}>{props.placeholder && props.value ? props.placeholder : ''}</Text>
          <View style={{...ownStyles.mainContent, width: getInputWidth(props) - 12}}>
            {props.value === null && <Text style={ownStyles.placeHolder}>{props.placeholder}</Text>}
            {props.value !== null && renderSelectedItem()}
            {props.data.length >= 1 && (
              <Image style={styles.rightBtnArrow} source={require('../../assets/arrow-down.png')} />
            )}
          </View>
          <View style={{...styles.underline, width: getInputWidth(props) - IMAGE_SIZE + 12}} />
          <Text style={styles.error}>{props.error}</Text>
        </View>
      </>
    </TouchableOpacity>
  );
};
