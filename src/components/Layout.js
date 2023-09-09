import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Hector Mendoza">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/admin">Admin</Link>
      </Header>
      <Container fixed>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
