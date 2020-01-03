import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteTech } from '../../redux/actions/techActions';
import M from 'materialize-css/dist/js/materialize';

const Tech = ({ tech: { firstName, lastName, id } }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTech(id));
    M.toast({ html: `${firstName} ${lastName} has been deleted` });
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

Tech.propTypes = {
  tech: PropTypes.object.isRequired,
};
export default Tech;
