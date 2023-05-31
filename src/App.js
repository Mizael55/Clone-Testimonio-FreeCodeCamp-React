
import './App.css';
import Testimonio from './components/testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
      <Testimonio 
      nombre='Emma'
      pais='Suecia'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Ut ipsum quis cupidatat commodo velit labore elit mollit culpa mollit laborum eiusmod. Amet magna sint aliquip cupidatat elit do velit minim sit magna aute sunt sit eiusmod. Pariatur deserunt quis minim nulla sunt. Sit id elit adipisicing deserunt incididunt eiusmod minim eiusmod in sunt commodo. Ex proident nulla velit deserunt sint sunt cupidatat qui elit. Est anim veniam incididunt consequat labore consectetur. Velit occaecat est dolore dolor mollit Lorem tempor cillum eiusmod tempor eu.'

      />
      <Testimonio 
      nombre='Rosa Julia '
      pais='Brazil'
      cargo='Ingeniera de Software'
      empresa='Amazon'
      testimonio='Ut ipsum quis cupidatat commodo velit labore elit mollit culpa mollit laborum eiusmod. Amet magna sint aliquip cupidatat elit do velit minim sit magna aute sunt sit eiusmod. Pariatur deserunt quis minim nulla sunt. Sit id elit adipisicing deserunt incididunt eiusmod minim eiusmod in sunt commodo. Ex proident nulla velit deserunt sint sunt cupidatat qui elit. Est anim veniam incididunt consequat labore consectetur. Velit occaecat est dolore dolor mollit Lorem tempor cillum eiusmod tempor eu.'
      />
      <Testimonio 
      nombre='Naz Mendez '
      pais='China'
      cargo='Ingeniera de Software'
      empresa='Google'
      testimonio='Ut ipsum quis cupidatat commodo velit labore elit mollit culpa mollit laborum eiusmod. Amet magna sint aliquip cupidatat elit do velit minim sit magna aute sunt sit eiusmod. Pariatur deserunt quis minim nulla sunt. Sit id elit adipisicing deserunt incididunt eiusmod minim eiusmod in sunt commodo. Ex proident nulla velit deserunt sint sunt cupidatat qui elit. Est anim veniam incididunt consequat labore consectetur. Velit occaecat est dolore dolor mollit Lorem tempor cillum eiusmod tempor eu.'
      />
      </div>
    </div>
  );
}

export default App;
