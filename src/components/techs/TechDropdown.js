import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';
import PropTypes from 'prop-types';

const TechDropdown = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
  }, []);
  return (
    !loading &&
    techs &&
    techs.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechDropdown.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

const actions = {
  getTechs,
};

export default connect(mapStateToProps, actions)(TechDropdown);
