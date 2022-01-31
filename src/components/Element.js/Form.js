import React from "react"
import { useForm } from "react-hook-form"
import styled from "styled-components"

////////// Style /////////////

const StyledForm = styled.form`
  margin-top:44px;
  display: flex;
  flex-direction: column;
  width:100%
  justyfy-content: center;
  padding:0 20px;
  aligne-items: center;
  @media (min-width: 1080px) {
    width: 40%;
    margin-left: 60px;
    margin-top:0px;
    padding:0 0;
  }
`

const StyledInput = styled.input`
  border: 1px solid rgb(228, 229, 232);
  height: 48px;
  font-size: 16px;
  line-height: normal;
  color: rgb(0, 0, 0);
  padding: 4px 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  width: 100%;
  margin-bottom: 24px;
`

const StyledTextarea = styled.textarea`
  border: 1px solid rgb(228, 229, 232);
  min-height: 100px;
  font-size: 16px;
  line-height: normal;
  color: rgb(0, 0, 0);
  padding: 8px 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  width: 100%;
  outline: 0px;
  resize: vertical;
  margin-bottom: 47px;
`
const StyledLabel = styled.label`
  font-weight: 400;
  font-size: 13px;
  color: rgb(34, 34, 34);
  line-height: normal;
  margin-bottom: 8px;
`
const StyledSubmit = styled.input`
  background-color: rgb(10, 78, 214);
  padding: 12px 28px;
  border: 2px solid rgb(10, 78, 214);
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  max-height: 48px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  min-width: 140px;
  outline: 0px;
  text-decoration: none;
  white-space: nowrap;
  margin: 0px;
  line-height: normal;
  @media (min-width: 1080px) {
    :hover {
      color: black;
      background-color: #fff;
      border-color: black;
    }
  }
`
const StyledSelect = styled.select`
  border: 1px solid rgb(228, 229, 232);
  height: 48px;
  font-size: 16px;
  line-height: normal;
  color: rgb(0, 0, 0);
  padding: 4px 0.75rem;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  width: 100%;
  margin-bottom: 24px;
`

export default function Form() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = data => {
    console.log(data)
    StyledForm.value = ""
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledLabel>Your full name</StyledLabel>
      <StyledInput
        type="text"
        {...register("name", { required: true, maxLength: 80 })}
      />
      <StyledLabel for="email">Business email</StyledLabel>
      <StyledInput
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <StyledLabel for="companuName">Company Name</StyledLabel>
      <StyledInput
        type="text"
        {...register("companyName", { required: true, maxLength: 80 })}
      />
      <StyledLabel for="companyUrl">Company URL</StyledLabel>
      <StyledInput type="url" {...register("companyURL", { required: true })} />
      <StyledLabel for="traffic">Monthly traffic</StyledLabel>
      <StyledSelect
        {...register("trafics", { required: true, maxLength: 120 })}
      >
        <option value="100k">Less than 100 000 sesions</option>
        <option value="50k">Less than 50 000 sesions</option>
        <option value="20k">Less than 20 000 sesions</option>
        <option value="10k">Less than 10 000 sesions</option>
      </StyledSelect>
      <StyledLabel for="help">How can we help</StyledLabel>
      <StyledTextarea
        {...register("help", { required: true, maxLength: 1000 })}
      />
      <StyledSubmit type="submit" value="BOOK A DEMO" />
    </StyledForm>
  )
}
