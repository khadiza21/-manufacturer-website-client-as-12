import React from 'react';
import useTools from '../../../../Hooks/useTools';
import Tool from '../Tool/Tool';
import './Tools.css'

const Tools = () => {
    const [tools] = useTools();
    return (
        <div className="my-5 pt-5">
        <h2 className="text-center fw-bold fs-1 text-success mt-3">Inventory Items</h2>
      <div className=" container tools-container my-3 pb-5">
        
        
        {tools.slice(0,6).map((tool) => (
          <Tool key={tool._id} inventory={tool}></Tool>
        ))}
      </div></div>
    );
};

export default Tools;