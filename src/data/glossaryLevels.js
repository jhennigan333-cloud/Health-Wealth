const glossaryLevels = [
  {
    slug: 'inflation',
    term: 'Inflation',
    levels: [
      {
        title: 'The Basics',
        explanation: 'Inflation means prices go up over time. When there is inflation, the same amount of money buys you less than it used to.',
        example: 'A bag of chips that cost $2 last year now costs $2.25. That difference is inflation.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'Inflation happens across the whole economy, not just one product. When almost everything gets more expensive at once, that is inflation. It is measured as a percentage — if inflation is 5%, prices on average are 5% higher than they were a year ago.',
        example: 'If your grocery bill was $100 last year and inflation is 5%, you might now spend $105 for the exact same items.',
      },
      {
        title: 'The Mechanics',
        explanation: 'Inflation is caused by two main things: too much demand (everyone wants to buy stuff, so sellers raise prices) or rising production costs (if it costs more to make something, companies charge more). When the government prints a lot of money, more dollars chase the same number of goods — so prices rise.',
        example: 'During COVID, people saved money and then spent it all at once. High demand for products combined with supply chain problems caused inflation to spike.',
      },
      {
        title: 'Real World Impact',
        explanation: 'Inflation affects people differently. If your wages rise with inflation, you are okay. But if your income stays the same while prices go up, your purchasing power shrinks. Savings accounts lose real value during high inflation unless the interest rate on them beats the inflation rate. The Federal Reserve targets 2% annual inflation as a healthy level for the economy.',
        example: 'If you have $10,000 in a savings account earning 1% interest but inflation is 6%, you are actually losing 5% of your real purchasing power each year.',
      },
      {
        title: 'Expert View',
        explanation: 'Economists distinguish between demand-pull inflation (too much money chasing too few goods), cost-push inflation (supply shocks raising production costs), and built-in inflation (a wage-price spiral where workers demand higher wages because prices are high, which raises production costs, which raises prices further). Hyperinflation — like in Zimbabwe in the 2000s or Germany in the 1920s — occurs when a government prints money uncontrollably and prices can rise thousands of percent in a single year, destroying the currency\'s value entirely.',
        example: 'In Zimbabwe in 2008, inflation hit 89.7 sextillion percent per month. A loaf of bread that cost $1 in the morning might cost $10 by the afternoon.',
      },
    ],
  },
  {
    slug: 'interest-rate',
    term: 'Interest Rate',
    levels: [
      {
        title: 'The Basics',
        explanation: 'An interest rate is the cost of borrowing money. If you borrow money, you pay back more than you borrowed. The interest rate tells you how much extra you pay.',
        example: 'You borrow $100 from a friend who charges 10% interest. You pay back $110 — $100 you borrowed plus $10 in interest.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'Interest rates work in two directions. When you borrow (a loan or credit card), you pay interest. When you save money in a bank account, the bank pays you interest because they are technically borrowing your money to lend to others. Rates are shown as a yearly percentage, called APR (Annual Percentage Rate).',
        example: 'A 20% APR credit card means if you carry a $1,000 balance for a full year without paying it off, you owe $200 in interest on top of the original $1,000.',
      },
      {
        title: 'The Mechanics',
        explanation: 'The Federal Reserve sets a baseline interest rate called the federal funds rate. Banks borrow from each other at this rate, and it influences every other rate in the economy. When the Fed raises rates, all borrowing gets more expensive — mortgages, car loans, credit cards. When it lowers rates, borrowing becomes cheaper and people tend to spend more.',
        example: 'When the Fed raised rates in 2022-2023, the average 30-year mortgage rate went from about 3% to over 7%. On a $400,000 home, that meant monthly payments went from about $1,686 to $2,661.',
      },
      {
        title: 'Real World Impact',
        explanation: 'Interest rates are one of the most powerful levers in the economy. Low rates encourage borrowing and spending, which stimulates growth. High rates slow borrowing and spending, which cools down inflation. This creates a constant balancing act — too low for too long can cause inflation, too high can cause a recession. Your personal finances are directly affected: credit card debt, car loans, mortgages, and even student loans are all tied to interest rate environments.',
        example: 'In 2020-2021, rates were near zero. People refinanced homes at 2.5-3% rates. By 2023, rates were above 5%, and anyone buying a home for the first time faced dramatically higher monthly payments for the same house.',
      },
      {
        title: 'Expert View',
        explanation: 'Economists distinguish between the nominal interest rate (the stated rate) and the real interest rate (nominal rate minus inflation). If your savings account pays 4% but inflation is 5%, your real interest rate is -1% — you are losing purchasing power. The yield curve — a chart of interest rates across different time periods — is closely watched by economists. When short-term rates exceed long-term rates (called an inverted yield curve), it has historically predicted recessions within 12-18 months.',
        example: 'In 2022, the US yield curve inverted — 2-year Treasury bonds yielded more than 10-year bonds. Many economists cited this as a warning sign of a coming recession.',
      },
    ],
  },
  {
    slug: 'gdp',
    term: 'GDP',
    levels: [
      {
        title: 'The Basics',
        explanation: 'GDP stands for Gross Domestic Product. It is the total value of everything a country produces and sells in a year. Think of it as a country\'s yearly report card for economic activity.',
        example: 'If every business, farmer, and worker in the US adds up everything they made and sold in a year, that total is the GDP.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'GDP includes goods (things you can touch, like cars and food) and services (things people do for you, like haircuts and medical care). When GDP grows, the economy is expanding — more is being made and sold. When it shrinks, the economy is contracting. Two consecutive quarters of shrinking GDP is officially called a recession.',
        example: 'The US GDP is about $29 trillion. If it grows 2.5% this year, the economy produced $725 billion more in goods and services than last year.',
      },
      {
        title: 'The Mechanics',
        explanation: 'GDP is calculated three ways that should all give the same answer: the Expenditure Approach (adding up all spending: consumer spending + business investment + government spending + exports minus imports), the Income Approach (adding up all income earned), and the Output Approach (adding up all goods and services produced). Economists use all three as a check on each other.',
        example: 'In the Expenditure Approach: if consumers spend $15 trillion, businesses invest $4 trillion, government spends $4 trillion, and net exports add $1 trillion, GDP = $24 trillion.',
      },
      {
        title: 'Real World Impact',
        explanation: 'GDP growth affects jobs, incomes, and government budgets. A growing economy typically means lower unemployment and higher wages. GDP per capita (GDP divided by population) gives a better sense of average living standards. However, GDP does not measure equality — a country can have high GDP while most citizens live in poverty if wealth is concentrated at the top.',
        example: 'The US has one of the world\'s highest GDPs, but GDP per capita in Mississippi ($43,000) is far lower than in Massachusetts ($86,000), showing wide variation even within one country.',
      },
      {
        title: 'Expert View',
        explanation: 'Economists increasingly recognize GDP\'s limitations. It counts harmful activity (cleaning up oil spills adds to GDP) but misses valuable activity (unpaid caregiving does not). Alternative measures like the Human Development Index (HDI) incorporate education and life expectancy. GDP also does not account for environmental degradation — a country can grow its GDP by depleting natural resources, leaving future generations worse off. Nominal GDP is measured in current prices; Real GDP is adjusted for inflation, giving a truer picture of actual growth.',
        example: 'China\'s nominal GDP growth looked extraordinary for decades, but critics noted it came partly from rapid depletion of resources and environmental damage not captured in GDP figures.',
      },
    ],
  },
  {
    slug: 'stock',
    term: 'Stock',
    levels: [
      {
        title: 'The Basics',
        explanation: 'A stock is a small piece of ownership in a company. Companies sell these pieces to raise money, and anyone can buy them. If the company does well, your piece becomes worth more.',
        example: 'Imagine a pizza shop splits itself into 100 equal pieces and sells them. You buy one piece for $10. Now you own 1% of the pizza shop.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'Stocks are bought and sold on stock markets like the New York Stock Exchange (NYSE) or Nasdaq. The price of a stock changes constantly based on how much people want to buy or sell it. If more people want to buy a stock than sell it, the price goes up. If more people want to sell, the price goes down.',
        example: 'Apple stock might be $180 at 9am and $183 by noon if positive news comes out about the company — like a strong earnings report or a popular new product.',
      },
      {
        title: 'The Mechanics',
        explanation: 'When you buy a stock, you become a shareholder. Companies can raise money by issuing new shares through an IPO (Initial Public Offering) — the first time a private company sells shares to the public. After that, shares trade between investors on the open market. Stock prices are driven by company earnings, future growth expectations, industry trends, and overall market sentiment.',
        example: 'When a company goes public in an IPO, it sets an initial price. If demand is high, the stock often jumps on the first day of trading — like Airbnb\'s IPO in 2020, where shares opened at $68 and closed at $144.',
      },
      {
        title: 'Real World Impact',
        explanation: 'Stocks are one of the primary ways people build long-term wealth. Historically, the US stock market has returned about 10% per year on average over long periods. This means money invested in a broad market index can double roughly every 7 years. However, stocks are volatile — they can drop 30-50% in a downturn. This is why financial advisors generally recommend investing for the long term and not panicking during downturns.',
        example: 'Someone who invested $10,000 in an S&P 500 index fund in 2000 would have about $55,000 today, despite experiencing the dot-com crash, the 2008 financial crisis, and the COVID crash along the way.',
      },
      {
        title: 'Expert View',
        explanation: 'Stock valuation involves metrics like P/E ratio (Price-to-Earnings: how much investors pay per dollar of earnings), EPS (Earnings Per Share), and market capitalization. Stocks can be analyzed through fundamental analysis (studying the company\'s financials and business) or technical analysis (studying price charts and trading patterns). The Efficient Market Hypothesis suggests stock prices already reflect all available information, making it nearly impossible to consistently beat the market — which is why many experts recommend low-cost index funds over active stock picking.',
        example: 'Warren Buffett famously beat the market for decades through fundamental analysis, but research shows most professional fund managers underperform simple index funds over a 10-year period.',
      },
    ],
  },
  {
    slug: 'budget',
    term: 'Budget',
    levels: [
      {
        title: 'The Basics',
        explanation: 'A budget is a plan for your money. It tells you how much you expect to earn and how much you plan to spend before the month begins. Instead of spending until you run out, you decide ahead of time where your money goes.',
        example: 'You earn $1,000 a month. You plan: $500 for rent, $200 for food, $100 for transport, $100 for fun, $100 for savings. That is a budget.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'The most well-known budgeting method is 50/30/20: 50% of income goes to needs (rent, bills, food), 30% to wants (eating out, subscriptions, hobbies), and 20% to savings and debt repayment. A budget does not mean cutting everything fun — it means knowing where your money goes so you can make intentional choices.',
        example: 'On a $3,000/month income: $1,500 for needs, $900 for wants, $600 for savings. That $600/month becomes $7,200 saved in a year.',
      },
      {
        title: 'The Mechanics',
        explanation: 'Budgets work by tracking income (money coming in) versus expenses (money going out). Fixed expenses stay the same every month (rent, loan payments). Variable expenses change (groceries, dining out, entertainment). The goal is to ensure income minus expenses equals a positive number — ideally going into savings or investments. Zero-based budgeting is a stricter method where every dollar of income is assigned a purpose, leaving nothing unaccounted for.',
        example: 'Zero-based budget: income $3,000, rent $900, food $400, transport $200, utilities $100, subscriptions $50, entertainment $150, savings $600, emergency fund $200, clothes $100, misc $300 = exactly $3,000.',
      },
      {
        title: 'Real World Impact',
        explanation: 'Budgeting is the foundation of financial health. Without one, lifestyle creep happens — as income rises, spending rises to match it, with nothing left over. A budget also reveals patterns you might not notice: many people are shocked to see how much they spend on small daily purchases. Budgeting also helps build an emergency fund (3-6 months of expenses set aside), which prevents debt spirals when unexpected costs arise.',
        example: 'Studies show the average American spends over $1,100 a year on coffee. Someone who tracks this and makes coffee at home saves enough in 5 years ($5,500+) to cover several months of emergency expenses.',
      },
      {
        title: 'Expert View',
        explanation: 'Behavioral economists have found that budgeting alone is often not enough — cognitive biases like present bias (overvaluing today\'s enjoyment vs. future savings) and mental accounting (treating money differently based on its source) undermine good intentions. Automation is the most effective solution: setting up automatic transfers to savings accounts on payday removes the decision entirely. Envelope budgeting (physically separating cash by category) works for some because the tangibility of cash creates stronger psychological constraints than digital spending.',
        example: 'Research by Richard Thaler (Nobel Prize winner) showed that employees who were automatically enrolled in 401k retirement plans with automatic escalation saved significantly more over their lifetimes than those who had to opt in voluntarily.',
      },
    ],
  },
  {
    slug: 'recession',
    term: 'Recession',
    levels: [
      {
        title: 'The Basics',
        explanation: 'A recession is when the economy slows down significantly for a sustained period. Businesses make less money, some close, and people lose jobs. It is the opposite of economic growth.',
        example: 'During a recession, you might notice more "For Lease" signs on storefronts, more people out of work, and people spending less money overall.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'The technical definition of a recession is two consecutive quarters (six months) where GDP — the total value of what a country produces — shrinks. But economists also look at job losses, consumer spending, and business activity. Recessions are a normal part of the economic cycle, not permanent states.',
        example: 'The US economy contracted in Q1 and Q2 of 2022 by 1.6% and 0.6% respectively. Because of the unusual circumstances (strong job market), economists debated whether it was a true recession.',
      },
      {
        title: 'The Mechanics',
        explanation: 'Recessions often start with a trigger — a financial crisis, a pandemic, an oil shock, or a market crash. The trigger causes businesses to cut spending, consumers to spend less, companies to lay off workers, and laid-off workers to spend even less. This cycle feeds on itself and is called a negative feedback loop. Banks also tend to tighten lending during recessions, making it harder for businesses to borrow and invest.',
        example: 'In 2008, falling home prices triggered bank losses, which caused a credit crunch, which caused businesses to cut back, which caused unemployment to spike to 10%, which caused consumer spending to fall further.',
      },
      {
        title: 'Real World Impact',
        explanation: 'Recessions hit different groups differently. Lower-income workers in industries like hospitality, retail, and manufacturing typically see the most job losses. People with debt face increased difficulty making payments. However, recessions also create opportunities: asset prices (stocks, real estate) drop, meaning those with savings can buy at lower prices. Governments typically respond with stimulus — increasing spending or cutting taxes — to inject money back into the economy.',
        example: 'During the 2020 COVID recession, the US government sent stimulus checks to most Americans and increased unemployment benefits significantly to prevent the downturn from spiraling into a full depression.',
      },
      {
        title: 'Expert View',
        explanation: 'Economists distinguish between types of recessions: V-shaped (sharp drop, fast recovery), U-shaped (prolonged trough before recovery), L-shaped (drop with little recovery, also called depression), and W-shaped (double-dip recession). Leading indicators like the yield curve inversion, consumer confidence surveys, and manufacturing indexes are used to predict recessions before they officially begin. The NBER (National Bureau of Economic Research) is the official arbiter of US recession dates — their judgments often come months after the recession has begun.',
        example: 'The 2020 COVID recession was the deepest but shortest US recession on record — GDP fell 28% annualized in Q2 2020, but the economy rebounded so quickly it is classified as a two-month V-shaped recession.',
      },
    ],
  },
  {
    slug: 'federal-reserve',
    term: 'Federal Reserve',
    levels: [
      {
        title: 'The Basics',
        explanation: 'The Federal Reserve (also called "the Fed") is the central bank of the United States. It is like the bank for all banks — it helps control how much money flows through the economy and tries to keep things stable.',
        example: 'If the economy is getting too hot (prices rising fast), the Fed steps in and raises interest rates to cool things down.',
      },
      {
        title: 'Getting Clearer',
        explanation: 'The Fed has two main jobs: keep inflation low (around 2%) and keep employment high. These are called its "dual mandate." Its most powerful tool is setting the federal funds rate — the interest rate at which banks lend money to each other overnight. This rate ripples out to influence all other interest rates in the economy.',
        example: 'When the Fed raises the federal funds rate from 2% to 5%, banks charge more for mortgages, car loans, and credit cards. This causes people and businesses to borrow and spend less, which cools down inflation.',
      },
      {
        title: 'The Mechanics',
        explanation: 'The Fed is made up of 12 regional Federal Reserve Banks and is led by a Board of Governors. The Federal Open Market Committee (FOMC) meets 8 times a year to decide on interest rate policy. The Fed also controls the money supply through open market operations — buying or selling government bonds. Buying bonds injects money into the economy (expansionary policy); selling bonds removes money (contractionary policy).',
        example: 'During 2020-2021, the Fed bought hundreds of billions of dollars in bonds to inject money into the economy and keep rates low during the COVID pandemic. This is called "quantitative easing."',
      },
      {
        title: 'Real World Impact',
        explanation: 'Fed decisions affect virtually every financial decision you make. Low rates make it cheaper to buy a home, take out a student loan, or start a business. High rates make saving more rewarding but make debt more expensive. Markets react instantly to Fed announcements — a surprise rate hike or cut can move stock prices significantly in minutes. The Fed also acts as a "lender of last resort" during financial crises, stepping in to prevent bank collapses.',
        example: 'In March 2020, the Fed cut rates to near zero in an emergency meeting and launched massive bond-buying programs within days of COVID-19 shutdowns. US stock markets, which had crashed 34%, recovered fully within months.',
      },
      {
        title: 'Expert View',
        explanation: 'The Fed operates independently from the government, meaning the President cannot directly order it to change rates — though political pressure exists. This independence is designed to prevent short-term political motives from overriding long-term economic stability. Economists debate how effective monetary policy is: some argue the Fed has too much power; others say it has too little. The Fed\'s "forward guidance" — communicating future intentions — is now considered nearly as important as its actual policy actions, as markets move based on expectations of Fed behavior.',
        example: 'In 2013, Fed Chair Ben Bernanke hinted at tapering bond purchases. Markets panicked in what became known as the "Taper Tantrum" — bond yields spiked significantly, just from the suggestion of a policy change, not an actual one.',
      },
    ],
  },
]

export default glossaryLevels
