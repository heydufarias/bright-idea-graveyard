export type Tombstone = {
  id: string;
  projectId: string;
  reason: string;
  message: string;
  endedAt: Date;
  flowerCount: number;
  createdAt: Date;
};