import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import MyNavbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <MyNavbar />
      <main className="container mt-4">{children}</main>
    </>
  );
}
