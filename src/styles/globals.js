import { StyleSheet } from "react-native";

export const colors = {
  primary: "#e7e7e7"
}

export const pageColor = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: "#fff",
    flex: 1
  }
})

export const elements = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#3f6186",
    paddingVertical: 20,
    alignItems: 'center',
    width: 200,
    borderRadius: 30
  },
  button: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: '700'
  }
})