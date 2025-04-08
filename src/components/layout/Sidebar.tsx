import React from "react";

interface SidebarItemProps {
  title: string;
  organization: string;
  tags: string[];
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  title,
  organization,
  tags,
}) => (
  <div className="border flex items-center gap-2 shadow-[2px_2px_0_#000] bg-white p-3 rounded-[10px] border-solid border-black">
    <div className="w-6 h-6 bg-[#47ACDF] rounded-[50%]" />
    <div className="flex flex-col">
      <div className="text-base">{organization}</div>
      <div className="flex gap-1 text-xs text-[#8F8F8F]">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-[278px] fixed h-screen shadow-[4px_4px_0_#000] bg-[#4D9FFD] p-5 rounded-[0_10px_10px_0] border-r-2 border-r-black border-solid max-md:hidden">
      <div className="text-[26px] mx-0 my-5">New</div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <SidebarItem
            key={`new-${i}`}
            title={`Event ${i}`}
            organization="Twitter"
            tags={["AI", "Health", "Sports"]}
          />
        ))}
      </div>
      <div className="text-[26px] mx-0 my-5">Featured</div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4].map((i) => (
          <SidebarItem
            key={`featured-${i}`}
            title={`Featured ${i}`}
            organization="Twitter"
            tags={["AI", "Health", "Sports"]}
          />
        ))}
      </div>
    </aside>
  );
};
