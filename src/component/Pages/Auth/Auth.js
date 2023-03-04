import React, { useState } from "react";
import "./Auth.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

function Auth() {

  const [logOrSign,setLogOrSigh] = useState(false)

  return (
    <div className='auth-layout'>
      <div className={logOrSign?`d-none`:''}>
        <Login
          logOrSign={logOrSign}
          setLogOrSigh={setLogOrSigh}
        />
      </div>
      <div className={logOrSign?``:`d-none`}>
        <Signup
          logOrSign={logOrSign}
          setLogOrSigh={setLogOrSigh}
        />
      </div>
    </div>
  );
}

export default Auth;
