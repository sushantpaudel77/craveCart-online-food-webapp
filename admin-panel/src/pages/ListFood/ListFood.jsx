import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "./ListFood.css";
import { deleteFood, getFoodList } from "../../services/foodService";

const ListFood = () => {
  const [paginatedData, setPaginatedData] = useState({
    content: [],
    page: 0,
    size: 10,
    totalElements: 0,
    totalPages: 0,
    last: true
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const fetchList = async (page = 0, size = 10) => {
    try {
      const data = await getFoodList(page, size);
      setPaginatedData({
        content: data.content || [],
        page: data.page || 0,
        size: data.size || 10,
        totalElements: data.totalElements || 0,
        totalPages: data.totalPages || 0,
        last: data.last || true
      });
    } catch (error) {
      toast.error("Error while reading the foods");
    }
  };

  useEffect(() => {
    fetchList(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const removeFood = async (foodId) => {
    try {
      const success = await deleteFood(foodId);
      if (success) {
        toast.success("Food item has been successfully removed.");
        fetchList(currentPage, pageSize);
      } else {
        toast.error("Failed to remove the food item. Please try again.");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      toast.error("An unexpected error occurred while removing the food.");
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(0);
  };

  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        {/* Page Size Selector */}
        <div className="d-flex justify-content-between align-items-center mb-3 p-3">
          <div>
            <label htmlFor="pageSize" className="form-label me-2">Items per page:</label>
            <select 
              id="pageSize"
              className="form-select d-inline-block w-auto"
              value={pageSize}
              onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
          <div>
            <span className="text-muted">
              Showing {paginatedData.page * paginatedData.size + 1} to {Math.min((paginatedData.page + 1) * paginatedData.size, paginatedData.totalElements)} of {paginatedData.totalElements} items
            </span>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.content && paginatedData.content.length > 0 ? (
              paginatedData.content.map((item, index) => (
                <tr key={item.foodId || index}>
                  <td>
                    <img src={item.imageUrl} alt="" height={48} width={48} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{`रु ${item.price}`}</td>
                  <td className="text-danger">
                    <i
                      className="bi bi-x-circle-fill"
                      style={{ cursor: 'pointer' }}
                      onClick={() => removeFood(item.foodId)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No food items found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination Controls */}
        {paginatedData.totalPages > 1 && (
          <nav aria-label="Page navigation" className="p-3">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${paginatedData.page === 0 ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(0)}
                  disabled={paginatedData.page === 0}
                >
                  First
                </button>
              </li>
              <li className={`page-item ${paginatedData.page === 0 ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(paginatedData.page - 1)}
                  disabled={paginatedData.page === 0}
                >
                  Previous
                </button>
              </li>
              
              {/* Page numbers */}
              {Array.from({ length: paginatedData.totalPages }, (_, i) => i)
                .filter(page => 
                  page === 0 || 
                  page === paginatedData.totalPages - 1 || 
                  Math.abs(page - paginatedData.page) <= 2
                )
                .map((page, index, array) => {
                  if (index > 0 && array[index - 1] !== page - 1) {
                    return [
                      <li key={`ellipsis-${page}`} className="page-item disabled">
                        <span className="page-link">...</span>
                      </li>,
                      <li key={page} className={`page-item ${paginatedData.page === page ? 'active' : ''}`}>
                        <button 
                          className="page-link"
                          onClick={() => handlePageChange(page)}
                        >
                          {page + 1}
                        </button>
                      </li>
                    ];
                  }
                  return (
                    <li key={page} className={`page-item ${paginatedData.page === page ? 'active' : ''}`}>
                      <button 
                        className="page-link"
                        onClick={() => handlePageChange(page)}
                      >
                        {page + 1}
                      </button>
                    </li>
                  );
                })}
              
              <li className={`page-item ${paginatedData.last ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(paginatedData.page + 1)}
                  disabled={paginatedData.last}
                >
                  Next
                </button>
              </li>
              <li className={`page-item ${paginatedData.last ? 'disabled' : ''}`}>
                <button 
                  className="page-link"
                  onClick={() => handlePageChange(paginatedData.totalPages - 1)}
                  disabled={paginatedData.last}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default ListFood;