import axios from "axios";
export const getQuestion = async (data) => {
  try {
    var res = await axios.post("http://localhost:3050/ai", data);
    return res.data;
  } catch (error) {
    console.log("error");
  }
};
