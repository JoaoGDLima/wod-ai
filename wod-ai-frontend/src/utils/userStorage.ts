type User = {
    name: string;
    avatarUrl: string;
  };
  
  const USER_KEY = "user";
  
  export const getUser = (): User | null => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  };
  
  export const setUser = (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  };
  
  export const clearUser = () => {
    localStorage.removeItem(USER_KEY);
  };
  