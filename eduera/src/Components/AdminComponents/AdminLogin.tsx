import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { login } from '../../redux/AdminReducer/action';
import { useLocation, useNavigate } from 'react-router-dom';

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
  login
};



const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type LoginProps = PropsFromRedux;

const Login: React.FC<LoginProps> = ({ login }) => {

  const location = useLocation()
  const navigate = useNavigate();


  const handleLogin = () => {


      const username = prompt('Enter your username:');
      const password = prompt('Enter your password:');
  
      if (username === 'admin' && password === 'admin') {
        login(username, password);
        navigate("/adminuni")
      } else {
        alert('Invalid username or password');
        navigate("/")
      }

      
  };

  return (
    <div>
      <button onClick={handleLogin}>Admin Login</button>
    </div>
  );
};

export default connector(Login);
