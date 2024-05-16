import { useState } from "react";

export default function SignUpForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`)
            const result = await response.json();
            console.log(result);
        } catch (error) {
          setError(error.message);
        }
      }

    return (
        <div>
            <h2>Sign Up!</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>

    )

}