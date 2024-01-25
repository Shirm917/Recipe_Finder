const ErrorScreen = ({ errorText }) => {
  return (
    <section className="error-screen">
      <div>
        <h1>{errorText}</h1>
      </div>
    </section>
  );
};

export default ErrorScreen;
