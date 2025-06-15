import { useContext } from "react";
import { AuthContex } from "./AuthProvaider/AuthProvaider";


const SignIn = () => {
  const {signIn} = useContext(AuthContex)
  const handleSignIn = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      const user = {
        email,
        lastLoggedTime: result.user?.metadata?.lastSignInTime,
      };
      fetch("http://localhost:5000/users",{
        method: "PATCH",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .than(res => res.json())
      .then(data => console.log(data))
    })
    .catch(error =>{
      console.log(error);
      
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn
