import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center w-full">
      <div className="flex flex-col max-w-7xl justify-between py-7 md:flex-row md:w-[1271.01px] h-[573.59px] m-14 2xl:w-[1390px] 2xl:h-[600px] 2xl:m-14 xl:m-19  ">
        <div className="flex flex-col justify-center max-w-2xl xl:max-w-2xl space-y-3 w-full">
        <h1 className=" font-bold font-sans text-[37.84px] pt-11 tracking-tight">IMPECCABLE<br/>CRAFTSMANSHIP AND<br/>FINESSE</h1>          
      
      <p className="text-mytextbrown font-sans text-[29.24px] xl:w-[798.9] pt-10 pb-10 font-medium">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>

      <Button className="h-[49.2px] w-[247.67px] bg-mybrown text-white font-sans text-[25.8px] font-medium p-8">Explore Now</Button>
      </div>

      <div className="h-[573.59px] w-[421.38px] right-0 mx-auto p-5">
      <div className=" relative grid place-items-center">
      <Image 
        src={"/heroimage.png"}
        alt="image"
       width={421}
       height={573}
        className="object-contain object-center"
        priority

        />
        <div className="absolute h-[525.43px] w-[380.1] flex p-2 mb-4">
        <Image
        src={"/imageborder.png"}
        alt="image"
        width={380}
        height={525}
        className=" h-[525.43px] w-[380.1] object-contain object-center"
         />
        </div>
        </div>
        


      </div>
      </div>
    </div>


      
  );
}










