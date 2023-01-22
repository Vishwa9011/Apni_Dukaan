import { collection, getDocs, onSnapshot } from "firebase/firestore"
import * as Types from './Types.shop'
import { Dispatch } from "redux"
import { ToastType } from "../../Custom-hooks/UseToastMsg"
import { db } from "../../Firebase/FirebaseConfig"
import { IProduct, IToastProps } from "../../Constants/Constant"


// todo: getData from Database
export const getDataShop = (id: string | undefined, Toast: Function) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.SHOP_LOADING })
     const shopCollectionRef = collection(db, `shop/${id}/${id}Data`)
     const unsubscribe = onSnapshot(shopCollectionRef, (snapShot) => {
          const data: any = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          const { FilteredBrand, FilteredCategory } = FilterBrandAndCategories(data)
          dispatch({ type: Types.GET_SHOP_DATA, payload: { data, FilteredBrand, FilteredCategory } })
     }, (err) => {
          Toast("Unable To Load Data", ToastType.error);
          dispatch({ type: Types.SHOP_ERROR })
     })
     // * clean up
     return unsubscribe
}


// todo: querry for searching document inside the firebase server
export const searchInDatabase = (category: string, Toast: Function) => async (dispatch: Dispatch) => {
     // dispatch({ type: Types.SHOP_LOADING });
     try {
          const searchRef = collection(db, `shop/${category}/${category}Data`)
          const Result = await getDocs(searchRef)
          const data = Result.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          dispatch({ type: Types.SHOP_SEARCH_SUCCESS, payload: data })
          // Toast('Product updated successfully.', ToastType.success)
     } catch (error) {
          console.log('error: ', error);
          // dispatch({ type: Types.SHOP_ERROR })
          Toast("Failed to fetch products.", ToastType.error)
     }
}


// todo:================> filterData:
const FilterBrandAndCategories = (Products: IProduct[]) => {
     const FilteredBrand: string[] = [];
     const FilteredCategory: string[] = [];
     Products.forEach((product) => {
          if (!FilteredBrand.includes(product.brand)) {
               FilteredBrand.push(product.brand)
          }
          if (!FilteredCategory.includes(product.category)) {
               FilteredCategory.push(product.category);
          }
     })
     return { FilteredBrand, FilteredCategory }
}

// todo: filterData via brand categories
export const FilterValuesFromData = (values: string[], data: IProduct[]) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.SHOP_LOADING });
     const FilterData = data.filter((product) => {
          return (values.includes(product.brand) || values.includes(product.category));
     })
     dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: FilterData })
}

// todo: filterData via price and discount along with previous filter
export const FilterValuesFromDataWithPriceAndDiscount = (FilterDiscount: string, FilterPrice: string[], data: IProduct[]) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.SHOP_LOADING });

     // todo: filter discount
     if (FilterDiscount.length && FilterPrice.length) {
          const FilteredDataWithDiscount = FilterDataWithDiscount(FilterDiscount, data)
          const FilterDataWithPrice = FilteredDataWithDiscount.filter((product) => {
               return FilterPrice.every((price) => {
                    const FP: string[] = price.split("-");
                    return (product.price > +FP[1] && product.price < +FP[2])
               })
          })

          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: FilterDataWithPrice })
     } else if (FilterDiscount.length) {
          const FilteredDataWithDiscount = FilterDataWithDiscount(FilterDiscount, data)
          console.log('FilteredDataWithDiscount: ', FilteredDataWithDiscount);
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: FilteredDataWithDiscount })
          console.log('FilteredDataWithDiscount: ', FilteredDataWithDiscount);
     } else if (FilterPrice.length) {
          const FilterDataWithPrice = data.filter((product) => {
               return FilterPrice.every((price) => {
                    const FP = price.split("-");
                    console.log('FP: ', FP);
                    return ((product.price >= +FP[1]) && (product.price < +FP[2]))
               })
          })

          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: FilterDataWithPrice })
          console.log('FilterDataWithPrice: ', FilterDataWithPrice);
     }
}



// todo: filter Data with discount 
const FilterDataWithDiscount = (FilterDiscount: string, data: IProduct[]): IProduct[] => {
     const FD: string[] = FilterDiscount.split("-");
     return data.filter((product) => {
          if (FD[2] === 'below') {
               return product?.discount ? product.discount < +FD[1] : false;
          } else if (FD[2] === 'above') {
               return product?.discount ? product.discount >= +FD[1] : false;
          }
     })
}


// todo:sorting
export const SortDataFromList = (value: string, data: IProduct[]) => async (dispatch: Dispatch) => {
     dispatch({ type: Types.SHOP_LOADING });
     if (value === 'rec') {
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: [] });
     } else if (value == 'htl') {
          data.sort((a, b) => b.price - a.price);
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: data });
     } else if (value == 'lth') {
          data.sort((a, b) => a.price - b.price);
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: data });
     } else if (value == 'rating') {
          data.sort((b, a) => a?.rating - b?.rating);
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: data });
     } else if (value == 'discount') {
          data.sort((b, a) => (a.discount || 0) - (b.discount || 0));
          dispatch({ type: Types.SHOP_DATA_FILTERING_DONE, payload: data });
     }
     
}