import React, { useState, useEffect, Fragment } from "react";

const Radiobox = ({ prices }) => {
  const [value, setValue] = useState(0);



  return (
    <Fragment>
        {JSON.stringify(prices)}
        <input type="radio" className="" />
        <label className="">Name</label>
    </Fragment>
  )
};

export default Radiobox;
