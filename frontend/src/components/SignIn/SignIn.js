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

            <p>
                Sign In
            </p>

            <div className="formContainer">
                <form action="" className="form">
                    
                    <TextInput 
                        {...emailProps} 
                        id = "emailInput" 
                        label="email" 
                        placeholder="E-mail" 
                        type="email" 
                        required
                    >
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </TextInput>
                   
                   <TextInput 
                            {...passwordProps} 
                            id = "passwordInput" 
                            label="password" 
                            placeholder="Password" 
                            type="password" 
                            required>
                        <i className="fa fa-lock " aria-hidden="true"></i>
                    </TextInput>
                    

                    <input type="button" value="Login" onClick={() => console.log(emailProps)}/>

                </form>
            </div>
        </div>
    )
}