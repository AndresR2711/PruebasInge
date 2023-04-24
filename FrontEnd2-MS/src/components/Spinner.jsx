import Spinner from 'react-bootstrap/Spinner';

function SpinnerLoading() {
  return (
    <div className=''>
        <Spinner animation="border" role="status" size='md' className='h-[20rem]'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default SpinnerLoading;