import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";

import { singInRequest } from '~/store/auth/thunk';

const hooks = () => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.authReducer.loading);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const passwordRef = useRef();

  const handleSubmit = () => {
    singInRequest({ email, password })(dispatch);
  }


  return {
    email: {
      value: email,
      onChangeText: setEmail,
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
    handleSubmit
  }
}

export default hooks;
