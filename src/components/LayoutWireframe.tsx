import React from 'react';

interface LayoutWireframeProps {
  type: string;
  name: string;
}

export const LayoutWireframe: React.FC<LayoutWireframeProps> = ({ type, name }) => {
  const renderWireframe = () => {
    switch (type) {
      case 'two-column':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/3 h-full border-2 border-gray-800 rounded-sm"></div>
              <div className="w-2/3 h-full border-2 border-gray-800 rounded-sm"></div>
            </div>
          </div>
        );
      case 'split-screen':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
              <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
            </div>
          </div>
        );
      case 'asymmetrical':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-2/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 flex gap-1">
                  <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
                  <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
                </div>
              </div>
              <div className="w-1/3 h-full border-2 border-gray-800 rounded-sm bg-yellow-200"></div>
            </div>
          </div>
        );
      case 'f-shape':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="w-full h-4 border-2 border-gray-800 rounded-sm bg-yellow-200"></div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/3 h-full border-2 border-gray-800 rounded-sm bg-yellow-200"></div>
              <div className="w-2/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm bg-yellow-200"></div>
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      case 'z-shape':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1 relative overflow-hidden">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="w-full h-4 border-2 border-gray-800 rounded-sm"></div>
            <div className="w-full h-4 border-2 border-gray-800 rounded-sm mt-auto"></div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
              <path d="M 10 20 L 90 20 L 10 80 L 90 80" fill="none" stroke="#fef08a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
            </svg>
          </div>
        );
      case 'card':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      case 'featured':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
              <div className="w-1/2 h-full flex flex-col gap-1 justify-center">
                <div className="w-full h-1 border-b-2 border-gray-800"></div>
                <div className="w-full h-1 border-b-2 border-gray-800"></div>
                <div className="w-3/4 h-1 border-b-2 border-gray-800"></div>
              </div>
            </div>
          </div>
        );
      case 'masonry':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-2/3 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/3 border-2 border-gray-800 rounded-sm"></div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/3 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-2/3 border-2 border-gray-800 rounded-sm"></div>
              </div>
              <div className="w-1/3 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
              </div>
            </div>
          </div>
        );
      case 'magazine':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-1/2 h-full border-2 border-gray-800 rounded-sm"></div>
              <div className="w-1/2 h-full flex flex-col gap-1">
                <div className="w-full h-1/2 border-2 border-gray-800 rounded-sm"></div>
                <div className="w-full h-1/2 flex gap-1">
                  <div className="w-full h-full border-2 border-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'fixed-nav':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1 bg-yellow-100">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-full h-full border-2 border-gray-800 rounded-sm"></div>
            </div>
          </div>
        );
      case 'hidden-nav':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1 relative">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-2 h-2 border border-gray-800 rounded-sm mr-1 flex flex-col justify-center items-center gap-[1px]">
                <div className="w-1 h-[1px] bg-gray-800"></div>
                <div className="w-1 h-[1px] bg-gray-800"></div>
                <div className="w-1 h-[1px] bg-gray-800"></div>
              </div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 gap-1">
              <div className="w-full h-full border-2 border-gray-800 rounded-sm"></div>
            </div>
            <div className="absolute top-1 left-1 bottom-1 w-1/3 bg-white border-2 border-gray-800 rounded-sm p-1 flex flex-col gap-1">
              <div className="w-full h-1 border-b-2 border-gray-800"></div>
              <div className="w-full h-1 border-b-2 border-gray-800"></div>
              <div className="w-full h-1 border-b-2 border-gray-800"></div>
            </div>
          </div>
        );
      case 'interactive':
        return (
          <div className="w-full h-24 border-2 border-gray-800 rounded flex flex-col p-1 gap-1">
            <div className="w-full h-3 border-2 border-gray-800 rounded-sm flex items-center px-1">
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full mr-1"></div>
              <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
              <div className="ml-auto w-3 h-1 bg-gray-800 rounded-sm"></div>
            </div>
            <div className="flex flex-1 items-center justify-between px-2 border-2 border-gray-800 rounded-sm">
              <div className="w-3 h-3 border-t-2 border-l-2 border-gray-800 transform -rotate-45"></div>
              <div className="w-8 h-8 border-2 border-gray-800 rounded-sm"></div>
              <div className="w-3 h-3 border-t-2 border-r-2 border-gray-800 transform rotate-45"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-32">
        {renderWireframe()}
      </div>
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};
