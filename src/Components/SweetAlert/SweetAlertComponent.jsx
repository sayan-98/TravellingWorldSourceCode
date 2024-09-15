import React from "react";
import SweetAlert from "react-bootstrap-sweetalert";

const SweetAlertComponent = ({ confirm, cancel, title, subtitle, type }) => {
  return (
    <SweetAlert
      style={{ zIndex: 1 }}
      title={title}
      onConfirm={confirm}
      type={type !== undefined ? type : "danger"}
      showCancel={true}
      confirmBtnStyle={{ backgroundColor: "#024b98" }}
      onCancel={cancel}
    >
      <h5>{subtitle}</h5>
    </SweetAlert>
  );
};

export default SweetAlertComponent;
