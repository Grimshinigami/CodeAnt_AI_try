import { Button } from "../ui/button"
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../ui/select"

import HomeIcon from "./HomeIcon"
import CodeIcon from "./CodeIcon"
import CloudIcon from "./CloudIcon"
import HowIcon from "./HowIcon"
import SettingsIcon from "./SettingsIcon"
import SupportIcon from "./SupportIcon"
import LogoutIcon from "./LogoutIcon"

function InnerButtons({currBtn, setCurrBtn,users,currUser,setCurrUser}:
    {
        currBtn:number,
        setCurrBtn:React.Dispatch<React.SetStateAction<number>>,
        users:string[],
        currUser:string,
        setCurrUser:React.Dispatch<React.SetStateAction<string>>,
    }) {
  return (
    <div className=" w-full px-5 flex flex-col h-full">
        <div className=" px-2">
            <Select value={currUser} onValueChange={setCurrUser}>
                <SelectTrigger className=" border-2 border-[#D5D7DA] outline-none focus:ring-0">
                    <SelectValue placeholder="Select a User"/>
                </SelectTrigger>
                <SelectContent defaultValue={'UtkarshDhairyaPanwar'}>
                    <SelectGroup>
                        <SelectLabel>
                            <span className=" font-inter">
                                Users
                            </span>
                        </SelectLabel>
                        {users.map((user:string,index)=>{
                            
                            const newval = user.length>15?user.substring(0,16)+'...':user;

                            return (
                            <SelectItem key={index} value={user}>
                                <span className=" font-inter">
                                    {newval}
                                </span>
                            </SelectItem>)
                        })}
                        
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className=" w-full flex flex-col flex-grow gap-2 px-2 pt-4">
            <Button 
            onClick={()=>setCurrBtn(0)}
            className={` w-full flex flex-row gap-3 justify-start ${currBtn==0?'bg-[#1570EF] text-white hover:bg-[#0f62d7]':'bg-white text-[#414651] hover:bg-[#F5F5F5]'} shadow-none`}>
                <div className=" flex justify-center items-center scale-150">
                    <HomeIcon namedClass={currBtn==0?'whiteFill':'greyFill'}/>
                </div>
                <p className=" font-inter font-semibold">Repositories</p>
            </Button>
            <Button 
            onClick={()=>setCurrBtn(1)}
            className={` w-full flex flex-row gap-3 justify-start ${currBtn==1?'bg-[#1570EF] text-white hover:bg-[#0f62d7]':'bg-white text-[#414651] hover:bg-[#F5F5F5]'} shadow-none`}>
                <div className=" flex justify-center items-center scale-150">
                    <CodeIcon namedClass={currBtn==1?'whiteFill':'greyFill'}/>
                </div>
                <p className=" font-inter font-semibold">AI Code Review</p>
            </Button>
            <Button 
            onClick={()=>setCurrBtn(2)}
            className={` w-full flex flex-row gap-3 justify-start ${currBtn==2?'bg-[#1570EF] text-white hover:bg-[#0f62d7]':'bg-white text-[#414651] hover:bg-[#F5F5F5]'} shadow-none`}>
                <div className=" flex justify-center items-center scale-150">
                    <CloudIcon namedClass={currBtn==2?'whiteFill':'greyFill'}/>
                </div>
                <p className=" font-inter font-semibold">Cloud Security</p>
            </Button>
            <Button 
            onClick={()=>setCurrBtn(3)}
            className={` w-full flex flex-row gap-3 justify-start ${currBtn==3?'bg-[#1570EF] text-white hover:bg-[#0f62d7]':'bg-white text-[#414651] hover:bg-[#F5F5F5]'} shadow-none`}>
                <div className=" flex justify-center items-center scale-150">
                    <HowIcon namedClass={currBtn==3?'whiteFill':'greyFill'}/>
                </div>
                <p className=" font-inter font-semibold">How to Use</p>
            </Button>
            <Button 
            onClick={()=>setCurrBtn(4)}
            className={` w-full flex flex-row gap-3 justify-start ${currBtn==4?'bg-[#1570EF] text-white hover:bg-[#0f62d7]':'bg-white text-[#414651] hover:bg-[#F5F5F5]'} shadow-none`}>
                <div className=" flex justify-center items-center scale-150">
                    <SettingsIcon namedClass={currBtn==4?'whiteFill':'greyFill'}/>
                </div>
                <p className=" font-inter font-semibold">Settings</p>
            </Button>
        </div>
        <div className=" w-full flex-grow flex flex-col justify-end pb-4 gap-2 px-2">
            <Button className=" w-full flex flex-row gap-3 justify-start bg-white text-[#414651] hover:bg-[#F5F5F5] shadow-none">
                <div className=" flex justify-center items-center scale-150 relative left-1">
                    <SupportIcon namedClass="greyFill"/>
                </div>
                <p className=" font-inter font-semibold">Support</p>
            </Button>
            <Button className=" w-full flex flex-row gap-3 justify-start bg-white text-[#414651] hover:bg-[#F5F5F5] shadow-none">
                <div className=" flex justify-center items-center scale-150 relative left-1">
                    <LogoutIcon namedClass="greyFill"/>
                </div>
                <p className=" font-inter font-semibold">Logout</p>
            </Button>
        </div>
    </div>
  )
}

export default InnerButtons