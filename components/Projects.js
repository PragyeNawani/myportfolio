"use client"
import React from 'react'
import projectdata from '@/projectdata'

const Projects = () => {
  let projectsdata = projectdata
  // console.log(projectsdata)
  return (
    <section id="projects" className='h-fit lg:h-fit w-[100%] overflow-hidden pt-10 lg:pt-28'>
      <div className="con pb-10 lg:pb-20 w-[95%] lg:w-[90%] mx-auto h-[100%]">
        <div><h2 className='text-5xl lg:text-6xl font-bold text-center text-yellow-300 pb-10 '>Projects</h2></div>
        <div className="relative shadow-md sm:rounded-lg h-fit lg:h-3/4 w-full lg:w-full overflow-x-auto overflow-y-auto mx-auto">
          <table className="w-[300px] lg:w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
            <thead className="text-xl text-yellow-100 uppercase bg-gray-700 dark:bg-gray-700 dark:text-yellow-100">
              <tr>
                <th scope="col" className="px-3 py-3">
                  Project Name
                </th>
                <th scope="col" className="px-3 py-3">
                  Category
                </th>
                <th scope="col" className="px-3 py-3">
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {projectsdata.map((value, index) => (
                <tr className="odd:bg-gray-400 even:bg-gray-500 text-lg">
                  <th scope="row" className="px-1 lg:px-3 py-1 lg:py-4 font-medium text-yellow-50 whitespace-nowrap dark:text-yellow-50">
                    {value.projectname}
                  </th>
                  <td className="px-1 lg:px-3 py-1 lg:py-4 text-yellow-50">
                    {value.category}
                  </td>
                  <td className="px-1 lg:px-3 py-1 lg:py-4 text-center flex justify-end pr-2 lg:inline-block lg:pr-0">
                    <a href={`${value.link}`} target='__blank' className="font-medium text-blue-600 w-fit"> 
                      <div className='rounded-full bg-blue-100 w-fit min-h-5 p-2 lg:p-4 text-center'>
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                      <span className="sr-only">Icon description</span>
                        </div>
                      </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


        </div>
      </div>
    </section>
  )
}

export default Projects
