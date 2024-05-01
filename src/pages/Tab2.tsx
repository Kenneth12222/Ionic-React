

import React, { useState, useEffect } from 'react';
import { IonApp, IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';

const apiKey = 'uDsaNoiARkVeopRASv9XPIXAT9zPDZ4OPP4Hf6UypKcwoHfRlOaJJ08G';
const apiUrl = `https://api.pexels.com/v1/curated?per_page=9`;
let page = 1;

const Tab1: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${apiUrl}&page=${page}`, {
        headers: {
          Authorization: apiKey,
        },
      });
      const data = await response.json();
      const newPhotos = data.photos.map((photo: any) => photo.src.medium);
      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const generateImages = () => {
    // Clear existing photos
    setPhotos([]);
    page = 1;
    fetchPhotos();
  };

  return (
    <IonApp>
      <IonContent>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg src={photo} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
        <button onClick={generateImages}>Generate Images</button>
      </IonContent>
    </IonApp>
  );
};

export default Tab1;
