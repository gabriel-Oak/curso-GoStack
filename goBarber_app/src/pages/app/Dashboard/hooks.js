import { useState } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import api from '~/services/api';
import resolveError from '~/shared/utils/resolveError';

export const DashboardHooks = () => {
  const token = useSelector(state => state.authReducer.token);
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const { data } = await api.get('appointments', {
        headers: {
          authorization: `baerer ${token}`
        }
      });
      console.log(data);
      
      setAppointments(data);

    } catch (e) {
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
    }

  }


  return {
    appointments,
    fetchAppointments
  };
};