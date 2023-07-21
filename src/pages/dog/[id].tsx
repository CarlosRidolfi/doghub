import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Controller from '@/app/controller';
import DogCard from '@/components/dogcard';
import styled from 'styled-components'
import { DogListTitle } from '@/components/doglist/style';

interface DogWeightHeight {
    imperial: string;
    metric: string;
}

interface Dog {
    id: number;
    name: string;
    temperament: string;
    image: string;
    life_span: string;
    bred_for: string;
    breed_group: string;
    weight: DogWeightHeight[];
    height: DogWeightHeight[];
}

const DogDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`

const DogDetails: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const [dog, setDog] = useState<Dog | undefined>();

    const fetchData = async () => {
        try {
            const response = await fetch('/json/breeds.json');
            const data = await response.json();
            const dogSelected = data.find((dog: Dog) => dog.id === parseInt(id as string));
            setDog(dogSelected);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <Controller>
            <DogDetailsWrapper>
                <DogListTitle>Detalhes</DogListTitle>
                {dog &&
                    <DogCard
                        id={dog.id}
                        dogBreed={dog.name}
                        dogCaracteristics={dog.temperament}
                        dogImage={dog.image}
                        life_span={dog.life_span}
                        bred_for={dog.bred_for}
                        breed_group={dog.breed_group}
                        weightimperial={dog.weight[0]?.imperial}
                        weightmetric={dog.weight[0]?.metric}
                        heightimperial={dog.height[0]?.imperial}
                        heightmetric={dog.height[0]?.metric}
                    />
                }
            </DogDetailsWrapper>
        </Controller>
    );
};

export default DogDetails;
