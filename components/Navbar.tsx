import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GoogleLogin, GoogleLogout} from 'react-google-login'
import { AiOutlineLogout} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'

import Logo from '../utils/toktok-logo.png';


const Navbar = () => {
  return (
    <div className='w-full flex justify-start items-center border-b-2 border-gray-200 py-2 px-4'>

        <div className='w-[100px] md:w-[130px]'>
            <Image
            className='cursor-pointer'
            src={Logo}
            alt="TokTok"
            layout='responsive'
            />
        </div>
    </div>
  )
}

export default Navbar