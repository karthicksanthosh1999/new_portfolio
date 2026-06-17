import Image from 'next/image';
import Link from 'next/link';
import robotImage from "@/public/ai.png";

const AIButton = () => {
  
  return (
    <div className="fixed bottom-16 right-2 z-50">
      <div className="relative w-[100px] h-[100px]">
        <Link
            href={'/ai'}
            className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <Image src={robotImage} alt='robot' height={50} width={50} />
        </Link>
        </div>
    </div>
  )
}

export default AIButton