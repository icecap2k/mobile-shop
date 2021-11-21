import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductOption = ({ options, name, children, changeValue }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  useEffect(() => {
    if (options.length === 1) {
      changeValue(options[0].code);
      setSelectOptions(options);
    } else {
      setSelectOptions([{ code: -1, name: "select" }, ...options]);
    }
  }, [options]);
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <select
        name={name}
        id={name}
        onChange={(e) => changeValue(parseInt(e.target.value))}
      >
        {selectOptions.map((option, index) => (
          <option
            key={option.code}
            value={option.code}
            defaultValue={index === 0}
          >
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

ProductOption.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  name: PropTypes.string.isRequired,
};
ProductOption.defaultProps = {
  options: [],
};
export default ProductOption;
