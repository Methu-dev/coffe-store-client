import { useContext } from "react"
import { AuthContex } from "./AuthProvaider/AuthProvaider"
import Swal from "sweetalert2";


const SignUp = () => {

const {createUser}= useContext(AuthContex);

     const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);

        createUser(email, password)
        .then(result =>{
            console.log(result.user);
            const createdAt = result.user?.metadata?.creationTime;
            const users = { email, createdAt: createdAt };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(users),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);

                if (data.insertedId) {
                  Swal.fire({
                    title: "Success",
                    text: "Sign Up Successfully",
                    icon: "success",
                    confirmButtonText: "Close",
                  });
                }
              });
            
        })
        .catch(error =>{
            console.log(error);
            
        })
        
     }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign UP now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignUp}>
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
                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp
