import { Skeleton } from "@mui/material";

const ItemDetailSkeleton = () => {
  return (
    <div className="flex-col bg-white rounded-md">
      <div className="flex justify-center items-center mt-[8.5px]">
        <Skeleton variant="rounded" width={250} height={246} />
      </div>
      <div className="w-[384px] h-[251.55px] mt-1">
        <div className="flex justify-center items-center mb-2">
          <Skeleton variant="rounded" width={109.02} height={24} />
        </div>

        <div className="flex justify-center items-center">
          <Skeleton variant="rounded" width={70} height={24} />
        </div>
        <div className="p-4 mb-2">
          <Skeleton variant="rounded" width={352} height={37.02} />
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="flex items-center">
            <Skeleton variant="circular" width={22.41} height={24} />
            <Skeleton sx={{ marginX: '8px' }} variant="rectangular" width={10} height={24} />
            <Skeleton variant="circular" width={22.41} height={24} />
          </div>
          <Skeleton sx={{ marginLeft: '8px' }} variant="rounded" width={126.48} height={32} />
        </div>
        <div className="my-2 flex justify-center items-center">

          <Skeleton variant="rounded" width={68.67} height={30.5} />
        </div>
        <div className="py-[8px] flex justify-center items-center">
          <Skeleton variant="text" width={128.36} height={28.34} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailSkeleton;
