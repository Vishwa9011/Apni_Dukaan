import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Reducer as WishlistReducer } from "./WishlistRedux/Reducer.wishlist";
import { Reducer as OrderReducer } from "./OrderRedux/Reducer.Order";

import { Reducer as CartReducer } from "./CartRedux/Reducer.cart";
import { Reducer as ShopReducer } from "./ShopRedux/Reducer.shop";
import { Reducer as AuthReducer } from "./Auth/Reducer.auth";
import thunk from "redux-thunk";
import { Reducer as AdminReducer } from "./Admin/Reducer.admin";

declare global {
     interface Window {
          __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
     }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const RootReducers = {
     auth: AuthReducer,
     cart: CartReducer,
     shop: ShopReducer,
     wishlist: WishlistReducer,
     order:OrderReducer,
     admin: AdminReducer
}

export const store = legacy_createStore(combineReducers(RootReducers), composeEnhancers(applyMiddleware(thunk)));

// * use inside useSelector
export type RootState = ReturnType<typeof store.getState>

//* use 
export type AppDispatch = typeof store.dispatch;