import {ISkillsStatistics} from "../types/types.ts";

const currenciesTranslate: {[key: string]: string} = {
  "RUR": "₽",
  "USD": "$",
  "KZT": "₸",
}

export function transformNumberToCurrency(value: string | number) {
  if (typeof value === "string") value = 0;

  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 1
  })

  return formatter
    .format(value)
    .replace(/\s/g, ".")
    .replace(/\.\u20BD/, "\u20BD");
}

export function prepareSalary(
  salary_from?: number | undefined,
  salary_to?: number | undefined,
  currency?: string,
) {
  const result = [];

  if (currency && currency in currenciesTranslate) currency = currenciesTranslate[currency];

  if (salary_from) {
    result.push(`от ${salary_from}${currency}`)
  }

  if (salary_to) {
    result.push(`до ${salary_to}${currency}`)
  }

  return result.join(" ");
}

interface DataRow {
  [key: string]: string | number;
}

export function prepareTableData(
  headers: string[],
  data: DataRow[],
  changeValueFn: (e: string | number) => string = (e) => String(e)
) {
  const prepared = transformData(data);

  return [headers, ...prepared.map(row => {
    const copy = [...row];
    copy[1] = changeValueFn(copy[1]);
    return copy;
  })]
}

export function transformData(data: DataRow[]) {
  return data.map((row) => Object.values(row));
}

export function prepareSkillsGraphicData(data: ISkillsStatistics) {
  return data.skills.map((skill) => ([skill.skill, skill.count]));
}