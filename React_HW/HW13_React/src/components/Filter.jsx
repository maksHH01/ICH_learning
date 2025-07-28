import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

function Filter({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filter}
        placeholder="Filter..."
        onChange={handleChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, { setFilter })(Filter);
