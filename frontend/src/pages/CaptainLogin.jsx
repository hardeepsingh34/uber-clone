import React from 'react'
import { Link } from 'react-router-dom'
import { object,string } from 'yup'
import { Field, useFormik,Formik } from 'formik'  
import captainLogo from '../assets/images/captainlogo.svg'

const CaptainLogin = () => {
    let captainSchema = object({
        email: string().email().required(),
        password: string().min(6).required()
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: captainSchema,
        onSubmit: values => {
            console.log(values);
            // Handle login logic here
        }
    });

  return (
    <div>
        <div className=' h-screen flex flex-col  justify-between px-5 py-1 '>
            <div>
                <div className='w-20 mb-2'>
                <img src={captainLogo} alt="" />
            </div>
            <Formik>
            <form action="/captain/login" method="post">
            
           <h3 className='m-2'>what's your email</h3>
           <Field 
           required 
           type="email" 
           name="email" 
           value={formik.values.email}
           onChange={formik.handleChange}
            className='bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2' 
            placeholder='email@example.com'/>
            

           <h3 className='m-2 mt-7'>Enter Password </h3>
           <Field 
           required 
           type="password"
           name="password" 
           value={formik.values.password}
           onChange={formik.handleChange}
           className='bg-[#eeeeee] outline-none rounded-sm w-full px-3 py-2' 
           placeholder='Password'/>

           <Field 
           type="submit" 
           value='Login' 
           name='login' 
           onClick={formik.handleSubmit}
           className='bg-black w-full text-white flex justify-center py-2 mt-7 rounded-sm' />
           </form>
           </Formik>
           <div className='flex justify-center items-center mt-4'>

           <h3 className='text-sm'>join a fleet? <Link to="/captain/signup" className='text-blue-500'>Register as a Captain</Link></h3>
           </div>
        </div>
        <Link to="/login" className='bg-orange-600 py-2 flex justify-center rounded-sm mb-7 text-white'>Sign in as User</Link>
            </div>
    </div>
  )
}

export default CaptainLogin