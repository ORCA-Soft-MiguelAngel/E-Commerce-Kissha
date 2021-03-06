import React, { Fragment, useState, useRef } from "react"
import CustomInput from "./CustomInput"

const PasswordInput = ({
  password,
  setPassword,
  enableConfirm,
  onChangeHandler,
  inputMargin,
  inputSize,
  inputPadding,
  labelEffect,
  passwordPlaceholder,
  confirmPlaceholder,
  defaultValue,
  value
}) => {

  //STATES

  const [confirmPassword, setConfirmPassword] = useState("")
  const [invalidPassText, setInvalidPassText] = useState(false)
  const [invalidConfirmPassText, setInvalidConfirmPassText] = useState(false)

  //REFS
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  //HANDLERS
  const handlePassword = () => {
    //taking refs
    let tmpPass = passwordRef.current.value
    let tmpConfirmPass = ""
    if (enableConfirm) {
      tmpConfirmPass = confirmPasswordRef.current.value
    }

    //empty and invalid evaluation for PASSWORD
    if (tmpPass === "") {
      setPassword("")
      setInvalidPassText(false)
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(tmpPass)) {
      setPassword("invalid")
      setInvalidPassText(true)
    } else {
      setPassword("ok")
      setInvalidPassText(false)
    }

    //match evaluation CONFIRM PASSWORD
    if (enableConfirm) {
      if (tmpPass !== "" && tmpConfirmPass !== "") {
        if (tmpPass !== tmpConfirmPass) {
          setConfirmPassword("invalid")
          setInvalidConfirmPassText(true)
        } else {
          setConfirmPassword("ok")
          setInvalidConfirmPassText(false)
        }
      } else {
        setConfirmPassword("")
        setInvalidConfirmPassText(false)
      }
    }
  }

  const onChangePassword = () => {
    const tmpPass = passwordRef.current.value
    let tmpConfirmPass = ""
    if (enableConfirm) {
      tmpConfirmPass = confirmPasswordRef.current.value
    }

    if (password === "invalid") {
      if (tmpPass !== "") {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(tmpPass)) {
          setPassword("ok")
          setInvalidPassText(false)
        }
      } else {
        setPassword("")
        setInvalidPassText(false)
      }
    }

    if (confirmPassword === "invalid") {
      if (tmpConfirmPass !== "") {
        if (tmpPass === tmpConfirmPass) {
          setConfirmPassword("ok")
          setInvalidConfirmPassText(false)
        }
      } else {
        setConfirmPassword("")
        setInvalidConfirmPassText(false)
      }
    }
  }

  return (
    <Fragment>
      <CustomInput
        id="password"
        value={value && value}
        defValue={defaultValue && defaultValue}
        inputSize={inputSize && inputSize}
        inputMargin={inputMargin && inputMargin}
        inputPadding={inputPadding && inputPadding}
        input={[
          "password",
          password,
          handlePassword,
          onChangeHandler,
          null,
          passwordRef,
          onChangePassword,
        ]}
        label={[
          passwordPlaceholder ? passwordPlaceholder : "Password",
          labelEffect && labelEffect,
        ]}
        collapses={[["Invalid Password", invalidPassText]]}
      />
      {enableConfirm && (
        <CustomInput
          id="confirmPassword"
          inputSize={inputSize && inputSize}
          inputMargin={inputMargin && inputMargin}
          inputPadding={inputPadding && inputPadding}
          input={[
            "password",
            confirmPassword,
            handlePassword,
            onChangePassword,
            null,
            confirmPasswordRef,
          ]}
          label={[
            confirmPlaceholder ? confirmPlaceholder : "Confirm Password",
            "inside",
          ]}
          collapses={[["Password doesn't match", invalidConfirmPassText]]}
        />
      )}
    </Fragment>
  )
}

export default PasswordInput
