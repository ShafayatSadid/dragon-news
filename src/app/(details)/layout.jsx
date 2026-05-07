import Header from '@/components/shared/Header';
import NavBar from '@/components/shared/NavBar';
import React from 'react';

const DetailsPageLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <NavBar />
            <main>
                {children}
            </main>
        </div>
    );
};

export default DetailsPageLayout;