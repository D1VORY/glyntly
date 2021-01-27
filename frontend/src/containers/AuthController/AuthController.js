import React, {useState} from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

export default function AuthController({closeModal}){
    /**
     * choses what component to render - SignIn or SignUp
     */


    const [visibleComponent, setVisibleComponent] = useState('signin');
    // if visibleCmponent === signin, then show SignIn component
    // if visibleCmponent === signup, then show SignUp component

    const changeVisibleComponent = (componentName) => setVisibleComponent(componentName) 

    return(
        <>
        {
          {
              'signin': <SignIn {...{changeVisibleComponent, closeModal}}/>,
              'signup' : <SignUp {...{changeVisibleComponent, closeModal}}/>
          }[visibleComponent] ||  <SignIn />
        }
        </>
        
    )

}