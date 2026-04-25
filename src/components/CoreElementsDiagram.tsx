import React from "react";

export const CoreElementsDiagram: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center justify-center my-12">
      {/* Labels Left */}
      <div className="flex flex-col gap-4 w-full md:w-64">
        <div className="p-4 border border-zinc-200 bg-zinc-50 rounded-lg relative">
          <h4 className="font-bold text-zinc-900 mb-1">Top Header</h4>
          <p className="text-sm text-zinc-600">
            Appears at the very top, often used for branding or quick links
          </p>
          <div className="hidden md:block absolute right-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
        </div>
        <div className="p-4 border border-zinc-200 bg-zinc-50 rounded-lg relative">
          <h4 className="font-bold text-zinc-900 mb-1">Header</h4>
          <p className="text-sm text-zinc-600">
            Larger section under the navigation, may include banners or page
            headings
          </p>
          <div className="hidden md:block absolute right-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
        </div>
        <div className="p-4 border border-zinc-200 bg-zinc-50 rounded-lg relative">
          <h4 className="font-bold text-zinc-900 mb-1">Sidebar</h4>
          <p className="text-sm text-zinc-600">
            A supplementary column for additional tools or links
          </p>
          <div className="hidden md:block absolute right-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
        </div>
      </div>

      {/* Diagram */}
      <div className="w-64 h-80 border-2 border-gray-800 rounded-lg flex flex-col overflow-hidden shadow-sm bg-[#FDFBF7] relative">
        {/* Top Header */}
        <div className="h-6 bg-zinc-500 border-b-2 border-gray-800"></div>
        {/* Navigation */}
        <div className="h-8 bg-green-400 border-b-2 border-gray-800 flex items-center px-2">
          <div className="w-4 h-1 bg-gray-800 rounded-sm"></div>
        </div>
        {/* Header */}
        <div className="h-16 bg-red-400 border-b-2 border-gray-800"></div>

        {/* Main Area */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="w-1/3 bg-zinc-500 border-r-2 border-gray-800"></div>
          {/* Content */}
          <div className="w-2/3 bg-zinc-200"></div>
        </div>

        {/* Footer */}
        <div className="h-12 bg-zinc-400 border-t-2 border-gray-800"></div>
      </div>

      {/* Labels Right */}
      <div className="flex flex-col gap-4 w-full md:w-64">
        <div className="p-4 border border-zinc-200 bg-zinc-100 rounded-lg relative">
          <div className="hidden md:block absolute left-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
          <h4 className="font-bold text-zinc-900 mb-1">Navigation</h4>
          <p className="text-sm text-zinc-600">
            The menu or bar that helps users navigate the website
          </p>
        </div>
        <div className="p-4 border border-zinc-200 bg-zinc-50 rounded-lg relative">
          <div className="hidden md:block absolute left-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
          <h4 className="font-bold text-zinc-900 mb-1">Content Area</h4>
          <p className="text-sm text-zinc-600">
            The main section for the website's core content
          </p>
        </div>
        <div className="p-4 border border-zinc-200 bg-zinc-50 rounded-lg relative">
          <div className="hidden md:block absolute left-[-2rem] top-1/2 w-8 border-t border-dashed border-gray-400"></div>
          <h4 className="font-bold text-zinc-900 mb-1">Footer</h4>
          <p className="text-sm text-zinc-600">
            The closing section, usually with secondary information like
            contacts or policies
          </p>
        </div>
      </div>
    </div>
  );
};
