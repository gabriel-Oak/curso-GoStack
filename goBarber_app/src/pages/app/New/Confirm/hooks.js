import { useState } from "react";
import { Alert } from "react-native";

import resolveError from '~/shared/utils/resolveError';

export const ConfirmHooks = ({ navigate }) => {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);

      // navigate('Dashboard');
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

  return {
    loading,
    handleConfirm
  };
}