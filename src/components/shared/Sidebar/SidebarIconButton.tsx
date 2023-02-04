import { AiFillHome } from 'react-icons/all';

export const SidebarButton = ({ children, tipText }) => (
  <div className="tooltip tooltip-right" data-tip={tipText}>
    <li>
      <button className="btn btn-square btn-md mb-2 text-secondary drop-shadow-md">{children}</button>
    </li>
  </div>
);

// <div className="tooltip tooltip-right" data-tip="Home">
//     <SidebarButton>
//         <AiFillHome className="h-8 w-8" />
//     </SidebarButton>
// </div>
