import React, { useMemo } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { DateButton, DateText } from './styles';

const DatePicker = ({ setVisible, visible, time, changeDate }) => {

  const parsedTime = useMemo(() => (
    format(new Date(time), "dd 'de' MMMM 'de' yyyy", { locale: pt })
  ), [time]);

  return (
    <>
      <DateButton
        onPress={() => { setVisible(true) }}
      >
        <Icon
          name='event'
          size={20}
          color='#fff'
        />

        <DateText>
          {parsedTime}
        </DateText>
      </DateButton>

      {
        visible &&
        (
          <DateTimePicker
            value={time}
            mode='date'
            display='default'
            onChange={changeDate}
            minimumDate={new Date()}

          />
        )
      }
    </>
  );
}

export default DatePicker;
