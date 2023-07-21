import React, { useEffect, useState } from 'react';
import DogCard from '../dogcard';
import Dog from '../../../public/images/16.jpg';
import Link from 'next/link';
import { DogListContainer, DogListTitle, DogListWrapper } from './style';

interface Dog {
    id: number;
    name: string;
    temperament: string;
    image: string;
}

const DogList: React.FC = () => {
    const [dogs, setDogs] = useState<Dog[]>([]);

    const fetchData = async () => {
        try {
            const response = await fetch('/json/breeds.json');
            const data = await response.json();
            setDogs(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <DogListContainer>
            <DogListTitle>Para adoção</DogListTitle>
                <DogListWrapper> 
                    {dogs.map((dog, index) => (
                        <Link key={dog.id} href={`/dog/${dog.id}`}>
                            <DogCard 
                                key={index}
                                dogImage={dog.image}
                                dogBreed={dog.name}
                                dogCaracteristics={dog.temperament}
                            />
                        </Link>
                    ))}
                </DogListWrapper>
        </DogListContainer>
    );
};

export default DogList;
