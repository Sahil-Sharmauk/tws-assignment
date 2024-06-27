import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import UserDetails from '../components/UserDetails';

const UserDetailsPage = () => {
    const { id } = useParams();
    const { data: user, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading user details.</div>;

    return <UserDetails user={user} />;
};

export default UserDetailsPage;
