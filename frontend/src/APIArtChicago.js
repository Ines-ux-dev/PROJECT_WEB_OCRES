export const recherche = async (query) => {
    const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}&limit=4?fields=id,title,image_id,thumbnail`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
        throw new Error(`error loading search results (${res.status})`);
    }
    return res.json();
};
