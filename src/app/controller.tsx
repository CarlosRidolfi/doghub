import React, { ReactNode } from 'react';
import Navbar from '@/components/navbar';
import './globals.css'

interface ControllerProps {
    children: ReactNode;
}

const Controller: React.FC<ControllerProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Controller;