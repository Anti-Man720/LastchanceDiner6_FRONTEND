import axios from "axios";

export const getUser = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
};

export const login = async (email, password) => {
  try {
    const { data } = await axios.post("api/users/login", { email, password });
    console.log("Login response:", data); // Log the response
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Login error:");
    // throw error; // Rethrow the error to handle it elsewhere, if needed
  }
};

export const register = async registerData => {
  const { data } = await axios.post('api/users/register', registerData);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const updateProfile = async user => {
  const { data } = await axios.put('/api/users/updateProfile', user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const changePassword = async passwords => {
  await axios.put('/api/users/changePassword', passwords);
};

// export const login = async (email, password) => {
//   const { data } = await axios.post('api/users/login', { email, password });
//   localStorage.setItem('user', JSON.stringify(data));
//   return data;
// };

// export const logout = () => {
//   localStorage.removeItem("user");
// };
