import React from 'react';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import { AdoptCardWrapper, AdoptCardTitle, DeleteButton } from './style';

interface AdoptCard {
    deleteFunction: () => void;
    adoptImage: string;
    adoptName: string;
    index?: number;
}

const AdoptCard: React.FC<AdoptCard> = ({ deleteFunction, adoptImage, adoptName, index }) => {
    return (
        <AdoptCardWrapper key={index}>
            <Image 
                src={adoptImage}
                alt={adoptName}
                width={100}
                height={100}
            />
            <AdoptCardTitle>{adoptName}</AdoptCardTitle>
            <DeleteButton onClick={deleteFunction}><CloseIcon sx={{ fontSize: 25, color: '#a5a2a2' }} /></DeleteButton>
        </AdoptCardWrapper>
    )
}

export default AdoptCard;