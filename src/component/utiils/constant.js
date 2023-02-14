// The below are the array routes when we dont need our default header
export const NullHeaderRoutes = ['/', '/regestration'];
export const NullFooterRoutes = ['/'];

// Regexa VAlidators
export const EmailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
export const PasswordRegex =
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$';
export const AlphaREgex = '^[a-zA-Z]*$';
