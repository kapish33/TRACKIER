import { lazy, Suspense } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import ProtectedRoute from '../component/ProtectedRoute';
import { RemoveTrailingSlash } from './RemoveTrailingSlash';

const Login = lazy(() => import('../component/Login'));
const Registration = lazy(() => import('../component/Registration'));
const Dashboard = lazy(() => import('../component/Dashboard'));
const Task = lazy(() => import('../component/Task'));
const NotFound = lazy(() => import('../component/404'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RemoveTrailingSlash />
    <Switch>
      <Route path='/' element={<Login />} />
      <Route path='/regestration' element={<Registration />} />
      {/*  Protected Routes */}
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path='/dashboard/:task' element={<Task />} />
      {/*  For Unknow Route */}
      <Route path='*' element={<NotFound />} />
    </Switch>
  </Suspense>
);
export default Routes;
