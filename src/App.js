import React, { useState } from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme";
import { Container } from "./Styles";
import * as S from "../src/components/Button/Button";
// import './Botao.css'

const App = () => {
  const { githubState } = useGithub();
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <S.Wrapper>

       <button  onClick={() => themeToggler()}>Mude as cores</button>
      </S.Wrapper>
      <Container>

      <Layout>
        
        
        {githubState.hasUser ? (
          <>
            {githubState.loading ? (
              <p>Loading</p>
              ) : (
                <>
                <Profile />
                <Repositories />
              </>
            )}
          </>
        ) : (
          <NoSearch />
          )}
      </Layout>
    </Container>
    </ThemeProvider>
  );
};

export default App;
