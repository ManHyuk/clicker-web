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
  workers: []
};

const inventory = (state: InventoryState = initialState, action: InventoryAction) => {
  switch (action.type) {
    case ADD_WORKER_TO_INVENTORY:
      const nextId = Math.max(...state.workers.map(worker => worker.id)) + 1;
      const {image, name, cost, dks, id} = action.payload;    

      const workers =  state.workers.push({
        id: nextId,
        image,
        name,
        cost,
        dks
      });

      return {
        workers,
        ...state
      }


    default:
      return {
        ...state
      };
  }
};

export default inventory;