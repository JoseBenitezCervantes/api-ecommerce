import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { withRouter } from "react-router-dom";

const Order = ({ history }) => {
  const handleClose = (e, close) => {
    const category = e.target.innerText;
    close();
    history.push({
      pathname: "/Products",
      search: `?category=${category.toLowerCase()}`,
    });
  };
  return (
    <PopupState variant="popper" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="outlined"
            color="secondary"
            aria-label="Order Product"
            id="orderProduct"
            {...bindTrigger(popupState)}
          >
            Categorias
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem
              onClick={(e) => handleClose(e, popupState.close)}
              value={"js"}
            >
              Electronics
            </MenuItem>
            <MenuItem
              onClick={(e) => handleClose(e, popupState.close)}
              value={1}
            >
              Jewelery
            </MenuItem>
            <MenuItem
              onClick={(e) => handleClose(e, popupState.close)}
              value={1}
            >
              Men's clothing
            </MenuItem>
            <MenuItem
              onClick={(e) => handleClose(e, popupState.close)}
              value={1}
            >
              Women's clothing
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default withRouter(Order);
