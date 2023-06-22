import { Header } from "./common/Header/Header"
import { Body } from "./pages/Body/Body";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export const App = () => {

  return (
   <div className="appDesign">
      <Header />
      <Body />

   </div>
  )
}