import { get, ref, set, child, getDatabase } from "firebase/database";
import database from "../config/firebase.config";
import { v4 as uuidv4 } from "uuid";

const WriteUserData = async (employeName, employePosition, employeTrainer) => {
  if (!employeName || !employePosition || !employeTrainer) {
    console.log("Values cannot be empty");
    return;
  }
  
  try {
    const userId = uuidv4(); // Generate a unique user ID

    const databaseRef = ref(getDatabase());

    // Check if the trainers node exists, if not, initialize it
    const trainersSnapshot = await get(child(databaseRef, "employees"));
    if (trainersSnapshot.val() === null) {
      await set(child(databaseRef, "employees"), {});
    }

    const trainerNodeRef = ref(
      database,
      `employees/${userId}/Trainers/${employeTrainer}`
    );
    const trainerNodeSnapshot = await get(trainerNodeRef);
    if (trainerNodeSnapshot.val() === null) {
      await set(trainerNodeRef, {});
    }

    await set(
      child(trainerNodeRef, `${employePosition}/${employeName}`),
      true
    );

    console.log("Employee data added successfully!");
  } catch (error) {
    console.error("Error adding employee data to database", error);
  }
};

export default WriteUserData;
