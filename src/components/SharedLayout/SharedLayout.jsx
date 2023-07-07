import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from './SharedLayout.styled';
import { NavBar } from 'components/NavBar/NavBar';

export const SharedLayout = () => {
  return (
    <>
      <Container>
        <NavBar />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};
