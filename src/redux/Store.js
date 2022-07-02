import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { RentalReducers } from "./reducers/RentalReducers";
import { AlertsReducer } from "./reducers/AlertsReducer";
import { bookingsReducer } from "./reducers/bookingsReducer";

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  RentalReducers,
  AlertsReducer,
  bookingsReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
