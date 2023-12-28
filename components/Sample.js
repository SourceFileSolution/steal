import React, { useState } from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const DropdownExample = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const dropdownItems = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text>Select an option:</Text>
      <RNPickerSelect
        placeholder={{ label: "Select an option...", value: null }}
        items={dropdownItems}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      <Text>Selected Value: {selectedValue}</Text>
    </View>
  );
};

export default DropdownExample;
