import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Page Not Found</p>
        <p className="text-gray-500 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been removed or you may have mistyped the URL.
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
          <a href="/">Return to Home</a>
        </Button>
      </div>
      <div className="mt-12">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default NotFound;