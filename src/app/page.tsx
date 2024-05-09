import React from 'react'
import Image from 'next/image';
import { Sidebar } from '@/components/Sidebar';
import { Main } from '@/components/Main';
import { RightSidebar } from '@/components/RightSidebar';
import { Footer } from '@/components/Footer';


export const Page = () => {
  return (
    <>  
        <div className='flex flex-col'>
            <div className='flex mx-2'>
              <Sidebar />
              <Main />
              <RightSidebar />
            </div>
            <Footer />
        </div>
    </>
  )
}

export default Page;