// api.ts
const apiKey = 'uDsaNoiARkVeopRASv9XPIXAT9zPDZ4OPP4Hf6UypKcwoHfRlOaJJ08G';
const apiUrl = `https://api.unsplash.com/photos/random?count=10&client_id=${apiKey}`;

export const fetchImages = async (): Promise<string[]> => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.map((item: any) => item.urls.regular);
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};
