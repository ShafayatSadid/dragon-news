import NavBar from '@/components/shared/NavBar';
import { montserrat } from '../layout';

const AuthLayout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <NavBar />

            <main>
                {children}
            </main>
        </div>
    );
};

export default AuthLayout;