import {IWorker} from "../types/worker.type";
import {workers} from "cluster";
import {action} from "typesafe-actions";

const ADD_WORKER_TO_INVENTORY = 'inventory/ADD_WORKER_TO_INVENTORY' as const;


export const addWorkerToInventory = (worker: IWorker) => ({
  type: ADD_WORKER_TO_INVENTORY,
  payload: worker
});


type InventoryAction =
  | ReturnType<typeof addWorkerToInventory>;

type InventoryState = {
  workers: IWorker[],
}


const initialState: InventoryState = {
  workers: [
    {
      id: 5,
      image: 'a',
      name: 'a',
      cost: 5,
      dks: 5
    }
  ]
};

const inventory = (state: InventoryState = initialState, action: InventoryAction) => {
  switch (action.type) {
    case ADD_WORKER_TO_INVENTORY:
      // const nextId = Math.max(...state.workers.map(worker => worker.id)) + 1;
      const {image, name, cost, dks, id} = action.payload;

      return state.workers.concat({
        id,
        image,
        name,
        cost,
        dks
      });


    default:
      return state;
  }
};

export default inventory;