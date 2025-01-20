import AnalyticsTable from "../components/AnalyticsTable/AnalyticsTable.tsx";
import AnalyticsLine from "../components/AnalyticsLine/AnalyticsLine.tsx";
import {prepareTableData, transformData, transformNumberToCurrency} from "../utils/utils.ts";
import AnalyticsBar from "../components/AnalyticsBar/AnalyticsBar.tsx";
import AnalyticsPie from "../components/AnalyticsPie/AnalyticsPie.tsx";
import SkillsStatistics from "../components/SkillsStatistics/SkillsStatistics.tsx";
import PageNavigation from "../components/PageNavigation/PageNavigation.tsx";

const data = {"year_salary":[{"year":2024,"salary":110326.3},{"year":2023,"salary":98976.0},{"year":2022,"salary":91456.1},{"year":2021,"salary":83010.1},{"year":2020,"salary":72723.8},{"year":2019,"salary":69830.4},{"year":2018,"salary":65444.1},{"year":2017,"salary":60363.9},{"year":2016,"salary":55613.3},{"year":2015,"salary":51448.1},{"year":2014,"salary":48552.1},{"year":2013,"salary":49086.2},{"year":2012,"salary":47462.2},{"year":2011,"salary":46448.5},{"year":2010,"salary":44657.9},{"year":2009,"salary":44812.3},{"year":2008,"salary":48411.2},{"year":2007,"salary":44449.5},{"year":2006,"salary":41318.0},{"year":2005,"salary":44939.2},{"year":2004,"salary":42967.3},{"year":2003,"salary":41303.0}],"year_vacancies":[{"year":2024,"vacancies":556742},{"year":2023,"vacancies":709545},{"year":2022,"vacancies":887526},{"year":2021,"vacancies":943164},{"year":2020,"vacancies":611884},{"year":2019,"vacancies":535960},{"year":2018,"vacancies":517669},{"year":2017,"vacancies":391464},{"year":2016,"vacancies":332461},{"year":2015,"vacancies":284763},{"year":2014,"vacancies":259569},{"year":2013,"vacancies":234019},{"year":2012,"vacancies":173899},{"year":2011,"vacancies":142458},{"year":2010,"vacancies":93494},{"year":2009,"vacancies":52889},{"year":2008,"vacancies":75070},{"year":2007,"vacancies":53562},{"year":2006,"vacancies":33321},{"year":2005,"vacancies":16022},{"year":2004,"vacancies":7833},{"year":2003,"vacancies":1983}],"city_salary":[{"city":"Москва","salary":98742.5},{"city":"Санкт-Петербург","salary":82842.1},{"city":"Новосибирск","salary":77665.4},{"city":"Минск","salary":76584.7},{"city":"Екатеринбург","salary":73017.4},{"city":"Казань","salary":66853.6},{"city":"Краснодар","salary":65404.4},{"city":"Нижний Новгород","salary":62999.1},{"city":"Самара","salary":61243.2},{"city":"Челябинск","salary":60995.7}],"city_vacancies_fraction":[{"city":"Москва","fraction":33.8},{"city":"Санкт-Петербург","fraction":10.1},{"city":"Минск","fraction":3.5},{"city":"Новосибирск","fraction":2.3},{"city":"Екатеринбург","fraction":2.2},{"city":"Нижний Новгород","fraction":2.0},{"city":"Киев","fraction":2.0},{"city":"Алматы","fraction":2.0},{"city":"Казань","fraction":1.9},{"city":"Воронеж","fraction":1.6}],"year_skills":[{"year":2015,"skills":[{"skill":"JavaScript","count":56654},{"skill":"jQuery","count":48379},{"skill":"HTML5","count":44976},{"skill":"ООП","count":41994},{"skill":"HTML","count":36305},{"skill":"CSS","count":29513},{"skill":"MVC","count":29335},{"skill":"C#","count":26778},{"skill":"Ведение переговоров","count":26274},{"skill":"PHP","count":25964},{"skill":"ASP.NET","count":24904},{"skill":"MySQL","count":24889},{"skill":".NET Framework","count":24651},{"skill":"Git","count":23669},{"skill":"SQL","count":21526},{"skill":"Управление проектами","count":20175},{"skill":"Поиск и привлечение клиентов","count":20012},{"skill":"CSS3","count":19554},{"skill":"Работа в команде","count":18101},{"skill":"Телефонные переговоры","count":17672}]},{"year":2016,"skills":[{"skill":"JavaScript","count":118894},{"skill":"Ведение переговоров","count":99774},{"skill":"HTML","count":99409},{"skill":"Работа в команде","count":84025},{"skill":"CSS","count":82903},{"skill":"Git","count":79911},{"skill":"jQuery","count":78905},{"skill":"PHP","count":77846},{"skill":"Управление проектами","count":74884},{"skill":"Пользователь ПК","count":71826},{"skill":"MySQL","count":71555},{"skill":"HTML5","count":67917},{"skill":"Навыки продаж","count":65422},{"skill":"Деловая переписка","count":64258},{"skill":"Грамотная речь","count":63252},{"skill":"Поиск и привлечение клиентов","count":62714},{"skill":"Развитие продаж","count":59013},{"skill":"ООП","count":58945},{"skill":"Активные продажи","count":58814},{"skill":"Организаторские навыки","count":58685}]},{"year":2017,"skills":[{"skill":"JavaScript","count":172618},{"skill":"HTML","count":142056},{"skill":"CSS","count":124132},{"skill":"Ведение переговоров","count":118704},{"skill":"Git","count":117248},{"skill":"PHP","count":111387},{"skill":"MySQL","count":106855},{"skill":"jQuery","count":99308},{"skill":"Работа в команде","count":98689},{"skill":"Управление проектами","count":95966},{"skill":"HTML5","count":92784},{"skill":"SQL","count":83840},{"skill":"Активные продажи","count":80210},{"skill":"Деловая переписка","count":79658},{"skill":"Телефонные переговоры","count":77270},{"skill":"Пользователь ПК","count":77119},{"skill":"B2B Продажи","count":73285},{"skill":"ООП","count":73247},{"skill":"Грамотная речь","count":73036},{"skill":"Linux","count":70641}]},{"year":2018,"skills":[{"skill":"JavaScript","count":245989},{"skill":"HTML","count":200934},{"skill":"Git","count":185805},{"skill":"Ведение переговоров","count":173650},{"skill":"CSS","count":173312},{"skill":"Работа в команде","count":153607},{"skill":"MySQL","count":153075},{"skill":"PHP","count":151099},{"skill":"Управление проектами","count":145271},{"skill":"SQL","count":135376},{"skill":"Деловая переписка","count":122037},{"skill":"HTML5","count":121266},{"skill":"Пользователь ПК","count":120980},{"skill":"jQuery","count":119609},{"skill":"Активные продажи","count":118895},{"skill":"Телефонные переговоры","count":115129},{"skill":"Linux","count":112256},{"skill":"Грамотная речь","count":111868},{"skill":"B2B Продажи","count":107623},{"skill":"Деловое общение","count":104199}]},{"year":2019,"skills":[{"skill":"JavaScript","count":254470},{"skill":"Git","count":215789},{"skill":"HTML","count":204852},{"skill":"Работа в команде","count":198949},{"skill":"Ведение переговоров","count":197157},{"skill":"SQL","count":188873},{"skill":"CSS","count":180438},{"skill":"Управление проектами","count":173011},{"skill":"Пользователь ПК","count":161174},{"skill":"Грамотная речь","count":151735},{"skill":"PHP","count":147415},{"skill":"MySQL","count":145054},{"skill":"Linux","count":144811},{"skill":"Английский язык","count":143792},{"skill":"Деловая переписка","count":131983},{"skill":"Активные продажи","count":131955},{"skill":"Деловое общение","count":122383},{"skill":"Телефонные переговоры","count":122074},{"skill":"Java","count":120160},{"skill":"B2B Продажи","count":119716}]},{"year":2020,"skills":[{"skill":"SQL","count":375695},{"skill":"Git","count":338341},{"skill":"Работа в команде","count":316584},{"skill":"JavaScript","count":304487},{"skill":"Английский язык","count":280383},{"skill":"Грамотная речь","count":275942},{"skill":"Пользователь ПК","count":270578},{"skill":"Linux","count":254157},{"skill":"HTML","count":230358},{"skill":"Управление проектами","count":227159},{"skill":"Ведение переговоров","count":212214},{"skill":"CSS","count":207435},{"skill":"Активные продажи","count":200789},{"skill":"Java","count":198427},{"skill":"Python","count":189400},{"skill":"MySQL","count":181632},{"skill":"PHP","count":166998},{"skill":"Деловое общение","count":162376},{"skill":"PostgreSQL","count":162121},{"skill":"MS SQL","count":158508}]},{"year":2021,"skills":[{"skill":"Работа в команде","count":735329},{"skill":"SQL","count":641509},{"skill":"Грамотная речь","count":591735},{"skill":"Английский язык","count":575188},{"skill":"Git","count":540340},{"skill":"Пользователь ПК","count":445453},{"skill":"JavaScript","count":424623},{"skill":"Linux","count":405593},{"skill":"Управление проектами","count":398143},{"skill":"Python","count":339058},{"skill":"Ведение переговоров","count":338229},{"skill":"HTML","count":306663},{"skill":"Деловое общение","count":290291},{"skill":"Java","count":274505},{"skill":"Активные продажи","count":271629},{"skill":"PostgreSQL","count":271461},{"skill":"CSS","count":266521},{"skill":"Деловая переписка","count":260534},{"skill":"Грамотность","count":259527},{"skill":"Adobe Photoshop","count":249613}]},{"year":2022,"skills":[{"skill":"SQL","count":620349},{"skill":"Работа в команде","count":607767},{"skill":"Git","count":511511},{"skill":"Английский язык","count":474133},{"skill":"Linux","count":420470},{"skill":"Грамотная речь","count":342912},{"skill":"JavaScript","count":341191},{"skill":"Управление проектами","count":337282},{"skill":"Python","count":335238},{"skill":"Пользователь ПК","count":323584},{"skill":"PostgreSQL","count":287864},{"skill":"Adobe Photoshop","count":251296},{"skill":"Java","count":227383},{"skill":"HTML","count":223060},{"skill":"MySQL","count":211966},{"skill":"Аналитическое мышление","count":211234},{"skill":"PHP","count":201857},{"skill":"MS PowerPoint","count":197820},{"skill":"Работа с большим объемом информации","count":193034},{"skill":"ООП","count":192212}]},{"year":2023,"skills":[{"skill":"SQL","count":455440},{"skill":"Работа в команде","count":368050},{"skill":"Git","count":323689},{"skill":"Linux","count":322352},{"skill":"Python","count":267094},{"skill":"PostgreSQL","count":251752},{"skill":"Грамотная речь","count":234127},{"skill":"Управление проектами","count":224025},{"skill":"Аналитическое мышление","count":217846},{"skill":"Английский язык","count":210341},{"skill":"JavaScript","count":209767},{"skill":"Adobe Photoshop","count":198825},{"skill":"Пользователь ПК","count":188159},{"skill":"Работа с большим объемом информации","count":185029},{"skill":"Docker","count":166745},{"skill":"Техническая поддержка","count":154796},{"skill":"Деловое общение","count":153280},{"skill":"Деловая коммуникация","count":152212},{"skill":"PHP","count":149710},{"skill":"MySQL","count":149376}]},{"year":2024,"skills":[{"skill":"SQL","count":356518},{"skill":"Linux","count":231479},{"skill":"Git","count":209565},{"skill":"Python","count":209541},{"skill":"PostgreSQL","count":198194},{"skill":"Аналитическое мышление","count":178549},{"skill":"Техническая поддержка","count":141794},{"skill":"Работа с большим объемом информации","count":135196},{"skill":"JavaScript","count":134556},{"skill":"Docker","count":133330},{"skill":"Работа в команде","count":132533},{"skill":"Настройка ПК","count":128599},{"skill":"Деловая коммуникация","count":121598},{"skill":"Английский язык","count":120612},{"skill":"Adobe Photoshop","count":119501},{"skill":"Информационные технологии","count":115298},{"skill":"Java","count":113510},{"skill":"Настройка сетевых подключений","count":109012},{"skill":"Бизнес-анализ","count":107259},{"skill":"Разработка технических заданий","count":105901}]}]};

