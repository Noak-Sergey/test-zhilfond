import { itemsAPI } from "../api/api";
import { ItemType } from "../components/app/Item";
import { AppThunk } from "./store";

const SET_ITEMS = "ITEMS/SET_ITEMS"
const SET_TOTAL_ITEMS_COUNT = "ITEMS/SET_TOTAL_ITEMS_COUNT"
const SET_CURRENT_PAGE = "ITEMS/SET_CURRENT_PAGE"
const DEL_CURRENT_ITEM = "ITEMS/DEL_CURRENT_ITEM"
const SET_NEW_TITLE_ITEM = "ITEMS/SET_NEW_TITLE_ITEM"

const initialState = {
    items: [],
    pageSize: 10,
    totalItemsCount: 0,
    currentPage: 1,
};

type ItemsStateType = {
    items: ItemType[]
    pageSize: number
    totalItemsCount: number
    currentPage: number
}

export const itemsReducer = (state: ItemsStateType = initialState, action: ActionsType): ItemsStateType => {
    switch (action.type) {
        case SET_ITEMS:
            return { ...state, items: action.items }
        case SET_TOTAL_ITEMS_COUNT:
            return { ...state, totalItemsCount: action.totalCount }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case DEL_CURRENT_ITEM:
            const newItems = state.items.filter(item => item.id !== action.id)
            return { ...state, items: newItems}
        case SET_NEW_TITLE_ITEM:
            const indexCurrentItem = state.items.findIndex(i => i.id === action.id) 
            //так и не могу дать ума как правильно изменить state
            // return { ...state, items[indexCurrentItem].title: action.newTitle}
            return {...state}
        default:
            return state
    }
}

//actions
export const setItemsAC = (items: ItemType[]) => ({ type: SET_ITEMS, items } as const)
export const setTotalItemsCountAC = (totalCount: number) => ({ type: SET_TOTAL_ITEMS_COUNT, totalCount } as const)
export const setCurrentPageAC = (currentPage: number) => ({ type: SET_CURRENT_PAGE, currentPage } as const)
export const delCurrentItemAC = (id: number) => ({ type: DEL_CURRENT_ITEM, id } as const)
export const setNewTitleItemAC = (id: number, newTitle: string, albumId: number) => ({ type: SET_NEW_TITLE_ITEM, id, newTitle, albumId } as const)

//thunks
export const fetchItemsImgTC = ():AppThunk => {
    return async (dispatch) => {
        let res = await itemsAPI.getImg()
        dispatch(setItemsAC(res.data))
        dispatch(setTotalItemsCountAC(res.data.length))
    }
}

//types
export type SetItemsActionType = ReturnType<typeof setItemsAC>
export type SetTotalItemsCountActionType = ReturnType<typeof setTotalItemsCountAC>
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type delCurrentItemActionType = ReturnType<typeof delCurrentItemAC>
export type setNewTitleItemActionType = ReturnType<typeof setNewTitleItemAC>

export type ActionsType = SetItemsActionType 
                        | SetTotalItemsCountActionType 
                        | setCurrentPageActionType 
                        | delCurrentItemActionType 
                        | setNewTitleItemActionType