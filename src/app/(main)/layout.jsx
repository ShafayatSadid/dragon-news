import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <NavBar />

            <main>
                {children}
            </main>
        </>
    );
};

export default MainLayout;