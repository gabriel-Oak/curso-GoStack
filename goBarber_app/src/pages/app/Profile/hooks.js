import { useState, useRef } from "react"
import { Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import api from '~/services/api';
import UserTypes from "~/store/user/types";
import AuthTypes from "~/store/auth/types";
import resolveError from '~/shared/utils/resolveError';

export const ProfileHooks = () => {
  const user = useSelector(state => state.userReducer.user);
  const token = useSelector(state => state.authReducer.token);
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmmit = async () => {
    try {
      setLoading(true);
      
      const { data } = await api.put(
        'users',
        {
          name,
          email,
          oldPassword,
          password,
          confirmPassword
        },
        {
          headers: {
            authorization: `baerer ${token}`
          }
        }
      );

      setOldPassword(undefined);
      setPassword(undefined);
      setConfirmPassword(undefined);

      dispatch({
        type: UserTypes.SET_USER,
        user: data
      });

      Alert.alert('Sucesso', 'Atualizamos seus dados com sucesso!', [
        { text: 'Ok' }
      ]);

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

  const handleLogOut = () => {
    dispatch({
      type: AuthTypes.SET_TOKEN,
      token: null
    });

    dispatch({
      type: UserTypes.SET_USER,
      user: null
    });
  }

  return {
    name: {
      value: name,
      onChangeText: setName,
      onSubmitEditing: () => {
        emailRef.current.focus();
      }
    },
    email: {
      value: email,
      onChangeText: setEmail,
      ref: emailRef,
      onSubmitEditing: () => {
        oldPasswordRef.current.focus();
      }
    },
    oldPassword: {
      value: oldPassword,
      onChangeText: setOldPassword,
      ref: oldPasswordRef,
      onSubmitEditing: () => {
        passwordRef.current.focus();
      }
    },
    password: {
      value: password,
      onChangeText: setPassword,
      ref: passwordRef,
      onSubmitEditing: () => {
        confirmPasswordRef.current.focus();
      }
    },
    confirmPassword: {
      value: confirmPassword,
      onChangeText: setConfirmPassword,
      ref: confirmPasswordRef,
      onSubmitEditing: handleSubmmit
    },
    handleSubmmit,
    handleLogOut,
    loading
  }
}
