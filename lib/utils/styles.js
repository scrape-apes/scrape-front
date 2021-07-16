import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  brand: {
    marginTop: '2%',
    marginBottom: '15%',
  },
  text: {
    fontSize: 60,
    // fontFamily: 'Helvetica'
  },
  image: {
    width: '100%',
    flex: 1,
    alignItems: 'center',

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
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    margin: 3
  },
  pressed: {
    backgroundColor: '#1669C2'
  },
  inputArea: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20
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

