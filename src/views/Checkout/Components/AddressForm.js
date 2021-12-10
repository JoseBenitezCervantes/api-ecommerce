import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
export default function AddressForm(props) {
  const [values, setValues] = useState({
    name: "Jose Alberto Benitez Cervantes",
    phone: "7731175188",
    state: "CDMX",
    town: "Tlalpan",
    suburb: "La Joya",
    cp: "92199",
    street: "Av insurgentes",
    indications: "Casa blanca",
  });

  const [isEditable, setIsEditable] = useState(true);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickEdit = () => {
    setIsEditable(false);
  };
  const handleClickSave = () => {
    setIsEditable(true);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de Envio
      </Typography>

      <form autoComplete="off" noValidate>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                fullWidth
                helperText={!values.name && "Ingrese su nombre completo"}
                label="Nombre Completo"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                disabled={isEditable}
                value={values.name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.street && "Ingrese su calle y numero"}
                label="Calle y Numero"
                margin="dense"
                name="street"
                onChange={handleChange}
                value={values.street}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                fullWidth
                disabled={isEditable}
                helperText={
                  !values.indications && "Ingrese Indicaciones de entrega"
                }
                label="Indicaciones de entrega"
                margin="dense"
                name="indications"
                onChange={handleChange}
                required
                value={values.indications}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.phone && "Ingrese su numero telefonico"}
                label="Numero Telefonico"
                margin="dense"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.state && "Ingrese su estado"}
                label="Estado"
                margin="dense"
                name="state"
                onChange={handleChange}
                value={values.state}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.town && "Ingrese su municipio"}
                label="Municipio"
                margin="dense"
                name="town"
                onChange={handleChange}
                value={values.town}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.suburb && "Ingrese su colonia"}
                label="Colonia"
                margin="dense"
                name="suburb"
                onChange={handleChange}
                value={values.suburb}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                fullWidth
                required
                disabled={isEditable}
                helperText={!values.cp && "Ingrese su codigo postal"}
                label="Codigo Postal"
                margin="dense"
                name="cp"
                onChange={handleChange}
                value={values.cp}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          {isEditable && (
            <Button
              color="primary"
              aria-label="Edit Address Info"
              id="EditAddressInfo"
              onClick={handleClickEdit}
            >
              Editar
            </Button>
          )}
          {!isEditable && (
            <Button
              hidden={"true"}
              color="primary"
              aria-label="Save Address Form"
              id="SaveAddressForm"
              onClick={handleClickSave}
              hidePrevButton={isEditable}
            >
              Guardar
            </Button>
          )}
        </CardActions>
      </form>
    </React.Fragment>
  );
}
