export type ProjectType =
  | "app"
  | "saas"
  | "mobile"
  | "website"
  | "game"
  | "browser_extension"
  | "other";

export type Project = {
  id: string;
  name: string;
  authorId: string;
  startedAt: Date;
  githubUrl: string | null;
  websiteUrl: string | null;
  socialLinks: string[];
  type: ProjectType;
};