import PropTypez from 'prop-types';

const boardShape = PropTypez.shape({
  name: PropTypez.string.isRequired,
  description: PropTypez.string.isRequired,
  uid: PropTypez.string.isRequired,
  id: PropTypez.string.isRequired,
});

export default { boardShape };
