import { useState, useRef } from "react"
import { useSelector } from "react-redux";

export const ProfileHooks = () => {
  const user = useSelector(state => state.userReducer.user);
  
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const emailRef = useRef();
  const passwordRef = useRef();
  
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
    }
  }
}
