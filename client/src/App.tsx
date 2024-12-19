import { useEffect } from "react";
import Model3D from "./components/Model3D/Model3D";

export default function App() {
  useEffect(()=> {
    window.scrollTo({
      top: 46,
      behavior:"smooth"
    });
  },[])

  return (
  <>
    <header></header>
    <Model3D />
    <footer></footer>
  </>
  )
}
