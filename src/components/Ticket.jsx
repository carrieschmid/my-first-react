  
import React from 'react';
import PropTypes from 'prop-types';


function Ticket(propsany){
  return (
    <div>
      <h3>{propsany.location} - {propsany.names}</h3>
      <p><em>{propsany.issue}</em></p>
      <hr/>
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   issue: PropTypes.string
// };

export default Ticket;