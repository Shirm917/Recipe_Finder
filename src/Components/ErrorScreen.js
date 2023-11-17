const ErrorScreen = ({ error }) => {
  return (
    <section className="error-screen">
      <div>
        <h1>{error}</h1>
      </div>
    </section>
  );
};

export default ErrorScreen;