function CommonRoute() {
  return (
    <>
      <section className="analytics">
        <h2 className="title-xl">Динамика уровня зарплат по годам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Год", "Зарплата"],
                data["year_salary"],
                transformNumberToCurrency
              ).slice(0, 11)
            }
          />
          <AnalyticsLine data={transformData(data["year_salary"]).reverse()}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Динамика количества вакансий по годам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Год", "Вакансии"],
                data["year_vacancies"]
              ).slice(0, 11)
            }
          />
          <AnalyticsLine data={transformData(data["year_vacancies"]).reverse()}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Уровень зарплат по городам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Город", "Зарплата"],
                data["city_salary"],
                transformNumberToCurrency
              ).slice(0, 11)
            }
          />
          <AnalyticsBar data={transformData(data["city_salary"]).reverse()}/>
        </div>
      </section>
      <section className="analytics">
        <h2 className="title-xl">Доля вакансий по городам: Все профессии</h2>
        <div className="analytics-data">
          <AnalyticsTable
            data={
              prepareTableData(
                ["Город", "Доля вакансий"],
                data["city_vacancies_fraction"],
                e => `${e}%`
              ).slice(0, 11)
            }
          />
          <AnalyticsPie data={transformData(data["city_vacancies_fraction"])}/>
        </div>
      </section>
      <SkillsStatistics data={data["year_skills"]} />
      <PageNavigation prev="/" next="/relevance" />
    </>
  );
}

export default CommonRoute;
