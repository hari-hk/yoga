import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";

export default function Input({ label, type, id, name, autocomplete }) {
  return (
    <div className="form-fields">
      <label for={id}>{label}</label>
      <input autocomplete={autocomplete} type={type} name={name} id={id} />
    </div>
  );
}

Input.defaultProps = {
  id: "",
  name: "",
  autocomplete: "off",
  type: "text",
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  autocomplete: PropTypes.string,
  type: PropTypes.oneOf(["text", "tel", "number", "date", "email"]),
};
