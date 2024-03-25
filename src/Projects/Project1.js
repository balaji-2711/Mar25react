import "../App.css";
import React, { useState } from "react";

const BucketMove = () => {
  // to store all the items in main bucket
  const bucketStore = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const [bucket1, setBucket1] = useState(bucketStore);
  const [bucket2, setBucket2] = useState([]);

  const moveItems = (fromBucket, toBucket, items) => {
    const newFromBucket = fromBucket.filter((item) => !items.includes(item));
    const newToBucket = [...toBucket, ...items];
    return [newFromBucket, newToBucket];
  };

  // to move the items between buckets when clicked
  const moveToBucket2 = () => {
    const selectedItems = bucket1;
    const [newBucket1, newBucket2] = moveItems(bucket1, bucket2, selectedItems);
    setBucket1(newBucket1);
    setBucket2(newBucket2);
  };

  //  to move the items between buckets when clicked
  const moveToBucket1 = () => {
    const selectedItems = bucket2;
    const [newBucket2, newBucket1] = moveItems(bucket2, bucket1, selectedItems);
    setBucket2(newBucket2);
    setBucket1(newBucket1);
  };

  // to move all items from bucket1 to bucket2 when clicking add all button
  const handleSelectAllFromBucket1 = () => {
    alert("Are you sure, You want to add all items to Bucket 2");
    setBucket2([...bucket2, ...bucket1]);
    setBucket1([]);
  };

  // to move all items from bucket2 to bucket1 when clicking remove all button

  const handleSelectAllFromBucket2 = () => {
    setBucket1([...bucket1, ...bucket2]);
    setBucket2([]);
    alert("Are you sure, You want to add all items to Bucket 1");
  };

  const handleItemClick = (item, fromBucket) => {
    if (fromBucket === "bucket1") {
      const newBucket1 = bucket1.filter((i) => i !== item);
      const newBucket2 = [...bucket2, item];
      setBucket1(newBucket1);
      setBucket2(newBucket2);
    } else {
      const newBucket2 = bucket2.filter((i) => i !== item);

      const newBucket1 = [...bucket1, item];
      setBucket2(newBucket2);
      setBucket1(newBucket1);
    }
  };

  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (e) => {
    setSelectedValue(e);
  };

  return (
    <div className="container">
      <div className="box-1">
        <h2>Bucket 1</h2>
        <ul>
          {/* to iterate the items available in bucket1 */}
          {bucket1.map((item, index) => (
            <li key={index} onClick={() => handleSelectChange(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="center">
        {/* add all button to move all items from bucket1 to bucket2 */}

        <button className="add-all" onClick={handleSelectAllFromBucket1}>
          Add All
        </button>

        {/* add all button to move all items from bucket2 to bucket1 */}

        <button className="remove-all" onClick={handleSelectAllFromBucket2}>
          Remove All
        </button>

        {/* add only selected items from bucket1 to bucket2 */}

        <button
          className="add-selected"
          onClick={() => handleItemClick(selectedValue, "bucket1")}
        >
          Add Selected
        </button>

        {/* remove only selected items from bucket2 to bucket1 */}

        <button
          className="remove-selected"
          onClick={() => handleItemClick(selectedValue, "bucket2")}
        >
          Remove Selected
        </button>
      </div>

      <div className="box-2">
        <h2>Bucket 2</h2>
        <ul>
          {/* to iterate the items available in bucket2 */}
          {bucket2.map((item, index) => (
            <li key={index} onClick={() => handleSelectChange(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BucketMove;
