import React from 'react';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';
import { Route, Routes } from 'react-router-dom';
import { adminRouterList } from './AdminRouterList';


const AdminRoutes = () => {
  return (
    <>
      <AdminLayout>
        <Routes>
          {
            adminRouterList.map((obj, i) => {
              return (
                <Route key={i} path={obj.path} Component={obj.Component} />
              )
            })
          }
        </Routes>
      </AdminLayout>
    </>
  );
};

export default AdminRoutes;