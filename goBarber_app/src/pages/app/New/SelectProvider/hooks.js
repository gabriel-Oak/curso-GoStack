import { useState } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

import api from '~/services/api';
import resolveError from '~/shared/utils/resolveError';

export const SelecProviderHooks = ({ navigation: { navigate } }) => {
  const token = useSelector(state => state.authReducer.token);

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProviders = async () => {
    try {
      setLoading(true);

      const { data } = await api.get('providers', {
        headers: {
          authorization: `baerer ${token}`
        }
      });

      setProviders(data);
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
    } finally {
      setLoading(false);
    }
  }

  const selectProvider = provider => {    
    navigate('SelectDate', { provicer });
  }

  return {
    fetchProviders,
    providers,
    loading,
    selectProvider
  };
}
