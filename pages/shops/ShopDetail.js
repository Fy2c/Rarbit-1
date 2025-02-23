import Image from 'next/image'
import { RiCoupon3Line } from 'react-icons/ri'
import { FaDollarSign, FaRegComment } from 'react-icons/fa'
import { MdRoom, MdBookmarks, MdFavorite, MdRedeem } from 'react-icons/md'
import { FaPlay } from 'react-icons/fa'
import { BiBookmarks } from 'react-icons/bi'

export default function ShopDetail({
  shopName,
  location,
  rewardPoints,
  categories,
  tokenAllocations,
  imageUrl,
  description,
}) {
  return (
    <div>
      {/* <div className="w-[20.5rem]basis-2/3 md:h-[20.5rem]border-2 mt-3 h-[30rem] rounded-2xl border-white shadow-md"> */}
      <div className=" ">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="thumbnail"
            width={600}
            height={400}
            // layout="fill"
            objectFit="cover"
            className="h-30 w-30"
          />
        )}
      </div>

      <div className="ml-5">
        {/* ShopName and Categories */}
        <div className="flex  max-w-6xl justify-between">
          <p className="m-2 text-lg font-bold text-[#5865F2]">{categories}</p>
          <div className=" flex flex-row items-center justify-end space-x-4 pr-5">
            <button
              className=" flex flex-row items-center justify-center md:m-2"
              onClick={() => {}}
            >
              <BiBookmarks className="h-7 w-7 text-[#5865F2]" />
            </button>
          </div>
        </div>
        <h1 className="m-2 text-2xl font-bold dark:text-white">{shopName}</h1>

        {/* Subtile Details */}
        <div className="flex flex-row flex-wrap space-x-2">
          <div className="m-2 flex flex-row items-center">
            <MdRedeem size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">{rewardPoints + ' points'}</h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <FaDollarSign size={20} color="#5865F2" />
            <h1 className="pl-1 dark:text-white">
              {tokenAllocations + ' % token'}
            </h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <MdRoom size={20} color="red" className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">{location}</h1>
          </div>
          <div className="m-2 flex flex-row items-center">
            <FaRegComment size={20} color="grey" className="dark:text-white" />
            <h1 className="pl-1 dark:text-white">Comments</h1>
          </div>
          <div className="m-2 flex flex-row items-center pl-1">
            <RiCoupon3Line
              size={20}
              color="#5865F2"
              className="dark:text-white"
            />
            <h1 className="pl-1 dark:text-white">Discounts Available</h1>
          </div>
        </div>
        <p className="m-2 text-lg font-bold text-[#5865F2]">Shop Description</p>
        <p className="m-2 text-sm text-[#7b80b3]">{description}</p>

        {/* Buttons */}
        <div className="mt-10 flex flex-row ">
          <button className="m-auto mt-20 mb-3 flex flex-row items-center justify-center  rounded-xl bg-[#5865F2] pt-2 pb-2 pl-6 pr-10 shadow-md shadow-[#5865f28a] duration-300 ease-linear hover:bg-[#424bb6] md:m-2">
            <FaPlay className="animate-ping" size={10} color="#fff" />
            <h1 className="text-md flex pl-4 font-semibold text-white">
              Vote for more Reward Points
            </h1>
          </button>
        </div>
      </div>
    </div>
  )
}
