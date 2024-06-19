import { Skeleton } from "@mui/material"

const ItemSkeleton = () => {
  return (
    <div className="flex-col bg-white rounded-md">
      <Skeleton sx={{ marginBottom: '1px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px' }} variant="rectangular" height={37.02} width={275.25} />

      <div className="flex justify-center items-center mx-3">
        <Skeleton variant="rounded" height={250} width={250} />
      </div>

      <div className="flex flex-col justify-center items-centerw-[275.25px] h-[145px]">
        <div className="flex justify-center items-center pb-4 pt-3">
          <Skeleton variant="rounded" height={60.05} width={243.25} />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton variant="rounded" height={28} width={95.11} />
        </div>
      </div>
      
      <Skeleton sx={{ marginTop: '1px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }} variant="rectangular" height={39.02} width={275.25} />
    </div>
  )
}

export default ItemSkeleton 