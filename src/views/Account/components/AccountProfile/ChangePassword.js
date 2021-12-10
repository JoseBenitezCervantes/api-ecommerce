import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ChangePassword({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [error, setError] = useState(false);
  const [errorA, setErrorA] = useState(false);
  const [textError, setTextError] = useState('');
  const [changePassword, setChangePassword] = useState({
    lastPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const handleChange = (event) => {
    setError(false);
    setErrorA(false);
    setChangePassword({
      ...changePassword,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickSave = () => {
    console.log(changePassword);
    if (!changePassword.lastPassword) {
      setErrorA(true);
      setTextError('Ingrese contraseña');
    } else if (!changePassword.newPassword && !changePassword.repeatPassword) {
      setError(true);
      setTextError('Ingrese contraseña');
    } else if (changePassword.newPassword !== changePassword.repeatPassword) {
      setError(true);
      setTextError('Las contraseñas no coinciden');
    } else {
      console.log(changePassword);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Cambio de contraseña</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ingrese su contraseña actual seguido de su nueva contraseña.
          </DialogContentText>
          <DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="lastPassword"
              label="Contraseña Actual"
              type="password"
              onChange={handleChange}
              color="secondary"
              fullWidth
              error={errorA}
              helperText={errorA && textError}
            />
          </DialogContentText>
          <DialogContentText>
            <TextField
              margin="dense"
              name="newPassword"
              label="Nueva Contraseña "
              type="password"
              helperText={error && textError}
              error={error}
              color="secondary"
              onChange={handleChange}
              fullWidth
            />
          </DialogContentText>
          <TextField
            margin="dense"
            name="repeatPassword"
            label="Repita la nueva contraseña"
            type="password"
            helperText={error && textError}
            error={error}
            onChange={handleChange}
            color="secondary"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} aria-label="Cancelar" id="CancelChangePass" color="secondary">
            Cancelar
          </Button>
          <Button
            onClick={handleClickSave}
            aria-label="Change Password"
            color="secondary"
            id="ChangePassword"
          >
            Cambiar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
