import { createStore} from "redux";
import registrationReducer from "./reducer/registrationReducer";


export const store = createStore(registrationReducer)
