import { Routes , Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import GymExecutive from '../pages/GymExecutive';
import Movie from '../pages/Movie';
import PictureVideo from '../pages/PictureVideo';
import ToDoList from '../pages/ToDoList';
import DownloadYoutub from '../pages/DownloadYoutub';
import NotFound from '../pages/NotFound';

function MyRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/Gym" element={<GymExecutive/>} />
      <Route path="/Filmes" element={<Movie/>} />
      <Route path="/FotosVideos" element={<PictureVideo/>} />
      <Route path="/ListaDeTarefas" element={<ToDoList/>} />
      <Route path="/DownloadYoutub" element={<DownloadYoutub/>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default MyRoutes;
