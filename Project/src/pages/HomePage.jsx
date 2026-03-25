import { useSelector } from "react-redux"
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"

const HomePage = () => {
    const { query } = useSelector((state) => state.search)
    return (
        <div className="space-y-8">
            <SearchBar />

            {query && <>
                <Tabs />
                <ResultGrid />
            </>}
        </div>
    )
}

export default HomePage