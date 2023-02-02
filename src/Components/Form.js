import { useState } from 'react';
import Results from './Results';
//import Results from './Results';

const Form = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [errorConfMsg, setErrorConfMsg] = useState("");
    let [submit, setSubmit] = useState(false);

    const inscription = () => {
 console.log(submit);
        setSubmit(!submit);
        if (submit === false) {
            console.log("F");

        } else {
            console.log("T");
            <Results className="test2"/>
        }
       

    }


    return (<>

        <form className='SignupForm' action="" onSubmit={(event) => {
            event.preventDefault();
            if (password.length <= 1) {
                setErrorMsg("La longueur de votre mot de passe doit être supérieure à 8"); // Je donne comme nouvelle valeur à mon message d'erreur une string
            } else {
                setErrorMsg(""); // Je fais disparaître mon message d'erreur
            }
            if (password !== passwordConfirmation) {
                console.log("MDP différents");
                setErrorConfMsg("Les mots de passe doivent être identiques");
            } else {
                console.log("OK");
                setErrorConfMsg(""); // Je fais disparaître mon message d'erreur
            }



        }
        }>
            <label htmlFor="">Nom :
                <input type="text" name="username" placeholder='John Doe' value={username} onChange={
                    (event) => {
                        console.log(event.target.value);  //! event.target.value correspond au contenu de mon input           
                        setUsername(event.target.value);  // Je stocke dans mon state le contenu de mon input
                    }
                }
                /></label>
            <label htmlFor="">Votre email :
                <input type="email" name="email" placeholder='emailSympa@mail.com' value={email} onChange={(event) => {
                    console.log(event.target.value);
                    setEmail(event.target.value);
                }} /></label>

            <label htmlFor="">Votre mot de passe :
                <input type="password" name="password" autoComplete='off' placeholder='password' value={password} onChange={(event) => { // Chrome veut qu'on mette un attribut autoComplete
                    console.log(event.target.value);
                    setPassword(event.target.value);
                }} />
                {/* Le contenu de ma balise p dépend du state errorMsg */}
                <p className={errorMsg && "red"}>{errorMsg}</p>
            </label>

            <label htmlFor="">Veuillez confirmer votre mot de passe :
                <input type="password" name="passwordConfirmation" autoComplete='off' placeholder='confirm your password' value={passwordConfirmation} onChange={(event) => {
                    console.log(event.target.value);
                    setPasswordConfirmation(event.target.value);
                }} />
                {/* Le contenu de ma balise p dépend du state errorConfMsg */}
                <p className={errorConfMsg && "red"}>{errorConfMsg}</p>
            </label>

            <button type='submit' value={submit} onClick={inscription} className={submit && "test"}>
             
                
                {submit ? "Modifier le formulaire" : "Envoyer !"}
                
                
                
                
                
                
                </button>
            {/* <Results />*/}
        </form>








    </>)
}

export default Form;