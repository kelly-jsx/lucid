import React, { useState, CSSProperties, useEffect, useRef } from 'react';
import { AiFillWarning, AiOutlineWarning, IoEarthSharp, RiAttachment2, TbClipboardText } from 'react-icons/all';
import { TextInput } from '~/components/shared/TextInput';

type Props = {
  rowsNumber?: number;
};

export const PostInput = ({ rowsNumber }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  const [showCW, setShowCW] = useState(false);

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

  const handleCW = () => {
    showCW ? setShowCW(false) : setShowCW(true);
  };

  return (
    <>
      <div>
        <div className="mb-4 w-full rounded-lg bg-base-200 drop-shadow-lg" style={parentStyle}>
          {showCW ? <TextInput type={'text'} placeholder={'Write your warning here'} /> : null}
          <div className="px-4 py-2">
            <label htmlFor="post" className="sr-only">
              Your post
            </label>
            <textarea
              ref={textAreaRef}
              id="post"
              rows={rowsNumber}
              style={textAreaStyle}
              onChange={onChangeHandler}
              className="textarea-ghost textarea h-fit h-full w-full resize-none border-0 px-0 focus:bg-base-200 focus:outline-none"
              placeholder="What's on your mind?"
            />
          </div>
          <div className="flex items-center justify-between py-2 pr-2">
            <div className="flex space-x-1 pl-0 sm:pl-2">
              <label
                htmlFor="attachment"
                className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary"
              >
                <RiAttachment2 className={'h-6 w-6'} />
              </label>
              <input id="attachment" type="file" className="hidden" multiple />
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <TbClipboardText className={'h-6 w-6'} />
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                <IoEarthSharp className={'h-6 w-6'} />
              </button>
              <button
                className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary"
                onClick={handleCW}
              >
                {showCW ? <AiFillWarning className={'h-6 w-6'} /> : <AiOutlineWarning className={'h-6 w-6'} />}
              </button>
              <button className="btn-ghost btn-square btn-sm btn inline-flex justify-center p-0 text-secondary">
                EN
              </button>
            </div>
            <div>
              <p className={'mr-3 inline-flex font-bold text-neutral-content'}>1000</p>
              <button type="submit" className="btn-primary btn-sm btn inline-flex">
                Post!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
