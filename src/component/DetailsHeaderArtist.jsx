
const DetailHeader = ({artistData}) => {

  return(
    <div className="w-full flex flex-col h-[240px] mb-10  ">
      <div className="w-full h-full bg-gradient-to-l from-transparent to-black "></div>
      <div className="flex flex-row mt-2">
           <div className="w-full h-[240px] flex justify-start items-center">
            <img 
             className="h-auto w-full max-h-[200px] max-w-[200px] rounded-full object-cover border-2 shadow-xl shadow-black" 
         src = {artistData?.data[0].avatar} 
          alt="art"
          />
           </div>
          <div className="ml-5  w-full h-[240px] overflow-y-scroll hide-scrollbar ">
            <p className="text-gray-200 text-xl my-1 font-bold ">
              {artistData?.data[0].attributes.name}
            </p>

            <p className="text-gray-500 text-base my-1 ">{artistData?.data[0].attributes.artistBio}</p>
          </div>
      </div>
    </div>
  )
}
  
export default DetailHeader;