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
import StockComponent from './componentes/StockComponent';
import FooterComponent from './componentes/FooterComponent';
import './App.css';
import HistorialComponent from './componentes/HistorialComponent';
import AñadirProductoComponent from './componentes/AñadirProductoComponent';
import EditarProducto from './componentes/EditarProductoComponent';
import TestComponent from './componentes/TestComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <HeaderComponent />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<InicioComponent />} />
            <Route path="/sobreNosotros" element={<SobreNosotrosComponent />} />
            <Route path="/pruebasFisicas" element={<PruebasFisicasComponent />} />
            <Route path="/materialEstudio" element={<MaterialEstudioComponent />} />
            <Route path="/resumen" element={<ResumenCompra />} />
            <Route path="/informacion" element={<InformacionComponent />} />
            <Route path="/inicioSesion" element={<InicioSesionComponent />} />
            <Route path="/registro" element={<RegistroComponent />} />
            <Route path="/stock" element={<StockComponent />} />
            <Route path='/historial' element={<HistorialComponent/>}/>
            <Route path='/añadirProducto' element={<AñadirProductoComponent/>}/>
            <Route path='/editar' element={<EditarProducto/>}/>
            <Route path='/test' element={<TestComponent/>}/>
          </Routes>
        </main>
        {/* <FooterComponent /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
