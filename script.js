let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    costs = prompt("Введите обязательную статью расходов в этом месяце", ""),
    spending = prompt("Введите обязательную статью расходов в этом месяце"),
    totalCost = prompt("Во сколько обойдется?"),

appData = {
        butget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
    income: [],
    savings: false
    };