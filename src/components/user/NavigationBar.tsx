import { CardTitle } from "../ui/card"
import { 
    Sheet,
    // SheetClose,
    SheetContent,
    // SheetDescription,
    // SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger, 
} from "../ui/sheet"
// import { Button } from "../ui/button"
import InnerButtons from "./InnerButtons"
import CodeAntLogo from '../../assets/codeAntLogo.svg'
// import HomeIcon from '../../assets/homeIcon.svg'
import BarIcon from '../../assets/barIcon.svg'
import CrossIcon from '../../assets/crossIcon.svg'
import { useState } from "react"
import { useWindowSize } from "@/hooks/useWindow"
import { useEffect } from "react"

function NavigationBar({currBtn, setCurrBtn,users,currUser,setCurrUser}:
    {currBtn:number,
    setCurrBtn:React.Dispatch<React.SetStateAction<number>>,
    users:string[],
    currUser:string,
    setCurrUser:React.Dispatch<React.SetStateAction<string>>,
}) {


    const [barOpen, setBarOpen] = useState<boolean> (false);

    const size = useWindowSize();
    
    const [smaller, setsmaller] = useState<boolean>(size.width>768?false:true)
      
    useEffect(() => {
        // console.log(size.width, size.height)
        if(size.width>769){
            if(smaller!=false){
            setsmaller(false)
            console.log("Set smaller false");
            }
        }
        else{
            if(smaller!=true){
            setsmaller(true)
            console.log("Set smaller true");
            }
        }
    }, [size.width])

    useEffect(()=>{
        setBarOpen(false)
    },[smaller])


  return (
    <div className=" w-full md:w-[28%] lg:w-[24%] xl:w-[16.8%] h-full border-b-2 md:border-r-2 border-[#E9EAE] flex flex-col">
        {!smaller && 
        <CardTitle className=" border-none outline-none flex flex-row items-center gap-2 p-5">
            <img src={CodeAntLogo} alt="CodeAnt AI Logo" />
            <p className=" font-satoshi font-light text-2xl">CodeAnt AI</p>
        </CardTitle>}
        {smaller && 
        <Sheet onOpenChange={(isOpen)=> setBarOpen(isOpen)}>
            {!barOpen && 
            <div className=" outline-none flex flex-row items-center gap-2 p-5">
                <SheetHeader>
                    <SheetTitle className=" flex flex-row gap-2 items-center justify-center">
                        <img src={CodeAntLogo} alt="CodeAnt AI Logo" />
                        <p className=" font-satoshi font-light text-2xl">CodeAnt AI</p>
                    </SheetTitle>
                </SheetHeader>
                <div className=" flex-grow flex justify-end">
                    <SheetTrigger onClick={()=>setBarOpen(val=>!val)} className=" p-2 z-50">
                        <img src={barOpen==false?BarIcon:CrossIcon} alt="Bar Icon" />
                    </SheetTrigger>
                </div>
            </div>}
            <SheetContent side={"top"} className="">
                <div className=" outline-none flex flex-row items-center gap-2 p-5">
                    <SheetHeader>
                        <SheetTitle className=" flex flex-row gap-2 items-center justify-center">
                            <img src={CodeAntLogo} alt="CodeAnt AI Logo" />
                            <p className=" font-satoshi font-light text-2xl">CodeAnt AI</p>
                        </SheetTitle>
                    </SheetHeader>
                    
                    <div className=" flex-grow flex justify-end">
                        <SheetTrigger onClick={()=>setBarOpen(val=>!val)} className=" p-2 z-50">
                            <img src={barOpen==false?BarIcon:CrossIcon} alt="Bar Icon" />
                        </SheetTrigger>
                    </div>
                </div>
                <InnerButtons currBtn={currBtn} setCurrBtn={setCurrBtn} users={users} currUser={currUser} setCurrUser={setCurrUser}/>
            </SheetContent>
        </Sheet>}
        {!smaller &&
        <InnerButtons currBtn={currBtn} setCurrBtn={setCurrBtn} users={users} currUser={currUser} setCurrUser={setCurrUser}/>
        }
    </div>
  )
}

export default NavigationBar