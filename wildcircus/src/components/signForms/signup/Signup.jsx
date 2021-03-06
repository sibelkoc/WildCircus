import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from '../../formElements/Input';
import signUp from '../signUpFetch';
import useGlobalState from '../../hooks/useGlobalState';
import { Link } from 'react-router-dom';
import './Signup.css';
import '../Sign.css';

function Signup() {

    const [infoMessage, setInfoMessage] = useState(null);
    const [redirection, setRedirection] = useState(null);
    const { userStateConnect, user } = useGlobalState();

    const inputsRef = {
        email: useRef(null),
        password: useRef(null)
    }

    const userConnect = async function connectUser (event) {
        event.preventDefault();

        Object.values(inputsRef).forEach(input => input.current.classList.remove('error'))

        const myBody = {
            "email": inputsRef.email.current.value,
            "password": inputsRef.password.current.value
        }

        signUp(myBody)
        .then(result => {
            const { alert, status, inputs, data } = result;

            // Initialisation du global state (user)
            if (data) {
                const { id, firstname, lastname, role } = data;
                userStateConnect({ id, firstname, lastname, role });
            }

            setInfoMessage(alert);

            if (status === 'ERROR') {
                if (inputs) {
                    inputs.forEach((input) => {
                        inputsRef[input].current.classList.add('error');
                    });
                }
            } else if (status === 'SUCCESS') {
                setTimeout(() => setRedirection(<Redirect to="/" />), 2500)
            }
        });
    }

    return (
            <div className='sign-ctn'>
               <div className="titleofall"><h1>connexion</h1></div>
                { redirection }
                {
                    infoMessage && (
                        <div className={`info--message ${infoMessage.type}`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="icon"/>
                            <span>{infoMessage.text}</span>
                            <FontAwesomeIcon icon={faTimes} className="close" onClick={() => setInfoMessage(null) } />
                        </div>
                    )
                }
                <form className='sign-form' onSubmit={userConnect}>
                    <Input
                        label={{ for: 'signup-email', text: 'Email' }}
                        attributes={{ type:'email', name: 'email', id: 'signup-email' }}
                        reference={inputsRef.email}
                    />
                    <Input
                        label={{ for: 'signup-password', text: 'Mot de passe' }}
                        attributes={{ type:'password', name: 'password', id: 'signup-password' }}
                        reference={inputsRef.password}
                    />
                    <Link to="/signin" className="toSignin">s'inscrire</Link>
                    <button type='submit' className='btn'>Se connecter</button>
                </form>
            </div>
    )
}

export default Signup;
