import React, { useContext } from "react";
import AlertContext from "../../Context/Alert/alertContext";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <Snackbar
        open={true}
        key={alert.id}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={alert.type} elevation={6} variant='filled'>
          {alert.msg}
        </Alert>
      </Snackbar>
    ))
  );
};

export default Alerts;
