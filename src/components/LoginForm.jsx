import {useAuthentication} from '../hooks/ApiHooks';
import useForm from '../hooks/formHooks';
import {useNavigate} from 'react-router';

// LoginForm.jsx
const LoginForm = () => {
  const navigate = useNavigate();
  const {postLogin} = useAuthentication();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    console.log(inputs);
    // TODO: add login functionalities here

    // Make api call to authentication api
    // get token, store in localstorage
    // const response = await fetch('/api/v1/authentication');
    // const data = await response.json();
    // console.log('data', data);

    // use the postLogin function coming from the hook
    await postLogin(inputs);

    navigate('/');
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doLogin,
    initValues,
  );

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="loginuser">Username</label>
          <input
            name="username"
            type="text"
            id="loginuser"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
