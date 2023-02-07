import {
  AiOutlineHeart,
  BsBookmark,
  BsFillReplyFill,
  BsShareFill,
  FaRetweet,
  IoEarthSharp,
  MdMoreHoriz,
} from 'react-icons/all';
import React from 'react';

type Props = {
  displayName: string;
  nickname: string;
  textContent: string;
  imgUrl?: string;
};

export const PostCard = ({ displayName, nickname, textContent, imgUrl }: Props) => (
  <div className="mb-4 w-full rounded-lg bg-base-200 drop-shadow-lg ">
    <div className="rounded-t-lg px-4 py-2">
      <div className="flex w-full justify-between hover:cursor-pointer">
        <div className="flex">
          <div className="w-12">
            <img src="https://source.unsplash.com/random/800x800/?img=1" className="rounded" />
          </div>
          <div className="pl-2">
            <p className="font-bold">{displayName}</p>
            <p className="text-neutral-content">@{nickname}</p>
          </div>
        </div>
        <div className="flex items-center">
          <IoEarthSharp />
          <p className="ml-1">2 min ago</p>
        </div>
      </div>
      <div className="mt-2">
        <p>{textContent}</p>
        {imgUrl ? <img alt={'image'} src={imgUrl} className="mx-auto mt-3 rounded" /> : null}
      </div>
    </div>
    <div className="flex justify-around py-2 px-0">
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <BsFillReplyFill className={'h-6 w-6'} />
      </button>
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <FaRetweet className={'h-6 w-6'} />
      </button>
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <AiOutlineHeart className={'h-6 w-6'} />
      </button>
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <BsBookmark className={'h-5 w-5'} />
      </button>
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <BsShareFill className={'h-5 w-5'} />
      </button>
      <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
        <MdMoreHoriz className={'h-5 w-5'} />
      </button>
    </div>
  </div>
);
