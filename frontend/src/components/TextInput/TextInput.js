import React, {useState} from 'react';
import { v4 } from "uuid";

import styles from './textinput.module.scss';

export default function TextInput({id, label, placeholder, type, value = '', onChange= f=> f, required = false }){
    if (!id){
        id = v4();
    }
    
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
        		<label htmlFor={id}>{label}</label>
		        <span className="ss-icon">check</span>
	    </div>
  
    )
}