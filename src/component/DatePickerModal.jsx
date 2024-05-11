import React, { useState } from 'react';
import { Button, View,  Platform } from 'react-native';
import { TextInput, } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerModal = ({ date, setDate }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const hideDatePickerModal = () => {
    setShowDatePicker(false);
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Select Date"
        placeholder="Select Date"
        onFocus={showDatePickerModal}
        value={date.toDateString()} 
        editable={true} 
        left={<TextInput.Icon icon="calendar" color="#EB8563" />}
        style={{color:"#ffffff"}}
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{color:"#ffffff"}}
          onTouchCancel={hideDatePickerModal} // To handle the cancel event on Android
        />
      )}
    </View>
  );
};

export default DatePickerModal;
