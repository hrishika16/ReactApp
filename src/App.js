import VideoList from './Component/VideoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Data from './Data'
import ViewDetails from './Component/ViewDetails';
function App() {

  const items = Data;

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<VideoList items={items} />} />
        <Route path='/video' element={<ViewDetails items={items} />} />
      </Routes>      
    </BrowserRouter>
  );
}

export default App;
