import React, { useState } from 'react';

interface PromptLoginProps {
  onLogin: (username: string, password: string) => void;
}

const PromptLogin: React.FC<PromptLoginProps> = ({ onLogin }) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    onLogin(username, password);
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Login</button>
      {open && (
        <div className="modal">
          <div className="modal-content">
            <h2>Login</h2>
            <div>
              <label>Username:</label>
              <input type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
              <button onClick={handleSubmit}>Login</button>
              <button onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PromptLogin;
