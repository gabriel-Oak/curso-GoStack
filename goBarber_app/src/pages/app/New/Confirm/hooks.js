import { useState } from 'react';
import { Alert } from 'react-native';
import { useSelector } from 'react-redux';

import resolveError from '~/shared/utils/resolveError';
import api from '~/services/api';

export const ConfirmHooks = ({ navigate }) => {
  const token = useSelector(state => state.authReducer.token);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (date, provider_id) => {
    try {
      setLoading(true);

      await api.post('appointments', {
        date,
        provider_id
      }, {
        headers: {
          authorization: `baerer ${token}`
        }
      });

      navigate('Dashboard');
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
    loading,
    handleConfirm
  };
}