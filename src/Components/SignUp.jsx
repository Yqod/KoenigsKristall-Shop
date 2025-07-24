import {useState} from "react";

function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
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

        if (!formData.name.trim()) {
            newErrors.name = "Name ist erforderlich";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            console.log("Form validation failed:", errors); // for testing Kozato, you can delete later //
            return;
        }

        setIsLoading(true);
         
        const {name, email, password} = formData;
        console.log("Form submitted:", {name, email, password}); // for testing Kozato, you can delete later //

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
                                <label htmlFor="name" className="inputLabel">Name:</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required 
                                        placeholder="dein Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`inputField ${errors.name ? 'error' : ''}`}
                                    />
                                    {errors.name && (
                                        <span className="errorMessage">
                                            {errors.name}
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