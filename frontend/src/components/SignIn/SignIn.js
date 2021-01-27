import React, {useState} from 'react';
import TextInput from '../TextInput';
import { useSelector, useDispatch } from 'react-redux';

import { setTokens } from '../../redux/slices/authSlice';
import { useInput } from '../../utilities/CustomHooks';
import styles from './signin.module.scss';
import { login } from '../../network/auth';

export default function SignIn({changeVisibleComponent, closeModal}){
    const [emailProps, resetEmail] = useInput("");
    const [passwordProps, resetPassword] = useInput("");
    const [error, setError] = useState(null)
    const dispatch = useDispatch();


    const onLoginClick = async (event) => {
        event.preventDefault();
        
        try{
            const resp = await login(emailProps.value, passwordProps.value);

            const accessToken = resp.access;
            const refreshToken = resp.refresh;
            dispatch(setTokens({accessToken, refreshToken}));
            //I'm not sure if I have to reset all of this 
            resetEmail();
            resetPassword();
            setError(null);
            closeModal();

        }catch(error){
            console.log("Error: ", JSON.stringify(error, null, 4));
            const { status } = error.response;
            if( status === 401){
                setError('Wrong email or password');
            }else{
                setError('Something went wrong, try again later');
            }
        }
    
    }

    return (
        <div className={`box ${styles.mainContainer}`}>

            <div className={`${styles.imageContainer}`}>
                <img className={ styles.logoImage} src="/images/logo-gl2.png" alt="" />              
            </div>

            <p className={styles.mainHeader}>
                Sign In
            </p>

            <div className="block formContainer">
                <form  className="form">
                    
                    <TextInput 
                        {...emailProps} 
                        id = "emailInput" 
                        label="email" 
                        placeholder="E-mail" 
                        type="email" 
                        required
                    >
                        <i className="fa fa-envelope" aria-hidden="true"></i>
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
                        <button className={`button ${styles.myButton}`} onClick={onLoginClick}>
                            Login
                        </button>
                    </div>

                </form>

              
            </div>

            {error &&   <p className="block  is-size-5 has-text-centered has-background-danger-light has-text-danger">
                                    {error}
                                </p>
                    }

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
                    <p 
                        className={`${styles.basicText} ${styles.link}`}
                        onClick= {() => changeVisibleComponent('signup') }
                    >
                        Don't have an account?</p>
                    <p className={`$(styles.basicText} has-text-right`}>Forgot password?</p>
                </div>

            </div>
        </div>
    )
}