import { Loader } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <Loader className="animate-spin size-7" />
    </div>
  );
};

export default LoaderComponent;
