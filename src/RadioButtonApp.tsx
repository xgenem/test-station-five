/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Text, View, FlatList, Button, StyleSheet } from "react-native";
import { buttons } from "./buttons";
import { Divider } from "react-native-paper";
import { RadioButton } from "./components/RadioButton";

export const RadioButtonApp = () => {
  const { menus, rules } = buttons;
  const [menu1, menu2, menu3] = menus;
  const [selected, setSelected] = useState<number[]>([]);

  const icon = (id: string) => {
    return selected.includes(parseInt(id)) ? "check" : "";
  };

  const isDisabled = (id: number, index: number) => {
    let disabledItems = [];
    for (let item of selected) {
      for (let [key, values] of Object.entries(rules)) {
        if ("" + item === key && values.includes(id)) {
          disabledItems.push(id);
        }
      }
    }
    if (selected.length === index && disabledItems.includes(id)) return true;
  };

  const onSelect = (id: string) => {
    let _id = parseInt(id);
    let selectedMenu: number[] = [...selected];

    for (let i = 0; i < menus.length; i++) {
      const ids = menus[i].reduce<string[]>((a, b) => [...a, b.id], []);

      if (ids.includes(id)) {
        if (selectedMenu[i] !== _id) selectedMenu[i] = _id;
        else selectedMenu.splice(i);

        // reset all the the other selected items above i +1
        if (i + 1 <= selectedMenu.length) {
          selectedMenu.splice(i + 1);
        }
      }
    }
    setSelected(selectedMenu);
  };

  const reset = () => {
    setSelected([]);
  };

  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <Button onPress={() => reset()} title="Reset" />
      <FlatList
        data={menu1}
        renderItem={({ item }) => (
          <RadioButton
            label={item.value}
            onPress={() => onSelect(item.id)}
            icon={icon(item.id)}
          />
        )}
      />
      <Divider style={{ height: 10 }} />
      <FlatList
        data={menu2}
        renderItem={({ item }) => (
          <RadioButton
            label={item.value}
            onPress={() => onSelect(item.id)}
            icon={icon(item.id)}
            disabled={isDisabled(parseInt(item.id), 1)}
          />
        )}
      />
      <Divider style={{ height: 10 }} />
      <FlatList
        data={menu3}
        renderItem={({ item }) => (
          <RadioButton
            label={item.value}
            onPress={() => onSelect(item.id)}
            icon={icon(item.id)}
            disabled={isDisabled(parseInt(item.id), 2)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flowContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
