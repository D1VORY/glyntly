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

            <p className={styles.mainHeader}>
                Sign In
            </p>

            <div className="block formContainer">
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
                            required
                    >
                        <i className="fa fa-lock " aria-hidden="true"></i>
                    </TextInput>
                    

                    <div className="control">
                        <button className={`button ${styles.myButton}`}>
                            Login
                        </button>
                    </div>

                </form>
            </div>


            <div className={`block ${styles.socialAuthContainer} `}>
                <p className={`${styles.basicText} has-text-centered`}>
                    or sing in with:
                </p>

                <div className={`block container is-flex is-justify-content-center ${styles.buttonsContainer}` }>
                     
                        <button className={`button ${styles.socialButton}`}>
                            <span className="icon is-small">
                                <img src="images/facebook-icon.svg" alt=""/>
                            </span>
                        </button>
                    

                    
                        <button className={`button ${styles.socialButton}`}>
                            <span className="icon is-small">
                                <img src="images/google-icon.svg" alt=""/>
                            </span>
                        </button>
                   

                    
                        <button className={`button ${styles.socialButton}`}>
                            <span className="icon is-small">
                                <img src="images/twitter-icon.svg" alt=""/>
                            </span>
                        </button>
                    
                </div>


                <div className="block is-flex is-justify-content-space-between">
                    <p className={styles.basicText}>Don't have an account?</p>
                    <p className={`$(styles.basicText} has-text-right`}>Forgot password?</p>
                </div>

            </div>
        </div>
    )
}