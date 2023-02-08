import React from 'react';
import { MdCreate } from 'react-icons/all';
import { PostInput } from '~/components/shared/PostInput';

export const CreateButton = () => (
  <>
    {/*<div className="btn-primary btn-circle btn fixed bottom-5 right-5 md:hidden">*/}
    {/*  <MdCreate className={'h-8 w-8'} />*/}
    {/*</div>*/}

    {/* The button to open modal */}
    <a href="#my-modal-2" className="btn-primary btn-circle btn fixed bottom-20 right-5 md:bottom-5">
      <MdCreate className={'h-8 w-8'} />
    </a>
    <div className="modal" id="my-modal-2">
      <div className="mx-2 flex w-full flex-col sm:w-3/4 md:w-1/2">
        <a href="#" className="btn-sm btn-circle btn mb-1 place-self-end bg-base-200">
          ✕
        </a>
        <PostInput rowsNumber={5} />
      </div>
    </div>
  </>
);
