import { useState } from "react"
import NavigationBar from "./NavigationBar"
import RepoHeader from "./RepoHeader"
import SingleRepo from "./SingleRepo"
import { ScrollArea } from "../ui/scroll-area"
import { RepoT } from "@/types"

function Repos() {

  const Repos:RepoT[] = [
    {
      name:'design-system',
      access:'Public',
      language:'React',
      size:'7320 KB',
      lastupdate:'1 day'
    },
    {
      name:'codeant-ci-app',
      access:'Private',
      language:'Javascript',
      size:'5871 KB',
      lastupdate:'2 days'
    },
    {
      name:'analytics-dashboard',
      access:'Private',
      language:'Python',
      size:'4521 KB',
      lastupdate:'5 days'
    },
    {
      name:'mobile-app',
      access:'Public',
      language:'Swift',
      size:'3096 KB',
      lastupdate:'6 days'
    },
    {
      name:'e-commerce-platform',
      access:'Private',
      language:'Java',
      size:'6210 KB',
      lastupdate:'6 days'
    },
    {
      name:'blog-website',
      access:'Public',
      language:'HTML/CSS',
      size:'1876 KB',
      lastupdate:'4 days'
    },
    {
      name:'social-network',
      access:'Private',
      language:'PHP',
      size:'5432 KB',
      lastupdate:'7 days'
    },
    {
      name:'blog-website',
      access:'Public',
      language:'HTML/CSS',
      size:'1876 KB',
      lastupdate:'4 days'
    },
    {
      name:'social-network',
      access:'Private',
      language:'PHP',
      size:'5432 KB',
      lastupdate:'7 days'
    },

  ]

  const Users:string[] = ["UtkarshDhairyaPanwar","User1","User2","lkejfwoeijcwoeicmweiojcewifjoewiofjdsfkljsdfsjfkldsflkjsdfklsdfjsdklf"]

  const [currBtn, setCurrBtn] = useState<number>(0)
  const [currUser, setCurrUser] = useState<string>(Users[0])

  return (
    <div className=" w-full h-full flex md:flex-row flex-col">
        <NavigationBar currBtn={currBtn} setCurrBtn={setCurrBtn} users={Users} currUser={currUser} setCurrUser={setCurrUser}/>
        <div className="h-full flex-grow md:bg-[#FAFAFA] md:p-6 ">
            <div className=" w-full h-full bg-white md:border-2 md:border-[#E9EAEB] md:rounded-xl flex flex-col">
              <RepoHeader totalRepos={Repos.length}/>
              <ScrollArea className="  flex-grow flex-col p-[2.5px]">
                {Repos.map((repo:RepoT,index)=>(
                  <SingleRepo key={index} {...repo} cs={index<Repos.length-1?'border-b-2':'rounded-b-xl'}/>
                ))}
              </ScrollArea>
            </div>
        </div>
    </div>
  )
}

export default Repos