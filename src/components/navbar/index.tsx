import React, { useEffect, useState } from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useRouter } from 'next/router'
import { NavbarWrapper, Title, CartButton, BackButton, CartCounter, Gutter } from './style'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter();
    const actualUrl = router.asPath;
    const [adoptDogs, setAdoptDogs] = useState([])

    useEffect(() => {
        const adoptList: any = () => {
            const adoptList = localStorage.getItem('myItemsKey');
            return adoptList ? JSON.parse(adoptList) : [];
        }

        setAdoptDogs(adoptList)
    }, [])
    

    return (
        <NavbarWrapper>
            {
                actualUrl !== '/' ?
                    <BackButton onClick={() => window.history.back()}>
                        <ArrowBackIcon sx={{ fontSize: 40, color: 'white' }} />
                    </BackButton>
                :
                <Gutter></Gutter>
            }
            <Title>DOG<span>HUB</span></Title>
            <CartButton>
                <CartCounter>{adoptDogs.length}</CartCounter>
                <Link href={'/adopt'}>
                    <StorefrontIcon sx={{ fontSize: 40, color: 'white' }} />
                </Link>
            </CartButton>
        </NavbarWrapper>
    )
}
