import { useState } from "react";
import { Alert } from "react-native";

import resolveError from '~/shared/utils/resolveError';
import api from "~/services/api";

export const SelectDateHooks = (navigation) => {
  const { state: { params: { provider } } } = navigation;
  const [time, setTime] = useState(new Date().getTime());
  const [availability, setAvailability] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const changeDate = ({ nativeEvent: { timestamp } }, date) => {
    setVisible(false);
    if (!date) {
      return;
    }

    setTime(timestamp);
  }

  const fetchAvailability = async () => {
    try {
      setLoading(true);

      const { data: { available } } = await api.get(`providers/${provider.id}/available?date=${time}`);

      setAvailability(available);

    } catch (e) {
      console.log(e);
      
      Alert.alert(
        'Erro',
        resolveError(e),
        [
          {
            text: 'Entendi',
            style: 'cancel'
          }
        ]
      );
    } finally {
      setLoading(false);
    }
  }

  const selectTime = timeItem => {    
    navigation.navigate('Confirm', {
      provider,
      timeItem
    });
  }

  return {
    datePicker: {
      time,
      changeDate,
      visible,
      setVisible
    },
    fetchAvailability,
    availability,
    selectTime,
    loading
  };
}