/** @format */

import React from "react";

const CategoryCard = ({ data }) => (
  <div className='categoryCard'>
    <div className='categoryCardImg'>
      <img src={data.image} alt={data.name} />
    </div>
    <div>
      <h3>{data.name}</h3>
    </div>
  </div>
);

export default CategoryCard;
