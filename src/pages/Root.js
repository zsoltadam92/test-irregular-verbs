import { Outlet } from "react-router-dom";

const RootLayoutPage = () => {
  return (
    <>
      <h1>Irregular verbs</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayoutPage;
