import { ActivityIndicator, Animated, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { getStorageItem } from '../../services/localStorage';
import ValidationError from '../elements/ValidationError';
import { codeRegistration, resendConfirmationCode } from '../../services/Auth';
import { useNavigation } from '@react-navigation/native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from '../../styles/UserVerfication.styles';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 6;
const source = {
  uri:
    'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const UserVerification = () => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [response, setResponse] = useState({ error: false, message: '' });
  const [isLoading, setIsLoading] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigation = useNavigation();

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  const delayNavigateToLogin = (isSuccess) => {
    setTimeout(() => {
      navigation.navigate('Home', { isSuccess })
    }, 1000)
  }

  const submitVerification = () => {
    if(value.length <= 5) {
      setHasError(true);
    } else {
      getStorageItem('registeredEmail')
        .then(email => {
          codeRegistration(email, value)
            .then(() => {
              setHasError(false);
              setResponse({error: false });
              delayNavigateToLogin(true);
            })
            .catch(() => {
              setHasError(false);
              setResponse({ error: true, message: 'Invalid code, please check again.'});
            })
        }).catch(() => {
          setHasError(false);
          setResponse({ error: true, message: 'No email on file.' })
        })
    }
  }

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we sent to your email address.
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <View style={styles.errorValidationText}>
        {hasError && <ValidationError message={'Please make sure your code is 6 digits'}/>}
      </View>
      <View style={styles.errorValidationText}>
        {response.error && <ValidationError message={response.message}/>}
      </View>
      <View style={styles.resendView}>
        <Text>
          Didn't receive a code?
          <TouchableOpacity style={styles.resendButtonText} onPress={resendConfirmationCode}> 
            <Text style={styles.resendButtonColor}> Resend</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <View style={styles.nextButtonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={submitVerification} disabled={isLoading ? true : false}>
          {isLoading ? (
            <ActivityIndicator size="large" style={styles.loadingIndicator}/>
          ) : (
            <Text style={styles.nextButtonText}>Verify</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserVerification;
