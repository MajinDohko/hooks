import {useState, useEffect} from 'react';

const useFetchApi = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        const data = async () => {
            setLoading(true);
            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("No se pudo acceder a la url");
                    
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                setError(error)
            }finally{
                setLoading(false)
            }
        };
        data();
    }, [url])
    return {data, loading, error}
}

export default useFetchApi;