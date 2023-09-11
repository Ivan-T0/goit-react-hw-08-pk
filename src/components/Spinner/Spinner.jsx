import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="visually-hidden">Loading...</span>
    </>
  );
}

export default BasicExample;
