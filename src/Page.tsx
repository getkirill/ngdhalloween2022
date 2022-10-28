import MainMenu from "./components/mainMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameScene from "./components/gameScene";
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
