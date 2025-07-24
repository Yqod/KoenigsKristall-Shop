import React from "react";

function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");
        // You can handle login logic here
        console.log("Email:", email, "Password:", password);
    };

    return (
        <>
        <div className="LoginHeroContainer">
            
        </div>
        
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="your@email" />

                <label htmlFor="password">Passwort:</label>
                <input type="password" id="password" name="password" required placeholder="********" />
                <button type="submit">Anmelden</button>
            </form>
        </>
    );
}

export default SignIn;