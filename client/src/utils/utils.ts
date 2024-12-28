export function transformNumberToCurrency(value: number) {
  const formatter = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0
  })

  return formatter.format(value).replace(/\s/g, ".").replace(/\.₽/, "₽");
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