import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

type Props = {
  children: React.ReactNode;
};

const PrimaryButton = ({ children }: Props) => {
  return (
    <Pressable>
      <View>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
