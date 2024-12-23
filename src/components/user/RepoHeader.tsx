import { Button } from "../ui/button"
import RefreshIcon from '../../assets/refreshIcon.svg'
import AddIcon from '../../assets/addIcon.svg'
import SearchIcon from '../../assets/searchIcon.svg'


function RepoHeader({totalRepos}:{totalRepos:number}) {
  return (
    <div className=" w-full flex flex-col p-4 gap-4 border-b-2 border-[#E9EAEB]">
        <div className=" w-full flex flex-col md:flex-row gap-4 ">
            <div className=" flex flex-col gap-2">
                <p className=" font-inter font-semibold text-xl">Repositories</p>
                <p className=" font-inter font-normal text-sm">{totalRepos} Total Repositories</p>
            </div>
            <div className=" flex flex-row flex-grow gap-4 items-center md:justify-end ">
                <Button className="bg-white text-[#414651] hover:bg-[#F5F5F5]">
                    <img src={RefreshIcon} className=" h-[80%]" alt="Refresh Icon" />
                    <p className=" font-inter">Refresh</p>
                </Button>
                <Button className="bg-[#1570EF] text-white hover:bg-[#0f62d7]">
                    <img src={AddIcon} alt="Refresh Icon" />
                    <p>Add Repository</p>
                </Button>
            </div>
        </div>
        <div className=" w-full flex flex-row">
            <div className=" border-2 border-[#D5D7DA] rounded-md p-2 flex flex-row items-center gap-1">
                <img src={SearchIcon} alt="Search Icon" />
                <input className=" font-inter text-[#414651] h-full outline-none" placeholder="Search Repositories"/>
            </div>
        </div>
    </div>
  )
}

export default RepoHeader