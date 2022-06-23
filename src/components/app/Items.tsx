import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../redux/hooks"
import { delCurrentItemAC, fetchItemsImgTC, setCurrentPageAC } from "../../redux/items-reducer"
import { RootState } from "../../redux/store"
import { Pagination } from "../common/pagination/Pagination"
import { CustomSelect } from "../common/select/Select"
import { Item, ItemType } from "./Item"

export const Items = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItemsImgTC())
  }, [])

  const deleteItem = (id: number) => {
    dispatch(delCurrentItemAC(id))
    console.log(`deleted item id: ${id}`)
  }

  const allItems = useSelector<RootState, ItemType[]>(state => state.itemsPage.items)
  const pageSize = useSelector<RootState, number>(state => state.itemsPage.pageSize)
  const totalItemsCount = useSelector<RootState, number>(state => state.itemsPage.totalItemsCount)
  const currentPage = useSelector<RootState, number>(state => state.itemsPage.currentPage)

  const arrAlbumId = allItems.map(i => i.albumId)
  const arrFilter = arrAlbumId.filter((item, pos) => arrAlbumId.indexOf(item) == pos)

  const arrToString = arrFilter.map(i => i.toString()) 

  const [value, onChangeOption] = useState<string>(arrToString[0]) 

  const onPageChanged = (pageNumber: number) => {
    dispatch(setCurrentPageAC(pageNumber))
  }

  const selectedItems = allItems.filter(i => i.albumId === +value)

  const sizeRender = pageSize * currentPage
  const renderItemsImg = selectedItems.slice(0, sizeRender)

  return <div>
    AlbumId : <CustomSelect
      options={arrToString}
      value={value}
      onChangeOption={onChangeOption}
    />
    <div>
      {renderItemsImg.map(item => <Item key={item.id} item={{
        albumId: item.albumId,
        id: item.id,
        title: item.title,
        url: item.url,
        thumbnailUrl: item.thumbnailUrl,
        onDelete: () => deleteItem(item.id)
      }} />)}
    </div>

    <Pagination currentPage={currentPage} pageSize={pageSize}
      onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} />

  </div>
}