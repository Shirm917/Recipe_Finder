import CircularProgress from "@mui/material/CircularProgress";

const LoadingScreen = () => {
  return (
    <section className="loading-screen">
      <h1>Loading</h1>
      <CircularProgress color="inherit" />
    </section>
  );
};

export default LoadingScreen;
