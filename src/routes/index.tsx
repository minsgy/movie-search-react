import { BrowserRouter, Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/movies" element={<div>list</div>} />
        <Route path="*" element={<Navigate to={'/movies'} />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Router;
