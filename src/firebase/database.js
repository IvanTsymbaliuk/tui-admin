import {
  ref,
  get,
  set,
  update,
  remove,
  push,
  child,
  onValue,
} from "firebase/database";
import { database } from "./firebase";

const dbRef = ref(database);

export const getData = async (path) => {
  const snapshot = await get(child(dbRef, path));
  return snapshot.exists() ? snapshot.val() : null;
};

export const setData = async (path, data) => {
  const newRef = push(child(dbRef, path));
  await set(newRef, data);
  return newRef.key;
};

export const updateData = async (path, data) => {
  await update(ref(database, path), data);
};

export const removeData = async (path) => {
  await remove(ref(database, path));
};

export const onDataChange = (path, callback) => {
  onValue(ref(database, path), callback);
};
