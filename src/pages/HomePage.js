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
  } = useFetch("https://jsonplaceholder.org/users");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [noUsersFound, setNoUsersFound] = useState(false);

  const pageSize = 2;

  const filteredUsers = useMemo(() => {
    const result = users.filter((user) => {
      const name = `${user?.firstname} ${user?.lastname}`;
      return (
        name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user?.login?.username.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });

    setNoUsersFound(result.length === 0);
    return result.length > 0 ? result : users;
  }, [users, searchQuery]);

  const sortedUsers = useMemo(() => {
    return [...filteredUsers].sort((a, b) => {
      const name1 = `${a?.firstname} ${a?.lastname}`;
      const name2 = `${b?.firstname} ${b?.lastname}`;
      if (sortOrder === "asc") {
        return name1.localeCompare(name2);
      }
      return name2.localeCompare(name1);
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
      {noUsersFound && (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "10px" }}>
          <div>
            No users found for the search query. Showing all users instead.
          </div>
        </Container>
      )}
      <Container className="table-responsive">
        <UserList users={paginatedUsers}>
          <SortButton
            onSort={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            sortOrder={sortOrder}
          />
        </UserList>
      </Container>
      <Container className="pagination-container d-flex justify-content-center my-3">
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
