import jwt_decode from 'jwt-decode';
import ForgotPassword from '../components/auth/ForgotPassword';
import Layout from '../components/layout/Layout';
import withAuthLogin from '../HOC/withAuthLogin';

function LoginPage() {
  return (
    <Layout title="Forgot Password">
      <ForgotPassword />
    </Layout>
  );
}

export default withAuthLogin(LoginPage);
