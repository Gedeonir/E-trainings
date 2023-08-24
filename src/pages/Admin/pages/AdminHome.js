import React,{useState,useEffect} from 'react'
import DashboardLayout from '../components/DashboardLayout'



export default function AdminHome() {
  const [bgColor, setBgColor] = useState('#FFFFFF');
  
  return (
    <DashboardLayout>
    <div className='px-8 w-full mx-auto relative max-h-screen overflow-y-auto'>
      <div className='py-4'>
        <h1 className='flex justify-start gap-2 items-end text-primary font-medium lg:text-2xl text-lg w-full'>
          Dashboard
        </h1>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        <div className="flex flex-col col-span-2 py-4">
          <h2 className='flex justify-start gap-2 items-end text-primary font-bold text-sm w-full'>
            Top members
          </h2>
          <div className="lg:overflow-x-hidden overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-xs text-text_secondary font-light">
                  <thead className="border-b border-text_secondary_2 font-medium">
                      <tr>
                        <th scope="col" className="px-2 py-4">#</th>
                        <th scope="col" className="px-2 py-4">Full names</th>
                        <th scope="col" className="px-2 py-4">Mobile</th>
                        <th scope="col" className="px-2 py-4">Category</th>
                        <th scope="col" className="px-2 py-4">Location</th>
                        <th scope="col" className="px-2 py-4">Course enrolled in</th>
                        <th scope="col" className="px-2 py-4">Total completed</th>
                      </tr>
                  </thead>
                  <tbody>
                  {/* {filterMembers.length <=0?(
                      <tr>
                          <td className="px-2 py-4 font-medium text-center" colSpan={9}>No member matches your criterias</td>
                      </tr>
                  ):(filterMembers?.map((member,index)=>( */}
                          <tr
                          className="border-b cursor-pointer delay-100 border-text_secondary_2 transition duration-300 ease-in-out hover:bg-secondary">
                            <td className="px-2 py-4 font-medium">1</td>
                            <td className="px-2 py-4 flex justify-start gap-2">
                                {/* <div className="h-4 w-4 rounded-full">
                                    <img 
                                    src={!member?.profilePicture?'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png':`${member?.profilePicture}`} className='w-full h-full object-cover rounded-full'/>
                                </div>
                                {member?.fullNames} */}
                            </td>
                            <td className="px-2 py-4"></td>
                            <td className="px-2 py-4"></td>
                            <td className="px-2 py-4"></td>
                            <td className="px-2 py-4"></td>
                            <td className="px-2 py-4"></td>
                          </tr>
                      {/* )))} */}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-secondary p-4">
          <h2 className='flex justify-start gap-2 items-end text-primary font-bold text-sm w-full'>
            Top courses
          </h2>
          <div className="lg:overflow-x-hidden overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-xs text-text_secondary font-light">
                  <thead className="border-b border-text_secondary_2">
                      <tr>
                        <th scope="col" className="px-2 py-4">#</th>
                        <th scope="col" className="px-2 py-4">Name</th>
                        <th scope="col" className="px-2 py-4">Completed by</th>
                      </tr>
                  </thead>
                  <tbody>

                    <tr
                    className="border-b cursor-pointer delay-100 border-text_secondary_2 transition duration-300 ease-in-out hover:bg-secondary">
                      <td className="px-2 py-4 font-medium">1</td>
                      <td className="px-2 py-4"></td>
                      <td className="px-2 py-4"></td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </DashboardLayout>
  )
}

