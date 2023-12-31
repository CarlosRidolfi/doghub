import React, { useState, useEffect } from 'react';
import AdoptCard from '@/components/adoptcard';
import { AdoptList } from '@/components/adoptcard/style';
import { DogListTitle } from '@/components/doglist/style';
import '../app/globals.css';
import Navbar from '@/components/navbar';
import styled from 'styled-components';

const EmptyAdoptionListMessage = styled.h2`
    text-align: center;
    font-family: 'Raleway';
    font-size: 25px;
    font-weight: 500;
`

interface AdoptDog {
    id: number;
    adoptBreed?: any;
    adoptImage?: any;
    image?: any;
    breed?: any;
    index: number;
}

export default function Adopt() {
    const [adoptDogs, setAdoptDogs] = useState<AdoptDog[]>([]);

    useEffect(() => {
        const fetchAdoptListFromLocalStorage = (): AdoptDog[] => {
            const storedList = localStorage.getItem('myItemsKey');
            return storedList ? JSON.parse(storedList) : [];
        };

        setAdoptDogs(fetchAdoptListFromLocalStorage);
    }, []);

    const deleteFunction = (index: number) => {
        const updatedAdoptDogs = [...adoptDogs];
        updatedAdoptDogs.splice(index, 1); 
        setAdoptDogs(updatedAdoptDogs);

        localStorage.setItem('myItemsKey', JSON.stringify(updatedAdoptDogs));
    }

    return (
        <>
            <Navbar reRender={adoptDogs.length}/>
            <AdoptList>
                <DogListTitle>Sua lista de adoção</DogListTitle>
                {
                    adoptDogs.length === 0 &&
                        <EmptyAdoptionListMessage>Você não possui nenhum cão em sua lista de adoção</EmptyAdoptionListMessage>
                }
                {adoptDogs.map((dog, index) => (
                    <AdoptCard deleteFunction={() => deleteFunction(index)} key={index} adoptImage={dog.image} adoptName={dog.breed} />
                ))}
            </AdoptList>
        </>
    );
}
