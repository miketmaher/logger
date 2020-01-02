import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../redux/actions/techActions';
import Tech from './Tech';

const TechListDialog = ({ getTechs, tech: { loading, techs } }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians</h4>
        <ul className="collection">
          {!loading &&
            techs &&
            techs.map(tech => <Tech key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListDialog.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech,
});

const actions = {
  getTechs,
};

export default connect(mapStateToProps, actions)(TechListDialog);
