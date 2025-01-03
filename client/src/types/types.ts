import React from "react";

export interface ComponentWithChildren {
  children: React.ReactNode;
}

export interface IVacancy {
  id: string;
  name: string;
  alternate_url: string;
  salary: {
    from: number;
    to: number;
    currency: string;
  };
  employer: {
    name: string;
  };
  area: {
    name: string;
  }
  published_at: string;
  description: string;
  key_skills: {name: string}[];
}

interface ISkill {
  skill: string;
  count: number;
}

export interface ISkillsStatistics {
  year: number;
  skills: ISkill[];
}