import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  console.error(err); 

  return (
    <div className="error-container" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😢</h1>
      <h2>{err.status || "Unknown Error"} - {err.statusText || err.message}</h2>
      <p>Please go back or try again later.</p>
    </div>
  );
};



