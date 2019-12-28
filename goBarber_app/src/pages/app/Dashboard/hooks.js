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

  const cancelAppointment = async id => {
    try {
      console.log(id);

      const { data } = await api.delete(`appointments/${id}`, {
        headers: {
          authorization: `baerer ${token}`
        }
      });
      const tmp = appointments.map(appointment => {
        if (appointment.id !== id) {
          return appointment;
        }
        return {
          ...appointment,
          canceled_at: new Date,
          cancelable: false
        }
      });

      setAppointments(tmp);

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
    cancelAppointment,
    fetchAppointments
  };
};