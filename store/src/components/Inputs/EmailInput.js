import React, { useState } from "react"
import { Form, Collapse } from "react-bootstrap"
import styled from "styled-components"
import CustomInput from "./CustomInput"

const FormInput = styled(Form.Control)`
  height: 48px;
`

const EmailInput = ({ email, setEmail, fetchEmails }) => {
  const [invalidText, setInvalidText] = useState()
  const [existText, setExistText] = useState()

  const validationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const handleEmail = e => {
    let tmpEmail = e.target.value

    let count = 0

    if (tmpEmail === "") {
      setEmail("")
      setInvalidText(false)
      setExistText(false)
      return
    }

    if (!validationRegex.test(tmpEmail)) {
      setEmail("invalid")
      setExistText(false)
      setInvalidText(true)
      return
    }
    //do the fetch here

    //exist evaluation
    fetchEmails.map(iteratedEmail => tmpEmail === iteratedEmail && count++)
    if (count > 0) {
      setEmail("exist")
      setInvalidText(false)
      setExistText(true)
      return
    } else {
      setEmail("ok")
      setInvalidText(false)
      setExistText(false)
      return
    }
  }

  return (
    <CustomInput
      id="email"
      input={["email", email, handleEmail]}
      label={["Email"]}
      collapses={[
        ["Invalid Email", invalidText],
        ["This Email is already used.", existText],
      ]}
    />
  )
}

export default EmailInput
