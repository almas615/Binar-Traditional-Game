import React from 'react';

import UpdateProfile from '../../components/user/Profile';
import Layout from '../../components/layout/Layout';
import withAuth from '../../HOC/withAuth';

const UpdateProfilePage = () => {
  return (
    <Layout title="Update Profile">
      <UpdateProfile />
    </Layout>
  );
};

export default withAuth(UpdateProfilePage);
