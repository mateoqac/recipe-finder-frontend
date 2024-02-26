import ReactPaginate from "react-paginate";

interface PaginationProps {
  onPageChange?: (selectedPage: number) => void;
  pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, pageCount }) => {
  const hasPages = pageCount > 0;
  const handlePageClick = (selectedPage: { selected: number }) => {
    if (onPageChange) {
      onPageChange(selectedPage.selected + 1);
    }
  };

  return (
    <>
      {hasPages ? (
        <div className="flex items-center justify-center space-x-2 mt-4">
          <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName="flex items-center"
            pageClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-700"
            activeClassName="bg-blue-500 text-white"
            previousClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-700"
            nextClassName="px-4 py-2 rounded-md bg-gray-300 text-gray-700"
            disabledClassName="opacity-50"
          />
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
