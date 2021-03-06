/* eslint-disable */

import styled from "styled-components";

import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/configureStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainPage from "./components/main/MainPage";
import Header from "./components/header/Header";

import StorePage from "./components/main/StorePage";

function App() {
  return (
    <Router>
      <BackGround>
        <MobileView>
          <Header />
          <ConnectedRouter history={history}>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/:uri" exact component={StorePage} />
            </Switch>
          </ConnectedRouter>
        </MobileView>
      </BackGround>
    </Router>
  );
}

const BackGround = styled.div`
  background-color: #333333;
  display: flex;
  justify-content: center;
  height: 100%;
  overflow: auto;
`;
const MobileView = styled.div`
  width: 420px;
  background-color: white;
  height: 100vh;
`;

export default App;
