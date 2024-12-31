export function transformNumberToCurrency(value: string | number) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 1
  })

  return formatter.format(Number(value)).replace(/\s/g, ".").replace(/\.₽/, "₽");
}

export function prepareSalary(
  salary_from: number | undefined,
  salary_to: number | undefined,
) {
  const result = [];

  if (salary_from) {
    result.push(`от ${transformNumberToCurrency(salary_from)}`)
  }

  if (salary_to) {
    result.push(`до ${transformNumberToCurrency(salary_to)}`)
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