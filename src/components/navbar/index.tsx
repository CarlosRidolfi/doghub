import React, { useEffect, useState } from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/router';
import { NavbarWrapper, Title, CartButton, BackButton, CartCounter, Gutter } from './style';
import Link from 'next/link';

interface NavbarProps {
    reRender?: any;
}

const Navbar: React.FC<NavbarProps> = ({ reRender }) => {
    const router = useRouter();
    const actualUrl = router.asPath;
    const [adoptDogs, setAdoptDogs] = useState<string[]>([]); // Defina o tipo adequado para o array.

    useEffect(() => {
        const fetchAdoptListFromLocalStorage = (): string[] => {
            const storedList = localStorage.getItem('myItemsKey');
            return storedList ? JSON.parse(storedList) : [];
        };

        setAdoptDogs(fetchAdoptListFromLocalStorage);
    }, [reRender]); // Atualize o estado quando a prop "reRender" for alterada.

    return (
        <NavbarWrapper>
            {actualUrl !== '/' ? (
                <BackButton onClick={() => window.history.back()}>
                    <ArrowBackIcon sx={{ fontSize: 40, color: 'white' }} />
                </BackButton>
                ) : (
                <Gutter></Gutter>
            )}
            <Title>DOG<span>HUB</span></Title>
            <CartButton>
                <CartCounter>{reRender}</CartCounter>
                <Link href={'/adopt'}>
                <StorefrontIcon sx={{ fontSize: 40, color: 'white' }} />
                </Link>
            </CartButton>
            </NavbarWrapper>
    );
};

export default Navbar;
