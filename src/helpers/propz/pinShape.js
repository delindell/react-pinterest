import PropTypez from 'prop-types';

const pinShape = PropTypez.shape({
  imageUrl: PropTypez.string.isRequired,
  title: PropTypez.string.isRequired,
  uid: PropTypez.string.isRequired,
  boardId: PropTypez.string.isRequired,
  id: PropTypez.string.isRequired,
});

export default { pinShape };
