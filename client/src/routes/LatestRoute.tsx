import Vacancies from "../components/Vacancies/Vacancies.tsx";
import {IVacancy} from "../types/types.ts";


const mock: IVacancy[] = [
  {
    id: 1,
    name: "Фуллстек Python/ReactJS (junior/intern) специалист",
    salary_to: 100000,
    salary_from: 80000,
    description: "Lorem ipsum dolor sit amet consectetur. Lectus laoreet id nibh integer quis est morbi. Pretium sit lectus tempus at egestas interdum fames amet condimentum. Risus purus mollis cras purus elementum aliquam sed magna. Risus purus varius mauris urna sed. Aenean cursus vestibulum viverra morbi nibh sit sed. Nec vitae eu habitant quis sed quis tellus ante. Neque est urna mattis ac. Semper amet sit...",
    key_skills: ["Git", "Python", "React", "Docker", "Английский"],
    company: "Транспортная компания Kit",
    area_name: "Екатеринбург",
    published_at: "23/12/2024",
    link: "ya.ru"
  },
  {
    id: 2,
    name: "Фуллстек Python/ReactJS (junior/intern) специалист",
    salary_to: 100000,
    description: "Lorem ipsum dolor sit amet consectetur. Lectus laoreet id nibh integer quis est morbi. Pretium sit lectus tempus at egestas interdum fames amet condimentum. Risus purus mollis cras purus elementum aliquam sed magna. Risus purus varius mauris urna sed. Aenean cursus vestibulum viverra morbi nibh sit sed. Nec vitae eu habitant quis sed quis tellus ante. Neque est urna mattis ac. Semper amet sit...",
    key_skills: ["Git", "Python", "React", "Docker", "Английский"],
    company: "Транспортная компания Kit",
    area_name: "Екатеринбург",
    published_at: "23/12/2024",
    link: "ya.ru"
  },
  {
    id: 3,
    name: "Фуллстек Python/ReactJS (junior/intern) специалист",
    salary_to: 100000,
    description: "Lorem ipsum dolor sit amet consectetur. Lectus laoreet id nibh integer quis est morbi. Pretium sit lectus tempus at egestas interdum fames amet condimentum. Risus purus mollis cras purus elementum aliquam sed magna. Risus purus varius mauris urna sed. Aenean cursus vestibulum viverra morbi nibh sit sed. Nec vitae eu habitant quis sed quis tellus ante. Neque est urna mattis ac. Semper amet sit...",
    key_skills: ["Git", "Python", "React", "Docker", "Английский"],
    company: "Транспортная компания Kit",
    area_name: "Екатеринбург",
    published_at: "23/12/2024",
    link: "ya.ru"
  },
  {
    id: 4,
    name: "Фуллстек Python/ReactJS (junior/intern) специалист",
    salary_to: 100000,
    description: "Lorem ipsum dolor sit amet consectetur. Lectus laoreet id nibh integer quis est morbi. Pretium sit lectus tempus at egestas interdum fames amet condimentum. Risus purus mollis cras purus elementum aliquam sed magna. Risus purus varius mauris urna sed. Aenean cursus vestibulum viverra morbi nibh sit sed. Nec vitae eu habitant quis sed quis tellus ante. Neque est urna mattis ac. Semper amet sit...",
    key_skills: ["Git", "Python", "React", "Docker", "Английский"],
    company: "Транспортная компания Kit",
    area_name: "Екатеринбург",
    published_at: "23/12/2024",
    link: "ya.ru"
  }
]

function LatestRoute() {
  return (
    <>
      <h2 className="title-xl">Вакансии Fullstack-разработчика за последние 24 часа</h2>
      <Vacancies data={mock}/>
    </>
  );
}

export default LatestRoute;
