import {useState} from "react";

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

         if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim() || !formData.lastName.trim()) {
            newErrors.firstName = "Vorname und Nachname sind erforderlich";
        }

        if (!formData.email.trim()) {
            newErrors.email = "E-Mail ist erforderlich";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "E-Mail ist ungültig";
        }

        if (!formData.password) {
            newErrors.password = "Passwort ist erforderlich";
        } else if (formData.password.length < 8) {
            newErrors.password = "Passwort muss mindestens 8 Zeichen lang sein";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

     const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        const { firstName, lastName, email, password } = formData;

        try {
            
            const response = await fetch("http://ec2-18-216-56-107.us-east-2.compute.amazonaws.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName
                })
            });

            if (!response.ok) {
                throw new Error("Fehler bei der Registrierung");
            }

            const data = await response.json();
            console.log("Registrierung erfolgreich:", data);
            alert("Du wurdest erfolgreich registriert!");
            
           
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            });

        } catch (error) {
            console.error("Fehler:", error);
            alert("Registrierung fehlgeschlagen. Bitte versuche es erneut.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <>
        <div className="signUpContainer">
            <div className="signUpHeroContainer">
                
                </div>
            
                    <div className="signUpFormContainer">
                        <h2 className="signUpTitle">Registrieren</h2>
                         <form className="signUpForm" onSubmit={handleSubmit}>
                            <div className="inputGroup" >
                                <label htmlFor="firstName" className="inputLabel">Vorname</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        required 
                                        placeholder="dein Vorname"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`inputField ${errors.firstName ? 'error' : ''}`}
                                    />
                                    {errors.firstName && (
                                        <span className="errorMessage">
                                            {errors.firstName}
                                        </span>
                            )}
                            </div>

                            <div className="inputGroup" >
                                <label htmlFor="lastName" className="inputLabel">Nachname:</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        required 
                                        placeholder="dein Nachname"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`inputField ${errors.lastName ? 'error' : ''}`}
                                    />
                                    {errors.lastName && (
                                        <span className="errorMessage">
                                            {errors.lastName}
                                        </span>
                            )}
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="email" className="inputLabel">Email:</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required 
                                        placeholder="ihre@email.de"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`inputField ${errors.email ? 'error' : ''}`}
                                    />
                                     {errors.email && (
                                        <span className="errorMessage">
                                            {errors.email}
                                        </span>
                            )}
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="password" className="inputLabel">Passwort:</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    required
                                    minLength="8" 
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`inputField ${errors.password ? 'error' : ''}`}
                                  />
                                  {errors.password && (
                                        <span className="errorMessage">
                                            {errors.password}
                                        </span>
                            )}
                            </div>

                        <button className="signUpButton"
                        type="submit"
                        >
                        {isLoading ? 'Registrierung läuft...' : 'Registrieren'}
                    </button>
                </form>
            </div>
           </div>
        </>
    );
}

export default SignUp;