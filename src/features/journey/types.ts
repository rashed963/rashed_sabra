export type MilestoneType = "education" | "role" | "leadership" | "product" | "ai";

export interface Milestone {
  id: string;
  period: string;
  title: string;
  organization: string;
  location?: string;
  type: MilestoneType;
  context: string;
  actions: string[];
  outcomes?: string[];
  impact?: string;
  lesson?: string;
}

