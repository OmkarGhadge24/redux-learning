import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos } from '../api/mediaAPI'
import { setError, setLoading, setResults } from '../store/features/searchSlice'
import { useEffect } from 'react'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const { query, activeTab, results, loading } = useSelector((state) => state.search)
    const dispatch = useDispatch()
    useEffect(function () {
        if (!query) return;
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = [];
                if (activeTab === 'Photos') {
                    const response = await fetchPhotos(query)
                    data = response.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.regular
                    }))
                }
                if (activeTab === 'Videos') {
                    const response = await fetchVideos(query)
                    data = response.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user.name || 'video',
                        thumbnail: item.image,
                        src: item.video_files[1].link
                    }))
                }
                dispatch(setResults(data))
                console.log(data);
            } catch (error) {
                dispatch(setError(error.message))
            }

        }
        getData()
    }, [query, activeTab, dispatch])
    if (loading) return <h1>Loading data...</h1>
    return (
  <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {
      results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))
    }
  </div>
)
}

export default ResultGrid