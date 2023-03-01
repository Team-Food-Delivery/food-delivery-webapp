import { StyleSheet, Dimensions } from 'react-native';

export const CELL_SIZE = Dimensions.get('screen').width / 9;
export const CELL_BORDER_RADIUS = 8;
export const DEFAULT_CELL_BG_COLOR = '#fff';
export const NOT_EMPTY_CELL_BG_COLOR = '#3557b7';
export const ACTIVE_CELL_BG_COLOR = '#f7fafe';

const styles = StyleSheet.create({
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: CELL_SIZE,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: 'center',
    borderRadius: CELL_BORDER_RADIUS,
    color: '#3759b8',
    backgroundColor: '#fff',

    // IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },

  // =======================

  root: {
    minHeight: 800,
    maxWidth: Dimensions.get('window').width,
    padding: 20,
    margin: "auto"
  },
  title: {
    paddingTop: 50,
    color: '#000',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 40,
  },
  icon: {
    width: 217 / 2.4,
    height: 158 / 2.4,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subTitle: {
    paddingTop: 30,
    color: '#000',
    textAlign: 'center',
  },
  errorValidationText: {
    paddingTop: 10,
    display: "flex",
    flexDirection:'row',
    justifyContent: "center",
  },
  resendView: {
    marginTop: 10,
    display: "flex",
    flexDirection:'row',
    justifyContent: "center",
  },
  resendButtonText: {
    marginTop: -3
  },
  resendButtonColor: {
    color: "blue",
  },
  nextButtonContainer: {
    marginTop: 30,
    borderRadius: 60,
    height: 60,
    backgroundColor: '#3557b7',
    minWidth: 200,
    maxWidth: 300,
  },
  nextButtonText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    color: '#fff',
    fontWeight: '700',
  },
});

export default styles;
