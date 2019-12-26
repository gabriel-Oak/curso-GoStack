import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

import { singUpRequest } from '~/store/auth/thunk';

export const singUpHooks = ({ navigation }) => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.authReducer.loading);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    singUpRequest(
      {
        name,
        email,
        password
      },
      navigation.navigate
    )(dispatch);
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
        passwordRef.current.focus();
      }
    },
    password: {
      value: password,
      onChangeText: setPassword,
      ref: passwordRef,
      onSubmitEditing: handleSubmit
    },
    loading,
    handleSubmit,
    navigation
  }
}
