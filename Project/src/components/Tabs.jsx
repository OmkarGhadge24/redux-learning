import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../store/features/searchSlice"

const Tabs = () => {
    const tabs = ['Photos', 'Videos']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)
    return (
        <div className="flex gap-4 items-center justify-center py-2">
            {
                tabs.map((tab, index) => (
                    <button onClick={() => dispatch(setActiveTab(tab))}
                        className={`px-4 py-2 uppercase transition rounded-md ${activeTab === tab ? 'bg-[#229eb1] text-zinc-950' : 'bg-zinc-700 text-[#fafafa]'}`}
                        key={index}>
                        {tab}
                    </button>
                ))
            }
        </div>
    )
}

export default Tabs