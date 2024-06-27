import React from 'react';
import { Pagination } from 'react-bootstrap';

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
    const handleFirst = () => onPageChange(1);
    const handlePrev = () => onPageChange(currentPage - 1);
    const handleNext = () => onPageChange(currentPage + 1);
    const handleLast = () => onPageChange(totalPages);

    return (
        <Pagination>
            <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
            <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
            {Array.from({ length: totalPages }, (_, index) => (
                <Pagination.Item
                    key={index}
                    active={currentPage === index + 1}
                    onClick={() => onPageChange(index + 1)}
                >
                    {index + 1}
                </Pagination.Item>
            ))}
            <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
            <Pagination.Last onClick={handleLast} disabled={currentPage === totalPages} />
        </Pagination>
    );
};

export default CustomPagination;
