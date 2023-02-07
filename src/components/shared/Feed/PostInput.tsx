import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import { AiFillWarning, GrAttachment, IoEarthSharp, MdHowToVote, RiAttachment2 } from 'react-icons/all';

export const PostInput = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');

  const parentStyle: CSSProperties = {
    minHeight: parentHeight,
  };

  const textAreaStyle: CSSProperties = {
    height: textAreaHeight,
  };

  useEffect(() => {
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current!.scrollHeight}px`);
  }, [text]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto');
    setParentHeight(`${textAreaRef.current!.scrollHeight}px`);
    setText(event.target.value);
  };

  return (
    <>
      <form className="">
        <div className="mb-4 w-full rounded-lg bg-base-200 drop-shadow-lg" style={parentStyle}>
          <div className="rounded-t-lg px-4 py-2">
            <label htmlFor="post" className="sr-only">
              Your post
            </label>
            <textarea
              ref={textAreaRef}
              id="post"
              rows="3"
              style={textAreaStyle}
              onChange={onChangeHandler}
              className="textarea-ghost textarea h-fit h-full w-full resize-none border-0 px-0 focus:bg-base-200 focus:outline-none"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
          <div className="flex items-center justify-between py-2 pr-2">
            <div className="flex space-x-1 pl-0 sm:pl-2">
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <RiAttachment2 className={'h-6 w-6'} />
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <MdHowToVote className={'h-6 w-6'} />
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <IoEarthSharp className={'h-6 w-6'} />
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <AiFillWarning className={'h-6 w-6'} />
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                EN
              </button>
            </div>
            <button type="submit" className="btn-primary btn-sm btn inline-flex">
              Post!
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
