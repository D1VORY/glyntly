import React, {useState} from 'react';
import TextInput from '../TextInput';
import { useDispatch } from 'react-redux';

import { setTokens } from '../../redux/slices/authSlice';
import { useInput } from '../../utilities/CustomHooks';
import styles from './signup.module.scss';
import { register } from '../../network/auth';

export default function SignUp({changeVisibleComponent, closeModal}){
    const [emailProps, resetEmail] = useInput("");
    const [password1Props, resetPassword1] = useInput("")
    const [password2Props, resetPassword2] = useInput("")
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const onRegisterClick = async event => {
        event.preventDefault();
        //check if passwords are good
        //TODO: vallidate passwords

        try{
            const resp = await register(emailProps.value, password1Props.value);

            const accessToken = resp.access;
            const refreshToken = resp.refresh;
            dispatch(setTokens({accessToken, refreshToken}));
            
          
            closeModal();

        }catch(error){
           // console.log("Error: ", JSON.stringify(error, null, 4));
            const { status, data } = error.response;
            
            if( status === 400){
                //set error as the first value of object
                setError(`${Object.keys(data)[0]} : ${data[Object.keys(data)[0]]}` );
                console.log(error.response);
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
                Sign Up
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
                            {...password1Props} 
                            id = "passwordInput1" 
                            label="password 1" 
                            placeholder="Password" 
                            type="password" 
                            required
                    >
                        <i className="fa fa-lock " aria-hidden="true"></i>
                    </TextInput>

                    <TextInput 
                            {...password2Props} 
                            id = "passwordInput2" 
                            label="password 2" 
                            placeholder="Repeat password" 
                            type="password" 
                            required
                    >
                        <i className="fa fa-lock " aria-hidden="true"></i>
                    </TextInput>
                    

                    <div className="control">
                        <button className={`button ${styles.myButton}`} onClick={onRegisterClick}>
                            Register
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
                    or sing up with:
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
                        onClick= {() => changeVisibleComponent('signin') }
                    >
                        Already have an account?</p>
                    <p className={`$(styles.basicText} has-text-right`}>Forgot password?</p>
                </div>

            </div>
        </div>
    )
    
}

