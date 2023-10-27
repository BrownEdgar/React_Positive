import PropTypes from "prop-types";
export default function Form({ handleChange }) {
  return (
    <div className="Form">
      <form onSubmit={handleChange}>
        <label htmlFor="search">search by names</label>
        <input type="text" id="search" />
      </form>
    </div>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
