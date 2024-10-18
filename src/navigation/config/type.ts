export function createEnum<T extends Record<string, string>>(o: T): T {
  return o;
}
export type signInForm = {
  username: string;
  password: string;
};
