import React from 'react';
import { Pagination, Container } from 'react-bootstrap';

const CustomPagination = ({ totalPages, currentPage, onPageChange }) => {
    const handleFirst = () => onPageChange(1);
    const handlePrev = () => onPageChange(currentPage - 1);
    const handleNext = () => onPageChange(currentPage + 1);
    const handleLast = () => onPageChange(totalPages);

    const renderPaginationItems = () => {
        const pages = [];
        const ellipsis = <Pagination.Ellipsis key="ellipsis" disabled />;

        if (totalPages <= 7) {
            for (let number = 1; number <= totalPages; number++) {
                pages.push(
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                );
            }
        } else {
            pages.push(
                <Pagination.Item
                    key={1}
                    active={1 === currentPage}
                    onClick={() => onPageChange(1)}
                >
                    1
                </Pagination.Item>
            );

            if (currentPage > 4) {
                pages.push(ellipsis);
            }

            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPages - 1, currentPage + 1);

            for (let number = startPage; number <= endPage; number++) {
                pages.push(
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                );
            }

            if (currentPage < totalPages - 3) {
                pages.push(ellipsis);
            }

            pages.push(
                <Pagination.Item
                    key={totalPages}
                    active={totalPages === currentPage}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return pages;
    };

    return (
        <Container className="d-flex justify-content-center">
            <Pagination>
                <Pagination.First onClick={handleFirst} disabled={currentPage === 1} />
                <Pagination.Prev onClick={handlePrev} disabled={currentPage === 1} />
                {renderPaginationItems()}
                <Pagination.Next onClick={handleNext} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={handleLast} disabled={currentPage === totalPages} />
            </Pagination>
        </Container>
    );
};

export default CustomPagination;
