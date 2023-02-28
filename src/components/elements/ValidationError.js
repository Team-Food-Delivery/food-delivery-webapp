import { Text, StyleSheet } from 'react-native';

const ValidationError = ({message}) => {
  const style = StyleSheet.create({
    validationStyle: {
      color:'red',
      fontSize: '0.8em',
      marginBottom: 10,
      marginLeft: 15
    }
  })
  if(message) {
    return (
      <Text style={style.validationStyle}>
        {message}
      </Text>
    )
  }
  return <></>
}

export default ValidationError;