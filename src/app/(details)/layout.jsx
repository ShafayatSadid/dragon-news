import Header from '@/components/shared/Header';
import React from 'react';

const DetailsPageLayout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default DetailsPageLayout;