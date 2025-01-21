export enum BUDGET_TYPES {
  basicDistribution = 'Basic Distribution', // 50/30/20
  savingsAndGiving = 'Savings and Giving', // 70/20/10
  minimalSavings = 'Minimal Savings', // 80, 20
  universalBalance = 'Universal Balance', // 60/20/10/10
  zeroBased = 'Zero-Based Budgeting',
}

export enum CURRENCIES {
  usd = 'USD',
  eur = 'EUR',
  gbp = 'GBP',
  cad = 'CAD',
  uah = 'UAH',
}

export const currenciesSymbols = {
  [CURRENCIES.usd]: '$',
  [CURRENCIES.eur]: '€',
  [CURRENCIES.gbp]: '£',
  [CURRENCIES.cad]: 'C$',
  [CURRENCIES.uah]: '₴',
}

export const budgetOptions = [
  {
    label: BUDGET_TYPES.basicDistribution,
    value: BUDGET_TYPES.basicDistribution,
  },
  {
    label: BUDGET_TYPES.savingsAndGiving,
    value: BUDGET_TYPES.savingsAndGiving,
  },
  { label: BUDGET_TYPES.minimalSavings, value: BUDGET_TYPES.minimalSavings },
  {
    label: BUDGET_TYPES.universalBalance,
    value: BUDGET_TYPES.universalBalance,
  },
  { label: BUDGET_TYPES.zeroBased, value: BUDGET_TYPES.zeroBased },
]

export const currenciesOptions = [
  { label: CURRENCIES.usd, value: CURRENCIES.usd },
  { label: CURRENCIES.eur, value: CURRENCIES.eur },
  { label: CURRENCIES.gbp, value: CURRENCIES.gbp },
  { label: CURRENCIES.cad, value: CURRENCIES.cad },
  { label: CURRENCIES.uah, value: CURRENCIES.uah },
]

export const defaultEssentialNeeds = [
  {
    icon: 'fa-solid fa-home',
    title: 'Rent/Mortgage',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-bolt',
    title: 'Electricity',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-bath',
    title: 'Water',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Internet',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-mobile',
    title: 'Cellphone',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-cart-plus',
    title: 'Groceries',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-bus',
    title: 'Public transportation',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-toolbox',
    title: 'Home maintenance',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-car',
    title: 'Car payment',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-gas-pump',
    title: 'Gasoline',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-wrench',
    title: 'Car maintenance and repairs',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-stethoscope',
    title: 'Out-of-pocket medical costs',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-triangle-exclamation',
    title: 'Taxes',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-user-doctor',
    title: 'Health',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-car-burst',
    title: 'Auto insurance premiums',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Family needs',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-credit-card',
    title: 'Debts',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-person-circle-question',
    title: 'Other needs',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-paw',
    title: 'Pets',
    amount: '0',
    description: '',
  },
]

export const defaultPersonalWants = [
  {
    icon: 'fa-solid fa-utensils',
    title: 'Eating out',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-kitchen-set',
    title: 'Special meals at home',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-basketball',
    title: 'Hobbies',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-tv',
    title: 'Cable or streaming packages',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-ticket',
    title: 'Entertainment',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-shirt',
    title: 'Clothing, jewelry, etc.',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-suitcase-rolling',
    title: 'Travel expenses',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-dumbbell',
    title: 'Gym or club memberships',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-couch',
    title: 'Home decor items',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-gift',
    title: 'Birthday gifts',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Other wants',
    amount: '0',
    description: '',
  },
]

export const defaultSavings = [
  {
    icon: 'fa-solid fa-piggy-bank',
    title: 'Savings',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-sack-dollar',
    title: 'Investments',
    amount: '0',
    description: '',
  },
  {
    icon: 'fa-solid fa-money-bill-trend-up',
    title: 'Investments in crypto',
    amount: '0',
    description: '',
  },
]

export const defaultBudget = {
  essentialNeeds: defaultEssentialNeeds,
  personalWants: defaultPersonalWants,
  savings: defaultSavings,
}

export const defaultBudgetFormData = {
  title: '',
  income: '0',
  budgetType: BUDGET_TYPES.basicDistribution,
  currency: CURRENCIES.usd,
  items: defaultBudget,
}

export enum BUDGET_SECTIONS {
  essentialNeeds = 'essentialNeeds',
  personalWants = 'personalWants',
  savings = 'savings',
}

export const defaultBudgetItem = {
  icon: 'fa-solid fa-icons',
  title: '',
  amount: '0',
  description: '',
}
