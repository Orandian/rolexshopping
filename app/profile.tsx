import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Colors from "@/constants/Colors";
import { useUserProfile } from "@/Provider/ProfileProvider";

const ProfileScreen = () => {
  const { name, email, password, updateProfile } = useUserProfile();

  const [localName, setLocalName] = useState(name);
  const [localEmail, setLocalEmail] = useState(email);
  const [localPassword, setLocalPassword] = useState(password);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});

  useEffect(() => {
    setLocalName(name);
    setLocalEmail(email);
    setLocalPassword(password);
  }, [name, email, password]);

  const validate = () => {
    const newErrors: { name?: string; email?: string; password?: string } = {};
    if (!localName.trim()) newErrors.name = "Name is required";
    if (!localEmail.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(localEmail)) {
      newErrors.email = "Email is invalid";
    }
    if (!localPassword.trim()) {
      newErrors.password = "Password is required";
    } else if (localPassword.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleUpdate = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    updateProfile(localName, localEmail, localPassword);
    Alert.alert(
      "Profile Updated",
      `Name: ${localName}\nEmail: ${localEmail}\nPassword: ${"*".repeat(localPassword.length)}`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Confirm",
          onPress: () => updateProfile(localName, localEmail, localPassword),
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
    setErrors({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={localName}
        onChangeText={setLocalName}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={localEmail}
        onChangeText={setLocalEmail}
        keyboardType="email-address"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={localPassword}
        onChangeText={setLocalPassword}
        secureTextEntry
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: Colors.light,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
