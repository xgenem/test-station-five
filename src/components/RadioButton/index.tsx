import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";

type RadioButtonProps = {
  disabled?: boolean;
  icon?: string;
  label: string;
  onPress: () => void;
};

export const RadioButton = ({
  label,
  onPress,
  disabled = false,
  icon,
}: RadioButtonProps) => (
  <Button
    onPress={onPress}
    disabled={disabled}
    icon={icon}
    style={[styles.button]}
  >
    <Text>{label}</Text>
  </Button>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "flex-start",
    // height: 20,
  },
});
