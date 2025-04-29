const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-full mt-16">
        <div className="w-8 aspect-square border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  };
  
  export default LoadingSpinner;