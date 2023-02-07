type Props = {
  children: any;
  tipText: string;
};

export const SidebarButton = ({ children, tipText }: Props) => (
  <div className="tooltip tooltip-right" data-tip={tipText}>
    <li>
      <button className="btn-square btn-md btn mb-4 text-secondary drop-shadow-md">{children}</button>
    </li>
  </div>
);
