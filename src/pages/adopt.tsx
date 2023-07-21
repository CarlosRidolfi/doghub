import React, { useState, useEffect } from 'react';
import Layout from '@/app/layout';
import AdoptCard from '@/components/adoptcard';
import { AdoptList } from '@/components/adoptcard/style';
import { DogListTitle } from '@/components/doglist/style';

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

    console.log(adoptDogs)

    useEffect(() => {
        const fetchAdoptListFromLocalStorage = (): AdoptDog[] => {
            const storedList = localStorage.getItem('myItemsKey');
            return storedList ? JSON.parse(storedList) : [];
        };

        setAdoptDogs(fetchAdoptListFromLocalStorage);
    }, []);

    console.log(adoptDogs)

    const deleteFunction = (index: number) => {
        const updatedAdoptDogs = [...adoptDogs];
        updatedAdoptDogs.splice(index, 1); 
        setAdoptDogs(updatedAdoptDogs);

        localStorage.setItem('myItemsKey', JSON.stringify(updatedAdoptDogs));
    }
    console.log(adoptDogs)

    return (
        <Layout>
            <AdoptList>
                <DogListTitle>Sua lista de adoção</DogListTitle>
                {adoptDogs.map((dog, index) => (
                    <AdoptCard deleteFunction={() => deleteFunction(index)} key={index} adoptImage={dog.image} adoptName={dog.breed} />
                ))}
            </AdoptList>
        </Layout>
    );
}
