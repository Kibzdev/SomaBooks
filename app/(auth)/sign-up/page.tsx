"use client"

import AuthForm from '../../../components/AuthForm'
import { signUpSchema } from '../../../lib/validations'


const page = () => (
  <AuthForm type="SIGN_UP" schema={signUpSchema} defaultValues={{
    email: "",
    password: "",
    fullName: "",
    universityid: 0,
    universityCard: "",
  }}
   onSubmit={() => {}}
  />
)
export default page