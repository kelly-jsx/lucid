import {
  AiFillHeart,
  AiOutlineHeart,
  BsBookmark,
  BsFillBookmarkFill,
  BsFillReplyFill,
  BsShareFill,
  FaRetweet,
  IoEarthSharp,
  MdMoreHoriz,
} from 'react-icons/all';
import React, { useState, useEffect } from 'react';

type Props = {
  displayName: string;
  nickname: string;
  textContent: string;
  imgUrl?: string;
  altImg?: string;
  liked?: boolean;
  bookmarked?: boolean;
};

export const PostCard = ({ displayName, nickname, textContent, imgUrl, altImg, liked, bookmarked }: Props) => {
  const [like, setLike] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    liked ? setLike(true) : setLike(false);
    bookmarked ? setBookmark(true) : setBookmark(false);
  }, []);

  const handleLike = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    like ? setLike(false) : setLike(true);
  };

  const handleBookmark = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    bookmark ? setBookmark(false) : setBookmark(true);
  };

  return (
    <div className="mb-5 block w-full rounded-lg bg-base-200 drop-shadow-lg">
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
          <div className="flex items-center text-neutral-content">
            <IoEarthSharp />
            <p className="ml-1">2 min ago</p>
          </div>
        </div>
        <div className="mt-4 bg-cover">
          <p>{textContent}</p>
          {imgUrl ? (
            <img alt={altImg} src={imgUrl} className="mx-auto mt-2  max-h-96 w-full rounded-lg object-cover" />
          ) : null}
        </div>
      </div>
      <div className="flex justify-around py-2 px-0">
        <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
          <BsFillReplyFill className={'h-6 w-6'} />
        </button>
        <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
          <FaRetweet className={'h-6 w-6'} />
        </button>
        <button
          className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary"
          onClick={handleLike}
        >
          {like ? <AiFillHeart className={'h-6 w-6'} /> : <AiOutlineHeart className={'h-6 w-6'} />}
        </button>
        <button
          className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary"
          onClick={handleBookmark}
        >
          {bookmark ? <BsFillBookmarkFill className={'h-5 w-5'} /> : <BsBookmark className={'h-5 w-5'} />}
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
};
