import axios from "axios"

export const loginUser = async (email: string, password: string) => {
    const res = await axios.post("/user/login", { email, password });
    if(res.status !== 200) {
        throw new Error("Unable to Login");
    }
    const data = await res.data;
    return data;
};

export const signupUser = async (name: string, email: string, password: string) => {
    const res = await axios.post("/user/signup", { name, email, password });
    if(res.status !== 201) {
        throw new Error("unable to SignUp");
    }
    const data = await res.data;
    return data;
};

export const checkAuthStatus = async () => {
    const res = await axios.get("/user/auth-status");
    if(res.status !== 200) {
        throw new Error("Unable to Authenticate");
    }
    const data = await res.data;
    return data;
};

export const sendChatRequest = async (message: string) => {

  const res = await axios.post("/chat/new", { message });
    if(res.status !== 200) {
        throw new Error("Unable to Send Chat");
    }
    const data = await res.data;
    return data;

  // try {
  //   const res = await axios.post("/chat/new", { message });
  //   if (res.status !== 200) {
  //     throw new Error(`Error: ${res.status} ${res.statusText}`);
  //   }
  //   return res.data;
  // } catch (error) {
  //   if (axios.isAxiosError(error) && error.response) {
  //     if (error.response.status === 429) {
  //       alert("Too many requests. Please try again later.");
  //     } else {
  //       alert(`Request failed with status code ${error.response.status}`);
  //     }
  //   } else {
  //     alert("An unexpected error occurred.");
  //   }
  //   throw error;
  // }

    
};

export const getUserChats = async () => {
    const res = await axios.get("/chat/all-chats");
    if (res.status !== 200) {
      throw new Error("Unable to send chat");
    }
    const data = await res.data;
    return data;
  };
  
  export const deleteUserChats = async () => {
    const res = await axios.delete("/chat/delete");
    if (res.status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
  };
  
  export const logoutUser = async () => {
    const res = await axios.get("/user/logout");
    if (res.status !== 200) {
      throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
  };