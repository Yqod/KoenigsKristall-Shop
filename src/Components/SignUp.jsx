import React from "react";

function SignUp() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        // KOZATO i dont know wich logic to use for backend use maybe u can show me 
        console.log({ name, email, password });
    };

    return (
    <>
        <div className="signUpContainer">
            <div className="signUpHeroContainer">
                
                </div>
            
                    <div className="signUpFormContainer">
                        <h2 className="signUpTitle">Registrieren</h2>
                         <form className="signUpForm" onSubmit={handleSubmit}>
                            <div >
                                <label htmlFor="name">Name:</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder="Ihr Name"
                                    />
                            </div>

                            <div >
                                <label htmlFor="email">Email:</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="ihre@email.de"
                                    />
                            </div>

                            <div >
                                <label htmlFor="password">Passwort:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    required 
                                    placeholder="********"
                                  />
                            </div>
                    
                    <button 
                        type="submit"
                       >
                        Registrieren
                    </button>
                </form>
            </div>
           </div>
        </>
    );
}

export default SignUp;