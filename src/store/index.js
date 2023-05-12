import { createStore,combineReducers} from "redux";
import registrationReducer from "./reducer/registrationReducer";
import categoryReducer from "./reducer/categoryReducer";
import productReducer from "./reducer/productReducer";
const rootReducer = combineReducers({
  registrationReducer,
  categoryReducer,
  productReducer
  });
export const store = createStore(rootReducer)
