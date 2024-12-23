import DatabaseIcon from '../../assets/databaseIcon.svg'
import BlueDot from '../../assets/blueDot.svg'

function SingleRepo({name,access,language,size,lastupdate,cs=''}:
    {name:string,access:string,language:string,size:string,lastupdate:string,cs?:string}) {
  return (
    <div className={` w-full bg-white hover:bg-[#F5F5F5] flex flex-col gap-5 p-5 border-[#E9EAEB] ${cs}`}>
        <div className=' flex flex-row gap-2'>
            <p className=' font-inter font-semibold'>{name}</p>
            <div className=' font-inter text-xs text-[#175CD3] border-2 border-[#B2DDFF] bg-[#EFF8FF] rounded-full px-1 flex items-center'>
                <p>{access}</p>
            </div>
        </div>
        <div className=' flex flex-row gap-6 font-inter text-sm'>
            <div className=' flex flex-row gap-1 items-center'>
                <p className=''>{language}</p>
                <img src={BlueDot} alt="Blue Dot" />
            </div>
            <div className=' flex flex-row gap-1'>
                <img src={DatabaseIcon} alt="Database Icon" />
                <p className=''>{size}</p>
            </div>
            <div className=' flex flex-row'>
                <p>Updated {lastupdate} ago</p>
            </div>
        </div>
    </div>
  )
}

export default SingleRepo