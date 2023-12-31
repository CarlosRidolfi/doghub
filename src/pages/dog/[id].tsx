import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import '../../app/globals.css';
import DogCard from '@/components/dogcard';
import { DogDetailsWrapper } from './style'
import { DogListTitle } from '@/components/doglist/style';
import Navbar from '@/components/navbar';

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
    dogCaracteristics?: any;
}

const DogDetails: React.FC<Dog> = () => {
    const router = useRouter();
    const { id } = router.query;
    const [dog, setDog] = useState<Dog | undefined>();
    const [items, setItems] = useState<any>([]);

    const fetchData = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                const data = JSON.parse(this.responseText);
                const dogSelected = data.find((dog: Dog) => dog.id === parseInt(id as string));
                setDog(dogSelected);
            }
        };
        xhttp.open("GET", '/json/breeds.json', true);
        xhttp.send();
    };

    useEffect(() => {
        const storedItems = localStorage.getItem('myItemsKey');
        setItems(storedItems ? JSON.parse(storedItems) : [])
        fetchData();
    }, [id]);

    const handleSaveData = () => {
        const dataToSave = {breed: dog?.name, image: dog?.image, id: dog?.id};
        const isDuplicate = items.some((item: any) => JSON.stringify(item) === JSON.stringify(dataToSave));

        localStorage.setItem('Dog ' + id, `{"breed": "${dog?.name}", "image": "${dog?.image}", "id": "${dog?.id}"}`)

        if (!isDuplicate) {
            const updatedItems = [...items, dataToSave];
            localStorage.setItem('myItemsKey', JSON.stringify(updatedItems));
            setItems(updatedItems);
        }
    };

    return (
        <>
            <Navbar reRender={items.length} />
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
                        adoptFunction={handleSaveData}
                    />
                }
            </DogDetailsWrapper>
        </>
    );
};

export default DogDetails;
