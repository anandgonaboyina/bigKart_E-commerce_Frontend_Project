import React, { useState } from "react";

function Login() {

let passPatteren=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const [isvalid, setValid]= useState(true)

  return (
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
       <div>
           <label className="label font-bold text-center mb-5">Login to bigKart Here</label>
 <input type="tel" className="input validator tabular-nums" required placeholder="Phone" 
  pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
        <p className="validator-hint">Mobile number must be 10 digits</p>
        </div>
<input type="password" className="input validator" required placeholder="Password" minlength="8" 
    patteren="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" 
onChange={(e)=>{setValid(passPatteren.test(e.target.value)); console.log(isvalid)}}
  />
  {!isvalid && <p className="text-red-600">
  Must be more than 8 characters, including
  <br/>At least one number, one lowercase letter, one uppercase letter
</p> 
}
  <button className="btn btn-primary mt-4">Login</button>
</fieldset>
  )
}

export default Login






