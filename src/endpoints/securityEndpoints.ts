export const base = 'security';
export default {
  users: `${base}/user`,
  user: (id: string) => `${base}/user/${id}`,
  login: `${base}/auth/login`,
};
