import ScrollToTop from "./ScrollToTop";
/**
 * ShimmerCard is a placeholder component that mimics the appearance of a RestaurantCard during loadin * It uses a pulsing animation to indicate that content is being fetched.
 */
const ShimmerCard = () => (
    <div className="w-full p-4 m-2 border border-gray-200 rounded-lg shadow-sm bg-white animate-pulse">
        <ScrollToTop />
        {/* Image Placeholder */}
        <div className="h-40 bg-gray-300 rounded-md"></div>
        <div className="mt-4 space-y-3">
            {/* Title Placeholder */}
            <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
            {/* Cuisine Placeholder */}
            <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
            {/* Rating and other info placeholder */}
            <div className="flex justify-between items-center pt-2">
                <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
            </div>
        </div>
    </div>
);


/**
 * The main Shimmer component that lays out the entire loading state for the Body component.
 * It includes placeholders for the search bar, filter buttons, and a grid of ShimmerCards.
 */
export const Shimmer = () => {
    return (
        <div className="body-container container mx-auto px-4 py-6">
            {/* Shimmer for the top filter/search bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-3 bg-white shadow-md rounded-lg mb-8 animate-pulse">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    {/* Search Input Placeholder */}
                    <div className="h-9 w-full sm:w-64 bg-gray-300 rounded-md"></div>
                    {/* Search Button Placeholder */}
                    <div className="h-9 w-24 bg-gray-300 rounded-md"></div>
                </div>
                <div className="w-full sm:w-auto">
                    {/* Top Rated Button Placeholder */}
                    <div className="h-9 w-full sm:w-56 bg-gray-300 rounded-md"></div>
                </div>
            </div>

            {/* Shimmer for the main title */}
            <div className="text-center my-8 px-4">
                 <div className="h-8 w-1/2 md:w-1/3 bg-gray-300 rounded-md mx-auto animate-pulse"></div>
                 <div className="mt-3 w-24 h-1 bg-gray-300 rounded-md mx-auto animate-pulse"></div>
            </div>

            {/* Container for the grid of shimmer cards */}
            <div className="restaurant-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Create an array of 12 elements to map over, rendering a ShimmerCard for each.
                  This provides a consistent number of placeholders on initial load.
                */}
                {Array(12).fill(0).map((_, index) => (
                    <ShimmerCard key={index} />
                ))}
            </div>
        </div>
    );
};
