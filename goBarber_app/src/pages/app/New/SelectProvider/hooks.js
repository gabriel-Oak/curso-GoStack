import { useState } from "react";
import { useSelector } from "react-redux";

import api from '~/services/api';

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

    } finally {
      setLoading(false);
    }
  }

  const selectProvider = id => {    
    navigate('SelectDate', { id });
  }

  return {
    fetchProviders,
    providers,
    loading,
    selectProvider
  };
}
