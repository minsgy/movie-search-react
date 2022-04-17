import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import { MainPage } from '@pages';
const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/movies" element={<MainPage />} />
        <Route path="*" element={<Navigate to={'/movies'} />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Router;
