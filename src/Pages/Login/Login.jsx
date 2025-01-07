import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/authProvider";

const Login = () => {

  const { signIn } = useContext(AuthContext);

  const  location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
 
    console.log(form.get("email"));
    signIn(email, password)
      .then(result => {
        console.log(result)
        navigate(location?.state?.from || '/');
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <h2>This is Login</h2>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className="text-center">
                Dont have an account,{" "}
                <Link to="/register">
                  <a className="text-orange-500 font-semibold" href="">
                    Register
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
