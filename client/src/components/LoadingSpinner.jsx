const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-full mt-16">
        <div className="w-8 aspect-square border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  };
  
  export default LoadingSpinner;