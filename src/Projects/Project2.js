import React, { useState } from "react";

const ExpandComponent = ({ items }) => {
  //  keep all the data's in an array to iterate one by one
  const data = [
    {
      name: "Applications",
      children: [
        {
          name: "adam",
          children: [
            { name: "Desktop", children: [] },
            { name: "Documents", children: [] },
            { name: "Downloads", children: [] },
            { name: "Music", children: [] },
            { name: "Pictures", children: [] },
          ],
        },
        {
          name: "Guest",
          children: [
            { name: "Guest 01", children: [] },
            { name: "Guest 02", children: [] },
            { name: "Guest 03", children: [] },
            { name: "Guest 04", children: [] },
          ],
        },
        {
          name: "Shared",
          children: [
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
            { name: "Shared 01", children: [] },
          ],
        },
        {
          name: "Thing1",
          children: [
            { name: "Subchild 1.2.1", children: [] },
            { name: "Subchild 1.2.2", children: [] },
          ],
        },
        {
          name: "Thing2",
          children: [
            { name: "Subchild 1.2.1", children: [] },
            { name: "Subchild 1.2.2", children: [] },
          ],
        },
      ],
    },
    {
      name: "Users",
      children: [
        {
          name: "Child 2.1",
          children: [
            { name: "Subchild 2.1.1", children: [] },
            { name: "Subchild 2.1.2", children: [] },
          ],
        },
      ],
    },
  ];

  const [expandedItems, setExpandedItems] = useState([]);

  // to unexpand the items when clicking on the same button
  const toggleExpand = (item) => {
    setExpandedItems((prevExpandedItems) => {
      if (prevExpandedItems.includes(item)) {
        return prevExpandedItems.filter(
          (expandedItem) => expandedItem !== item
        );
      } else {
        return [...prevExpandedItems, item];
      }
    });
  };

  // to expand the items based on the available child elements
  const renderItems = (items) => {
    return items.map((item, index) => (
      <div className="expand" key={index}>
        <div className="expand2" onClick={() => toggleExpand(item.name)}>
          {item.name}
        </div>
        {expandedItems.includes(item.name) && item.children.length > 0 && (
          <div className="one">{renderItems(item.children)}</div>
        )}
      </div>
    ));
  };

  // to display the items in the UI
  return <div>{renderItems(items)}</div>;
};

export default ExpandComponent;
