import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close';
import { AdoptCardWrapper, AdoptCardTitle, DeleteButton } from './style'

interface AdoptDog {
    adoptImage: string;
    adoptName: string;
    index: number;
}

const AdoptCard: React.FC<AdoptDog> = ({adoptImage, adoptName, index, deleteFunction}) => {
    return (
        <AdoptCardWrapper key={index}>
            <Image 
                src={adoptImage}
                alt={adoptName}
                width={80}
                height={80}
            />
            <AdoptCardTitle>{adoptName}</AdoptCardTitle>
            <DeleteButton onClick={deleteFunction}><CloseIcon sx={{ fontSize: 25, color: '#a5a2a2' }} /></DeleteButton>
        </AdoptCardWrapper>
    )
}

export default AdoptCard