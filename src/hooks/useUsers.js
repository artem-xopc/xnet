import { useMemo } from "react";

export function useSortedUsers(users, sort) {
  const sortedUser = useMemo(() => {
    if (sort) {
      return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return users;
  }, [sort, users]);
  return sortedUser;
}

export function useUsers(users, sort, query) {
  const sortedUser = useSortedUsers(users, sort);

  const sortedAndSelectedUsers = useMemo(() => {
    return sortedUser.filter((user) => user.username.toLowerCase().includes(query));
  }, [query, sortedUser]);

  return sortedAndSelectedUsers;
}
