import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [bmr, setBMR] = useState(null);

  const calculateBMR = () => {
    let bmrResult = 0;
    if (gender === 'male') {
      bmrResult = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      bmrResult = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    setBMR(bmrResult.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={text => setWeight(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Height (cm):</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={text => setHeight(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Age (years):</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Gender:</Text>
      <Button title="Male" onPress={() => setGender('male')} />
      <Button title="Female" onPress={() => setGender('female')} />
      <Button title="Calculate BMR" onPress={calculateBMR} />
      {bmr !== null && <Text style={styles.result}>Your Basal Metabolic Rate (BMR) is: {bmr} calories/day</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
