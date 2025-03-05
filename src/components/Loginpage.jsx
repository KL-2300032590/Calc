import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Registration from './Registration';



const Loginpage = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        if (ref1.current.value === "admin" && ref2.current.value === "admin@123") {
            navigate("/master");
        } else {
            navigate("/registration");
        }
    };

    return (
        <>
            <h2>LoginPage</h2>
            <form onSubmit={login}>
                <fieldset>
                    <legend>Login</legend>
                    Enter Username: <input type="text" ref={ref1} placeholder="Username" /><br />
                    Enter Password: <input type="password" ref={ref2} placeholder="Password" required /><br />
                    <button type="submit">Login</button>
                </fieldset>
            </form>
        </>
    );
};

export default Loginpage;