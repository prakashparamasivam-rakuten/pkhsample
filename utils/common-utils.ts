export const cleaned = (original:any)=>{
    return Object.fromEntries(
  Object.entries(original).map(([key, value]) => [
    key,
    (value === undefined || value == null )? '' : value
  ])
)

}
