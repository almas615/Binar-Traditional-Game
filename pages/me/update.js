import React from 'react';

import Profile from '../../components/user/Profile';
import Layout from '../../components/layout/Layout';
import withAuth from '../../HOC/withAuth';

const UpdateProfilePage = () => {
  return (
    <Layout title="Update Profile">
      <Profile />
    </Layout>
  );
};

export default withAuth(UpdateProfilePage);
