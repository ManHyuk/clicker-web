import React, {useState} from 'react';
import Counter from "../../components/Counter";
import Shop from "../../components/Shop";
import Inventory from "../../components/Inventory";

interface IMainContainer {
}


const MainContainer: React.FC<IMainContainer> = () => {

  return (
    <div>
      <Inventory/>
      <Counter />
      <Shop />
    </div>
  )
};


export default MainContainer;