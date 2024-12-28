import React from "react";

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface IVacancy {
  id: number;
  name: string;
  salary_from?: number;
  salary_to?: number;
  description: string;
  key_skills: string[];
  company: string;
  area_name: string;
  published_at: string;
  link: string;
}