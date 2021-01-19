import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default function AuthController(){
    /**
     * choses what component to render - SignIn or SignUp
     */


    const [visibleComponent, setVisibleComponent] = useState('signin');
    // if visibleCmponent === 0, then show SignIn component
    // if visibleCmponent === 1, then show SignUp component

    const changeVisibleComponent = (componentName) => setVisibleComponent(componentName) 

    

    return(
        <>
        {
          {
              'signin': <SignIn {...{changeVisibleComponent}}/>,
              'signup' : <SignUp {...{changeVisibleComponent}}/>
          }[visibleComponent] ||  <SignIn />
        }
        </>
        
    )

}