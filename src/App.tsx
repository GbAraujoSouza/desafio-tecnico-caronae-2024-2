import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./theme/globalStyles"
import theme from "./theme";
import RideDetails from "./pages/RideDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details/:rideId",
    element: <RideDetails />,
  }
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> 
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
