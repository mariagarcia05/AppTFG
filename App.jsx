import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from "./componentes/HeaderComponent";
import InicioComponent from "./componentes/InicioComponent";
import SobreNosotrosComponent from './componentes/SobreNosotrosComponent';
import PruebasFisicasComponent from './componentes/PruebasFisicasComponent';
import MaterialEstudioComponent from './componentes/MaterialEstudioComponent';
import ResumenCompra from './componentes/ResumenCompraComponent';
import InformacionComponent from './componentes/InformacionComponent';
import InicioSesionComponent from './componentes/InicioSesionComponent';
import RegistroComponent from './componentes/RegistroComponent';

function App(){
  return(
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path="/" element={<InicioComponent/>}/>
      <Route path="/sobreNosotros" element={<SobreNosotrosComponent/>}/>
      <Route path="/pruebasFisicas" element={<PruebasFisicasComponent/>}/>
      <Route path="/materialEstudio" element={<MaterialEstudioComponent/>}/>
      <Route path="/resumen" element={<ResumenCompra/>}/>
      <Route path="/informacion" element={<InformacionComponent/>}/>
      <Route path="/inicioSesion" element={<InicioSesionComponent/>}/>
      <Route path="/registro" element={<RegistroComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;