import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = 'Not Found!';
    message = 'Could not find resource or page!';
  }
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '20px',
      }}
    >
      <span>{title}</span>
      <h1>{message}</h1>
    </div>
  );
};

export default ErrorPage;
