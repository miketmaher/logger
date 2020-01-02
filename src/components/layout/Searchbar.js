import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchLogs } from '../../redux/actions/logActions';

const Searchbar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = () => {
    searchLogs(text.current.value);
  };
  return (
    <nav style={{ marginBottom: '30px' }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              type="search"
              name="search"
              id="search"
              ref={text}
              placeholder="Search Logs"
              onChange={onChange}
            />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

Searchbar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

const actions = {
  searchLogs,
};

export default connect(null, actions)(Searchbar);
