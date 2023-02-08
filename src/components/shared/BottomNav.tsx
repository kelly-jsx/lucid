import { AiFillHome, AiFillMessage, IoNotifications } from 'react-icons/all';
import React from 'react';
import { SidebarButton } from '~/components/shared/Sidebar/SidebarIconButton';

export const BottomNav = () => (
  // <div className="btm-nav md:hidden">
  <div className="btm-nav mt-5 md:hidden">
    <button className="active text-primary">
      <AiFillHome className="h-6 w-6" />
    </button>
    <button className="text-primary">
      <div className="indicator">
        <span className="badge-secondary badge indicator-item cursor-default">934</span>
        <AiFillMessage className="h-6 w-6" />
      </div>
    </button>
    <button className="text-primary">
      <div className="indicator">
        <span className="badge-secondary badge indicator-item cursor-default">2137</span>
        <IoNotifications className="h-6 w-6" />
      </div>
    </button>
  </div>
);
