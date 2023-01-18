export const getURI = (
  username: string,
  password: string,
  host: string,
  port: number,
  databasename: string
): string => `mongodb://${username}:${password}@${host}:${port}/${databasename}?authSource=admin`;
