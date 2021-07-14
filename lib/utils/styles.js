import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    width: 200,
    margin: 4
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 3,

  }
});

export const handlePressStyle = (pressed) => {
  return [
    {
      // changes background color when button is pressed
      backgroundColor: pressed
        ? '#1669C2'
        : '#007AFF'
    },
    // default styles of the pressable
    styles.button,
  ];
}

