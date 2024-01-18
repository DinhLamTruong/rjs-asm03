import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    // console.log(error.data);
  }
  //   const errorPage = useRouteError();
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      {/* <h1>{error.data.message}</h1> */}
      {/* <span></span> */}
    </div>
  );
};

export default ErrorPage;
