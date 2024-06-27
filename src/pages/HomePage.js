import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import UserList from "../components/UserList";
import CustomPagination from "../components/CustomPagination";
import SortButton from "../components/SortButton";
import NavBar from "../components/Navbar";
import { Container } from "react-bootstrap";
const HomePage = () => {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const pageSize = 5;
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      }
      return b.name.localeCompare(a.name);
    });
  }, [filteredUsers, sortOrder]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedUsers.slice(startIndex, startIndex + pageSize);
  }, [sortedUsers, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedUsers.length / pageSize);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading users.</div>;

  return (
    <div>
      <NavBar onSearch={setSearchQuery} />
      <UserList users={paginatedUsers} className="px-3">
        <SortButton
          onSort={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          sortOrder={sortOrder}
        />
      </UserList>
      <Container className="pagination-container">
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </Container>
    </div>
  );
};

export default HomePage;
