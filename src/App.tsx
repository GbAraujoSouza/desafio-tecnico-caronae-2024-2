import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import { GlobalStyle } from "./theme/globalStyles"
import theme from "./theme"
import Hero from "./components/Hero"
function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <Header />
      <Hero />
    </ThemeProvider>
  )
}

export default App
