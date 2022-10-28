import MainMenu from "./components/mainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function Page() {
  let routes = [{ path: "/", component: <MainMenu />, id: 0 }] as {
    path: string;
    component: JSX.Element
    id: number;
  }[];
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((r) => (
            <Route path={r.path} element={r.component} id={''+r.id} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
