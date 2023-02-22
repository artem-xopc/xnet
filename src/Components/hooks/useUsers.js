import { useMemo } from "react";

export function useSortedUsers(users, sort) {
  const sortedUser = useMemo(() => {
    if (sort) [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
    return users;
  }, [users, sort]);
  return sortedUser;
}

export function useUsers(users, sort, query) {
  const sortedUser = useSortedUsers(users, sort);

  const sortedAndSelectedUsers = useMemo(() => {
    return sortedUser.filter((user) =>
      user.name.toLowerCase().includes(query)
    );
  }, [users, sortedUser]);

  return sortedAndSelectedUsers;
}
