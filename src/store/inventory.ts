import {IWorker} from "../types/worker.type";

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


      const maxId = state.workers.length === 0 ? 0 : Math.max(...state.workers.map(worker => worker.id));
      const nextId = maxId + 1;

      const {image, name, description, cost,  output} = action.payload;

      return {
        ...state,
        workers: state.workers.concat({
          id: nextId,
          image,
          name,
          description,
          cost,
          output
        }),

      };


    default:
      return {
        ...state
      };
  }
};

export default inventory;