import React from "react";

import { CssBaseline, ThemeProvider } from "@mui/material";
import dark from "assets/themes/dark";

import store from "redux/store";

import { Routes, Route, HashRouter } from "react-router-dom";
import MainMenu from "./MainMenu/MainMenu";
import Game from "./Game/Game";
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <Provider store={store}>
        <CssBaseline />
        <HashRouter>
          <Routes>
            <Route path={"/"} element={<MainMenu />} />
            <Route path={"/game"} element={<Game />} />
          </Routes>
        </HashRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
