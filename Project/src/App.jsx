import { fetchPhotos, fetchVideos } from './api/mediaAPI'

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-950 text-[#fafafa]'
    >
      
      <button className='bg-green-400 px-4 py-2 rounded mr-4' onClick={async () => {
        const data = await fetchPhotos('dog')
        console.log(data.results);
      }}>Fetch Photos</button>
      <button className='bg-blue-400 px-4 py-2 rounded' onClick={async () => {
        const data = await fetchVideos('dog')
        console.log(data.videos);
      }}>Fetch Videos</button>
    </div>
  )
}

export default App