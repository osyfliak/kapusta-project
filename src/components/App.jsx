import { Auth } from 'pages/Auth/Auth';
import { Home } from 'pages/Home/Home';
import { Report } from 'pages/Report/Report';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/report" element={<Report />} />
      <Route path="/auch" element={<Auth />} />
    </Routes>
  );
};
