import tecnicas from "./data/tecnicas";
import { Routes, Route, Link, useParams } from "react-router-dom";

function HeaderMenu() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <img src="#" alt="logoApp" />
      <h1>meditateMe</h1>
      <img src="#" alt="botonAyuda" />
    </div>
  );
}

function MenuMeditacion() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {tecnicas.map((tecnica) => (
        <Link to={`/${tecnica.name}`}>{tecnica.name}</Link>
      ))}
    </div>
  );
}

//Componente importante que nos evitara crear por cada una meditacion
//una pagina nueva
function PageMeditacion() {
  const { meditacion } = useParams();
  //Obtenemos el objeto con el nombre del parametro, ahora podemos usar todo el objeto
  const objetoActual = tecnicas.find((tecnica) => tecnica.name === meditacion);
  //Usamos ese objeto para renderizar toda su informacion
  const { name, pasos } = objetoActual;
  return (
    <>
      <Link to="/">atras</Link>
      <h2>{name}</h2>
      {pasos.map((paso) => (
        <p>{paso}</p>
      ))}
    </>
  );
}

function Home() {
  return (
    <>
      <HeaderMenu />
      <MenuMeditacion />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:meditacion" element={<PageMeditacion />} />
    </Routes>
  );
}
