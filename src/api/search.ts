export const search = async (term: String) => {
    const res = await fetch(
        `https://nominatim.openstreetmap.org/search?=${term}&format=geojson&addressdetails=1&layer=address&limit=5`
    );
    const data = await res.json(
}