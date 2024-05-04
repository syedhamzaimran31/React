import { getDatabase, ref, set } from "firebase/database";
import database from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

const WriteUserData = (employeName, employePosition, employeTrainer) => {
  try {
    const userId = uuidv4();

    console.log(employeName);
    console.log(employePosition);
    console.log(employeTrainer);
    
    if (!employeName || !employePosition || !employeTrainer) {
      console.log("Values cannot be empty");
      return;
    }
    set(ref(database, "users/" + userId), {
      userName: employeName,
      userPosition: employePosition,
      userTrainer: employeTrainer,
    });
  } catch (error) {
    console.log("Error adding document to database", error);
  }
};

export default WriteUserData;
