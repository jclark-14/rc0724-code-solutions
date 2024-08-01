export function validateEmail(email: string): boolean {
  if (email.indexOf('@', 1) >= 0 && email.indexOf('.', 1) >= 0) {
    return true;
  } else return false;
}
