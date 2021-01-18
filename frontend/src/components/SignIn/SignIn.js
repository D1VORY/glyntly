import React, {useState} from 'react';
import TextInput from '../TextInput';
import { useInput } from '../../utilities/CustomHooks';

import styles from './signin.module.scss';

export default function SignIn(){
    const [emailProps, resetEmail] = useInput("");
    const [passwordProps, resetPassword] = useInput("")


    return (
        <div className={`box ${styles.mainContainer}`}>

            <div className={`${styles.imageContainer}`}>
                <img className={ styles.logoImage} src="/images/logo-gl2.png" alt="" />              
            </div>

            <div className="formContainer">
                <form action="" className="form">
                    
                    <TextInput 
                        {...emailProps} 
                        id = "emailInput" 
                        label="email" 
                        placeholder="E-mail" 
                        type="email" 
                        required
                    />
                   
                   <TextInput 
                        {...passwordProps} 
                        id = "passwordInput" 
                        label="password" 
                        placeholder="Password" 
                        type="password" 
                        required
                    />
                    

                    <input type="button" value="Login" onClick={() => console.log(emailProps)}/>

                </form>
            </div>
        </div>
    )
}