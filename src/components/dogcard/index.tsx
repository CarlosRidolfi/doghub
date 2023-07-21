import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardTitle, ButtonsWrapper, CardButton, DogDetailsList, AdoptButton, CardContainer } from './style';

interface DogCardProps {
    id: number;
    dogImage: string;
    dogBreed: string;
    dogCaracteristics?: string[];
    life_span?: string;
    bred_for?: string;
    breed_group?: string;
    weightimperial?: string;
    heightimperial?: string;
    weightmetric?: string;
    heightmetric?: string;
}

const DogCard: React.FC<DogCardProps> = ({
    id,
    dogImage,
    dogBreed,
    dogCaracteristics,
    life_span,
    bred_for,
    breed_group,
    weightimperial,
    weightmetric,
    heightimperial,
    heightmetric,
}) => {
    const [items, setItems] = useState<string[]>(() => {
        const storedItems = localStorage.getItem('myItemsKey');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    const handleSaveData = () => {
        const dataToSave = [dogBreed, dogImage, id];
        const isDuplicate = items.some((item) => JSON.stringify(item) === JSON.stringify(dataToSave));

        localStorage.setItem('Dog ' + id, `{"breed": "${dogBreed}", "image": "${dogImage}", "id": "${id}"}`)

        if (!isDuplicate) {
            const updatedItems = [...items, dataToSave];
            localStorage.setItem('myItemsKey', JSON.stringify(updatedItems));
            setItems(updatedItems);
        }
    };

    return (
        <CardContainer>
            <Card sx={{ backgroundColor: '#ebeaea', borderRadius: '10px' }}>
                <CardMedia sx={{ height: 250 }} image={dogImage} title={dogBreed} />
                <CardTitle>{dogBreed}</CardTitle>
                <ButtonsWrapper>
                    {
                        dogCaracteristics?.map((item: string, index) => (
                            <CardButton key={index}>{item}</CardButton>
                        ))
                    }
                </ButtonsWrapper>
                {
                    life_span && (
                        <DogDetailsList>
                            <li>Life Span: {life_span}</li>
                            <li>Bred For: {bred_for}</li>
                            <li>Breed Group: {breed_group}</li>
                            <li>Weight Imperial: {weightimperial}</li>
                            <li>Height Imperial: {heightimperial}</li>
                            <li>Weight Metric: {weightmetric}</li>
                            <li>Height Metric: {heightmetric}</li>
                            <AdoptButton onClick={handleSaveData}>ADOTAR</AdoptButton>
                        </DogDetailsList>
                    )
                }
            </Card>
        </CardContainer>
    );
};

export default DogCard;