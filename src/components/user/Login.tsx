import { useWindowSize } from "@/hooks/useWindow"
import { useEffect,useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import CodeAntIcon from '../../assets/codeAntLogo.svg'
import GithubIcon from '../../assets/githubIcon.svg'
import BitBucketIcon from '../../assets/bitbucketIcon.svg'
import AzureDevopsIcon from '../../assets/azuredevopsIcon.svg'
import GitLabIcon from '../../assets/gitlabIcon.svg'
import SsoIcon from '../../assets/ssoIcon.svg'
import SignInPic from '../../assets/signinPic.svg'
import PieChartIcon from '../../assets/pieChartIcon.svg'
import UpArrowIcon from '../../assets/uparrowIcon.svg'
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

function Login() {

  const [active, setActive] = useState<boolean>(true)

  const size = useWindowSize();

  const [smaller, setsmaller] = useState<boolean>(size.width>768?false:true)
  
  useEffect(() => {
    // console.log(size.width, size.height)
    if(size.width>768){
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
    
  const navigate = useNavigate();

  return (
    <div className=" w-full h-full flex flex-row ">
        {!smaller && 
        <div className=" w-1/2 h-full flex flex-col">
            <div className=" flex-grow flex flex-col justify-end items-center p-4">
                <Card className=" border-none outline-none pb-4 rounded-3xl" id = "shadower">
                    <CardTitle className=" border-b-2 border-[#E6E8F0] py-4 pr-20 pl-4 flex flex-row items-center gap-2">
                        <img src={CodeAntIcon} alt="Code Ant Icon" />
                        <p className=" font-inter font-extrabold lg:text-xl text-md">
                            AI to Detect & Autofix Bad Code
                        </p>
                    </CardTitle>
                    <CardContent className=" flex flex-row p-2">
                        <div className=" w-1/3 flex flex-col justify-center items-center text-center">
                            <p className=" font-inter font-bold text-lg">30+</p>
                            <p className=" font-inter text-sm">Language Support</p>
                        </div>
                        <div className=" w-1/3 flex flex-col justify-center items-center text-center">
                            <p className=" font-inter font-bold text-lg">10K+</p>
                            <p className=" font-inter text-sm">Developers</p>
                        </div>
                        <div className=" w-1/3 flex flex-col justify-center items-center text-center">
                            <p className=" font-inter font-bold text-lg">100K+</p>
                            <p className=" font-inter text-sm">Hours Saved</p>
                        </div>
                    </CardContent>
                </Card>
                <Card className="p-2 relative lg:left-28 left-16 -top-3 rounded-3xl px-4" id="shadower">
                    <CardTitle className=" flex flex-row p-4 gap-16">
                        <div>
                            <img src={PieChartIcon} alt="Pie Chart Icon" />
                        </div>
                        <div className=" flex flex-col">
                            <div className=" flex flex-row items-center">
                                <img src={UpArrowIcon} className=" " alt="Up arrow Icon" />
                                <p className=" font-inter font-bold text-[#0049C6] text-sm">14%</p>
                            </div>
                            <div>
                                <p className=" font-inter text-sm font-normal">This week</p>
                            </div>
                        </div>
                    </CardTitle>
                    <CardContent className=" pl-4 pb-2">
                        <div className=" flex flex-col">
                            <p className=" font-inter font-bold lg:text-base text-sm">Issues Fixed</p>
                            <p className=" font-inter font-extrabold lg:text-2xl text-lg">500K+</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className=" w-[39.44%] flex ">
                <img src={SignInPic} className="" alt="CodeAnt Logo" />
            </div>
        </div>
        }
        <div className=" w-full md:w-1/2 h-full bg-[#FAFAFA] px-6 md:py-24 py-36 flex flex-col justify-center items-center font-inter">
            {/* <div className=" w-full h-full border-2 border-[#E9EAEB] bg-white rounded-md flex flex-col items-center"> */}
                <Card className=" shadow-none w-full rounded-md border-[#E9EAEB] bg-white">
                    <CardHeader className="w-full">
                        <CardTitle className=" flex flex-row justify-center items-center gap-2 w-full">
                            <img src={CodeAntIcon} alt="Code Ant Icon" />
                            <p className=" font-satoshi font-medium text-3xl">CodeAnt AI</p>
                        </CardTitle>
                        <CardDescription className=" font-semibold flex flex-row justify-center text-black text-2xl lg:text-3xl pt-6">
                            <p>Welcome to CodeAnt AI</p>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="SAAS" className=" w-full">
                            <TabsList className=" flex flex-row">
                                <TabsTrigger 
                                onClick={()=>setActive(true)}
                                value="SAAS" 
                                className={`w-1/2 ${active==true?'bg-blue-600 text-white':'bg-[#FAFAFA] text-[#414651]'}  p-4 rounded-md font-bold`}
                                >
                                    SAAS
                                </TabsTrigger>
                                <TabsTrigger 
                                value="SelfHosted"
                                onClick={()=>setActive(false)} 
                                className={`w-1/2 ${active==false?'bg-blue-600 text-white':'bg-[#FAFAFA] text-[#414651]'}  p-4 rounded-md font-bold`}
                                >
                                    Self Hosted
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="SAAS" 
                            
                            className={` w-full flex flex-col lg:px-20 gap-4 ${active==true?'pt-6':''} items-center`}>
                                <Button
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={GithubIcon} alt="GithubIcon" />
                                    <p>Sign in with Github</p>
                                </Button>
                                <Button 
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={BitBucketIcon} alt="GithubIcon" />
                                    <p>Sign in withBitBucket</p>
                                </Button>
                                <Button 
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={AzureDevopsIcon} alt="GithubIcon" />
                                    <p>Sign in with Azure Devops</p>
                                </Button>
                                <Button 
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={GitLabIcon} alt="GithubIcon" />
                                    <p>Sign in with GitLab</p>
                                </Button>
                            </TabsContent>
                            <TabsContent value="SelfHosted" 
                            
                            className={` w-full flex flex-col lg:px-20 gap-4 ${active==false?'pt-6':''} items-center`}>
                                <Button 
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={GitLabIcon} alt="GithubIcon" />
                                    <p>Sign in with GitLab</p>
                                </Button>
                                <Button 
                                onClick={()=>navigate('/repos')}
                                className=" bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 xl:w-[66.6%] w-full font-bold">
                                    <img src={SsoIcon} alt="GithubIcon" />
                                    <p>Sign in with SSO</p>
                                </Button>
                                <Button className=" invisible bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 lg:w-[66.6%] w-full font-bold">
                                    <img src={SsoIcon} alt="GithubIcon" />
                                    <p>Sign in with 1</p>
                                </Button>
                                <Button className=" invisible bg-white hover:bg-[#FAFAFA] text-black shadow-none border-2 border-[#D8DAE5] py-6 lg:w-[66.6%] w-full font-bold">
                                    <img src={SsoIcon} alt="GithubIcon" />
                                    <p>Sign in with 2</p>
                                </Button>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
                <div className=" w-full flex items-center text-center justify-center p-6">
                    <p>By Signing up you agree to the <b>Privacy Policy</b>.</p>
                </div>

            {/* </div> */}
        </div>
    </div>
  )
}

export default Login