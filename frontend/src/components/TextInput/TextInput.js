import React, {useState} from 'react';
import { v4 } from "uuid";

import styles from './textinput.module.scss';

export default function TextInput({
                                    id, 
                                    label,
                                    placeholder, 
                                    type, 
                                    children,
                                    value = '', 
                                    onChange= f=> f, 
                                    required = false }){


    if (!id){
        id = v4();
    }
   // label = 'pass\nword'
    //const id = v4();

    return(
    
        <div className={`${styles.field}`}>
                <input 
                    type={type} 
                    id={id} 
                    placeholder={placeholder} 
                    value= {value} 
                    onChange={onChange} 
                    required={required}
                    className={value && styles.focused }
                />
        		<label className={styles.lowerLayer} htmlFor={id}>
                    <span className={styles.labelIcon}>
                     {children}
                    </span>
                 
                    <span className={styles.labelText}>{label}</span>
                </label>
                
	    </div>
  
    )
}