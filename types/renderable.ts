export type RenderableItem = {
  id: string
  element: React.ReactElement
}
export type HeaderType = string|number
export type HeaderContent ={id:string,value:HeaderType}
export type TableRowType = string|number|string[]
export type TableRowContent = Record<string, TableRowType>
