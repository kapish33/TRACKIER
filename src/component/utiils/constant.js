/*
@@ Enums
*/
export const USER = 'user';

export const DELETE_ENTRY_ARRAY = 'deleteEntry';
export const PUSH_AT_INDEX = 'pushAtIndex';
export const UPDATE_AT_INDEX = 'updateAtIndex';

export const JEERA_DATA = 'jeeraData';

// The below are the array routes when we dont need our default header
export const NullHeaderRoutes = ['/', '/regestration'];
export const NullFooterRoutes = ['/'];

// Regexa VAlidators
export const EmailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
export const PasswordRegex =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$';
export const AlphaREgex = '^[a-zA-Z0-9 ]*$';

/* 
@@ Functions 
*/
export const setLocalStorage = (key, value) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};
export const getLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};
export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const formatDate = (d) => {
  // let d = new Date(2010, 7, 5);
  // const d = new Date();
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
  return `${da}-${mo}-${ye}`;
};

export const updateLocalStorage = (Action, Payload, key, index) => {
  const ourArray = getLocalStorage(key) || []; // []
  index = ourArray?.length - 1 || 0;
  let ans = [];
  if (Action === DELETE_ENTRY_ARRAY) {
  } else if (Action === PUSH_AT_INDEX) {
    ans = ourArray.add(Payload);
    setLocalStorage(key, ans);
    return ans;
  } else if (Action === UPDATE_AT_INDEX) {
  }
};

// Material commoan Styling
export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
