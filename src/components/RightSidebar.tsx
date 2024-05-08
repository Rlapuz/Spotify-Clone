import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

export const RightSidebar = () => {
  return (
      <>  
        <div className="flex flex-col ml-2 mt-3">
          <nav className="flex items-center gap-[15rem] spotify p-5 rounded-t-lg fixed top-0 z-40">
                <h1 className="font-bold">Shared</h1>
                <RxCross2 size={20}/>
          </nav>

            <main className="shadow-sm rounded-b-lg mt-[-1rem] p-5 spotify flex flex-col gap-5 h-[100rem]">
            </main>
        </div>
      </>
  )
}
