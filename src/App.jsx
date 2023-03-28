import { useSelector } from "react-redux";
const App = () => {
  const { title, organization } = useSelector((state) => state.application);
  return (
    <>
      <h1>{title}</h1>
      <h2>{organization}</h2>
    </>
  );
};

export default App;
