import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { weekDayNames } from '../dateutils';

const WeekDaysNames = React.memo(({ firstDay, style }) => {
  const dayNames = weekDayNames(firstDay);
  return dayNames.map((day, index) => (
    <FlatList style={{ padding: 20}} horizontal={true}>
      <Text allowFontScaling={false} key={index} style={style} numberOfLines={1} accessibilityLabel={''}>
        {day}
      </Text>
    </FlatList>
  ));
});
export default WeekDaysNames;
