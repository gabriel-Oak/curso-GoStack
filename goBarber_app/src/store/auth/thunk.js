import { Alert } from 'react-native';

import AuthTypes from './types';
import UserTypes from '~/store/user/types';
import api from '~/services/api';
import resolveError from '~/shared/utils/resolveError';

export const singInRequest = (payload) => async dispatch => {
  try {
    dispatch({ type: AuthTypes.SEND });

    const { data: { user, token } } = await api.post('session', payload);

    if (user.provider) {
      throw new Error('O usuário não pode ser provedor');
    }

    dispatch({
      type: AuthTypes.SET_TOKEN,
      token
    });
    dispatch({
      type: UserTypes.SET_USER,
      user
    });

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
    dispatch({ type: AuthTypes.COMPLETE });
  }
}

export const singUpRequest = (payload, navigate) => async dispatch => {
  try {
    dispatch({ type: AuthTypes.SEND });

    const { data: { name } } = await api.post('users', payload);

    Alert.alert(
      'Sucesso',
      `Muito bom te ter aqui ${name}, faça login com o email e senha cadastrados`,
      [
        {
          text: 'Entendi',
          style: 'default',
          onPress: () => navigate('SingIn')
        }
      ]
    );

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
    dispatch({ type: AuthTypes.COMPLETE });
  }
}
