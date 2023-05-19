export interface Session {
  [sessionId: string]: {
    username: string;
    id: string;
  };
}
