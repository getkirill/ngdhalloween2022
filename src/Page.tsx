import MainMenu from "./pages/mainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameScene from "./pages/gameScene";

export default function Page() {
  let routes = [
    { path: "/", component: <MainMenu />, id: 0 },
    { path: "/game", component: <GameScene />, id: 1}
  ] as {
    path: string;
    component: JSX.Element
    id: number;
  }[];
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          {routes.map((r) => (
            <Route path={r.path} element={r.component} key={''+r.id} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
