import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../redux/store';
import { logout } from '../../redux/AdminReducer/action';
import Login from '../AdminComponents/AdminLogin';

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

const mapDispatchToProps = {
  logout
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type AppProps = PropsFromRedux;

const App: React.FC<AppProps> = ({ isAuthenticated, user, logout }) => {
  const handleLogout = () => {
    logout();
  };

  if (isAuthenticated) {
    return (
      <div>
        {/* <h1>Welcome, {user!.username}!</h1> */}
        <button onClick={handleLogout}>Admin Logout</button>
      </div>
    );
  }

  return <Login />;
};

export default connector(App);
