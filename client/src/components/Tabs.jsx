import React, { useState } from "react";

function Tabs({ label1, content1, label2, content2 }) {
  const tabsData = [
    { label: label1, content: content1 },
    { label: label2, content: content2 },
  ];
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div>
      <div className="mb-5 inline-flex rounded-xl bg-slate-200/60 p-1">
        {tabsData.map((tab, idx) => (
          <button
            key={idx}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              idx === activeTabIndex
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-800"
            }`}
            onClick={() => setActiveTabIndex(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabsData[activeTabIndex].content}</div>
    </div>
  );
}

export default Tabs;
