// 5 questions per level, per term. correct is the index (0-3) of the right answer.
const quizzes = {
  inflation: [
    // Level 1 — The Basics
    [
      {
        question: 'What best describes inflation?',
        options: ['A price drop at one store', 'When prices across the economy rise over time', 'When the stock market goes up', 'When a country\'s population grows'],
        correct: 1,
      },
      {
        question: 'A burger cost $5 last year and costs $5.50 this year. What is this an example of?',
        options: ['A tax increase', 'Better quality food', 'Inflation', 'Deflation'],
        correct: 2,
      },
      {
        question: 'When inflation happens, what happens to your money?',
        options: ['It grows in value', 'It buys more than before', 'It buys less than before', 'Nothing changes'],
        correct: 2,
      },
      {
        question: 'Inflation affects...',
        options: ['Only luxury items', 'Only food and gas', 'Only housing costs', 'Prices across the whole economy'],
        correct: 3,
      },
      {
        question: 'Which is a real-world sign of inflation?',
        options: ['Your gym membership gets cheaper', 'The same grocery run costs more than last year', 'Your paycheck gets smaller', 'Stores start closing'],
        correct: 1,
      },
    ],
    // Level 2 — Getting Clearer
    [
      {
        question: 'If inflation is 5%, it means prices are...',
        options: ['5% lower than last year', '5% higher than last year', '5% higher than 5 years ago', '$5 more expensive'],
        correct: 1,
      },
      {
        question: 'Your grocery bill was $100 and inflation is 8%. What do you expect to pay for the same items?',
        options: ['$92', '$100', '$108', '$180'],
        correct: 2,
      },
      {
        question: 'What does "purchasing power" mean?',
        options: ['How much money you earn', 'The max you can spend on a credit card', 'How much your money can buy', 'How powerful the economy is'],
        correct: 2,
      },
      {
        question: 'Your salary increases 2% but inflation is 7%. What happens?',
        options: ['You\'re better off', 'Nothing changes', 'Your purchasing power actually decreases', 'Your salary is growing too fast'],
        correct: 2,
      },
      {
        question: 'Inflation affects prices...',
        options: ['Only on expensive items', 'Only in big cities', 'Across the economy generally', 'Only on imported goods'],
        correct: 2,
      },
    ],
    // Level 3 — The Mechanics
    [
      {
        question: 'What is "demand-pull" inflation?',
        options: ['Prices rise because production costs increase', 'Prices rise because too many people want to buy things', 'Prices fall because demand drops', 'The government raises taxes'],
        correct: 1,
      },
      {
        question: 'What is "cost-push" inflation?',
        options: ['Too much consumer spending drives prices up', 'Rising production costs cause prices to rise', 'Lower demand leads to lower prices', 'The Fed cuts interest rates'],
        correct: 1,
      },
      {
        question: 'What happens to prices when the government prints a lot of money?',
        options: ['They fall — more money means more supply', 'Nothing changes', 'They rise — more money chases the same goods', 'Only luxury prices rise'],
        correct: 2,
      },
      {
        question: 'What combination caused inflation to spike after COVID?',
        options: ['Low government spending and high supply', 'People not spending enough', 'High pent-up demand meeting limited supply', 'The Fed raising interest rates'],
        correct: 2,
      },
      {
        question: 'Which of these is NOT a main cause of inflation?',
        options: ['Rising production costs', 'Too much money in circulation', 'High consumer demand', 'People choosing to spend less money'],
        correct: 3,
      },
    ],
    // Level 4 — Real World Impact
    [
      {
        question: 'What inflation rate does the Federal Reserve consider healthy?',
        options: ['0% — no inflation at all', 'Around 2% per year', 'Around 10% per year', 'Whatever the market sets'],
        correct: 1,
      },
      {
        question: 'Your savings account earns 1% but inflation is 6%. What is happening?',
        options: ['Your money is growing in real terms', 'Your money is staying the same', 'Your money is losing purchasing power', 'Your money is doubling'],
        correct: 2,
      },
      {
        question: 'Why do people invest in stocks or other assets?',
        options: ['To avoid paying taxes', 'To grow money faster than inflation erodes it', 'Because savings accounts are illegal', 'To help the government'],
        correct: 1,
      },
      {
        question: 'Who tends to suffer most during high inflation?',
        options: ['People who own real estate', 'People whose income rises with inflation', 'People whose income stays fixed while prices rise', 'People with a lot of debt'],
        correct: 2,
      },
      {
        question: 'When did the US experience unusually high inflation of around 9%?',
        options: ['2008', '2015', '2020', '2022'],
        correct: 3,
      },
    ],
    // Level 5 — Expert View
    [
      {
        question: 'What is hyperinflation?',
        options: ['Inflation above 2%', 'Normal inflation over a long period', 'Extremely rapid price increases, sometimes thousands of percent', 'Inflation caused only by government spending'],
        correct: 2,
      },
      {
        question: 'What is a "wage-price spiral"?',
        options: ['When wages and prices both fall together', 'Workers demand higher wages due to high prices, which raises costs, which raises prices further', 'The government controls both wages and prices', 'Only high-wage workers are affected by inflation'],
        correct: 1,
      },
      {
        question: 'What distinguishes demand-pull from cost-push inflation?',
        options: ['Their duration', 'Their severity', 'Their source: demand-side vs. supply-side pressures', 'Whether the government is involved'],
        correct: 2,
      },
      {
        question: 'What happened in Zimbabwe around 2008?',
        options: ['Deflation wiped out savings', 'The economy grew by 89%', 'Hyperinflation hit astronomical levels, destroying the currency', 'Interest rates fell to zero'],
        correct: 2,
      },
      {
        question: 'What is the "real interest rate"?',
        options: ['The interest rate set by the government', 'The nominal interest rate minus inflation', 'The rate paid on savings accounts', 'The highest available interest rate'],
        correct: 1,
      },
    ],
  ],

  'interest-rate': [
    // Level 1
    [
      { question: 'What is an interest rate?', options: ['The cost of borrowing money', 'The amount you deposit in a bank', 'A fee for opening a bank account', 'How fast your salary grows'], correct: 0 },
      { question: 'If you borrow $100 at 10% interest, how much do you pay back?', options: ['$90', '$100', '$110', '$200'], correct: 2 },
      { question: 'What is the extra amount you pay back on a loan called?', options: ['Tax', 'Penalty', 'Interest', 'Premium'], correct: 2 },
      { question: 'When you put money in a savings account, the bank...', options: ['Charges you interest', 'Pays you interest', 'Keeps your money permanently', 'Invests it without telling you'], correct: 1 },
      { question: 'Interest rates are expressed as...', options: ['A fixed dollar amount', 'A percentage', 'A time period', 'A credit score'], correct: 1 },
    ],
    // Level 2
    [
      { question: 'APR stands for...', options: ['Annual Premium Rate', 'Annual Percentage Rate', 'Adjusted Payment Rate', 'Average Price Ratio'], correct: 1 },
      { question: 'You carry $1,000 on a 20% APR credit card for a full year. How much interest do you owe?', options: ['$20', '$100', '$200', '$2,000'], correct: 2 },
      { question: 'When you save money, the bank pays you interest because...', options: ['It\'s required by law', 'They are being generous', 'They are borrowing your money to lend to others', 'They want you to open more accounts'], correct: 2 },
      { question: 'Which of these typically has the highest interest rate?', options: ['A savings account', 'A credit card', 'A government bond', 'They are all the same'], correct: 1 },
      { question: 'On a 5% APR loan, how much extra do you pay per year on $1,000 borrowed?', options: ['$5', '$50', '$500', '$5,000'], correct: 1 },
    ],
    // Level 3
    [
      { question: 'What is the "federal funds rate"?', options: ['The rate the US charges on taxes', 'The rate banks charge consumers for mortgages', 'The rate at which banks borrow from each other overnight', 'The rate the Fed charges to print money'], correct: 2 },
      { question: 'When the Fed raises interest rates, what typically happens to mortgage rates?', options: ['They fall', 'They stay the same', 'They rise', 'They are not affected'], correct: 2 },
      { question: 'Why does the Fed raise interest rates when inflation is high?', options: ['To make people earn more on savings', 'To make borrowing expensive and slow down spending', 'To increase the money supply', 'To help banks make more money'], correct: 1 },
      { question: 'When rates went from 3% to 7% on a $400,000 home, monthly payments...', options: ['Barely changed', 'Roughly doubled', 'Fell', 'The loan term changed instead'], correct: 1 },
      { question: 'When the Fed lowers rates, what tends to happen?', options: ['People save more and borrow less', 'Inflation disappears automatically', 'Borrowing becomes cheaper and people tend to spend more', 'Banks stop making loans'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'What does "real interest rate" mean?', options: ['The rate advertised by banks', 'The nominal rate adjusted for inflation', 'The rate set by Congress', 'The rate after taxes'], correct: 1 },
      { question: 'If your savings earns 4% but inflation is 5%, your real interest rate is...', options: ['+9%', '+1%', '-1%', '0%'], correct: 2 },
      { question: 'Low interest rates for a long time can cause...', options: ['A recession', 'Deflation', 'Inflation, as more borrowing and spending heats up the economy', 'Unemployment to rise'], correct: 2 },
      { question: 'Who benefits most when interest rates rise?', options: ['People taking out new mortgages', 'People with credit card debt', 'People with money in savings accounts', 'People with variable rate loans'], correct: 2 },
      { question: 'What\'s the main risk of the Fed keeping rates too high for too long?', options: ['Inflation accelerates', 'The economy slows too much, potentially causing a recession', 'Banks stop making profits', 'The dollar becomes too strong'], correct: 1 },
    ],
    // Level 5
    [
      { question: 'What is an "inverted yield curve"?', options: ['When long-term rates exceed short-term rates', 'When short-term rates exceed long-term rates', 'When all rates are the same', 'When the Fed sets rates to zero'], correct: 1 },
      { question: 'Historically, an inverted yield curve has been associated with...', options: ['Stock market booms', 'Low inflation', 'An upcoming recession', 'Rising employment'], correct: 2 },
      { question: 'What happened to the US yield curve in 2022?', options: ['It normalized', 'It became inverted', 'It flattened completely', 'Short and long-term rates matched exactly'], correct: 1 },
      { question: 'What is "forward guidance" by the Fed?', options: ['The Fed telling banks how much to lend', 'The Fed communicating future policy intentions to influence market expectations', 'The Fed setting future tax rates', 'Banks guiding customers on rates'], correct: 1 },
      { question: 'What was the "Taper Tantrum" of 2013?', options: ['A crash caused by rising inflation', 'Markets panicking after the Fed merely hinted at reducing bond purchases', 'A banking crisis caused by high rates', 'A recession caused by the Fed cutting rates'], correct: 1 },
    ],
  ],

  gdp: [
    // Level 1
    [
      { question: 'What does GDP stand for?', options: ['General Domestic Prices', 'Gross Domestic Product', 'Government Deficit Policy', 'Global Debt Payment'], correct: 1 },
      { question: 'What is GDP?', options: ['The total money in a country\'s banks', 'How much the government spends each year', 'The total value of everything a country produces in a year', 'The average income of citizens'], correct: 2 },
      { question: 'GDP is like a country\'s...', options: ['Tax bill', 'Bank balance', 'Yearly economic report card', 'Monthly budget'], correct: 2 },
      { question: 'When GDP grows, it generally means...', options: ['The government is spending more', 'More goods and services are being produced', 'Prices are falling', 'The population is shrinking'], correct: 1 },
      { question: 'When GDP shrinks, it is a sign that...', options: ['The economy is expanding', 'Prices are going down', 'The economy is contracting', 'Taxes are being cut'], correct: 2 },
    ],
    // Level 2
    [
      { question: 'What counts toward GDP?', options: ['Only physical goods like cars', 'Only government spending', 'Both goods and services', 'Only exports to other countries'], correct: 2 },
      { question: 'What is officially called a recession?', options: ['When the stock market falls', 'When unemployment rises above 5%', 'When GDP shrinks for two consecutive quarters', 'When inflation exceeds 5%'], correct: 2 },
      { question: 'If US GDP grows 3%, it means...', options: ['Government spending grew 3%', 'The economy produced 3% more than last year', 'Average incomes grew 3%', 'The population grew 3%'], correct: 1 },
      { question: 'Two consecutive quarters equals...', options: ['Three months', 'Six months', 'One year', 'Two years'], correct: 1 },
      { question: 'Two consecutive quarters of shrinking GDP is called...', options: ['A depression', 'A slowdown', 'A recession', 'Stagflation'], correct: 2 },
    ],
    // Level 3
    [
      { question: 'Which is NOT one of the three ways GDP is measured?', options: ['The Expenditure Approach', 'The Income Approach', 'The Tax Approach', 'The Output Approach'], correct: 2 },
      { question: 'What does the Expenditure Approach add up?', options: ['All taxes collected', 'Consumer spending + business investment + government spending + net exports', 'All income earned in the country', 'All goods produced minus all services'], correct: 1 },
      { question: 'Why do economists use three methods to calculate GDP?', options: ['Each gives a different result', 'To confuse foreign governments', 'As a cross-check to verify accuracy', 'Each covers different industries'], correct: 2 },
      { question: '"Net exports" in the Expenditure Approach means...', options: ['Total exports only', 'Exports minus imports', 'Imports minus exports', 'Only goods exported to allied countries'], correct: 1 },
      { question: 'Which formula represents the Expenditure Approach?', options: ['GDP = Taxes + Government Spending', 'GDP = Income + Savings', 'GDP = Consumer Spending + Business Investment + Government Spending + Net Exports', 'GDP = Total Sales - Total Costs'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'What is "GDP per capita"?', options: ['GDP divided by the national debt', 'GDP divided by the population', 'GDP of the capital city', 'GDP measured per quarter'], correct: 1 },
      { question: 'What does GDP NOT measure?', options: ['Total production of goods', 'Total value of services', 'Equality of wealth distribution', 'Business investment'], correct: 2 },
      { question: 'A country can have high GDP but widespread poverty if...', options: ['Its population is too large', 'Wealth is very concentrated at the top', 'It exports too much', 'Its government spends too little'], correct: 1 },
      { question: 'Why is GDP per capita more useful for comparing living standards?', options: ['It ignores government spending', 'It accounts for population size, giving a better sense of average wealth', 'It measures inflation better', 'It includes happiness metrics'], correct: 1 },
      { question: 'A growing GDP typically correlates with...', options: ['Higher unemployment', 'Lower wages', 'More jobs and higher incomes', 'Reduced consumer spending'], correct: 2 },
    ],
    // Level 5
    [
      { question: 'What is "Nominal GDP"?', options: ['GDP adjusted for inflation', 'GDP measured using current prices', 'GDP per person', 'GDP of private companies only'], correct: 1 },
      { question: 'What is "Real GDP"?', options: ['GDP measured using today\'s prices', 'GDP adjusted for inflation to show true growth', 'GDP including the underground economy', 'GDP of real estate only'], correct: 1 },
      { question: 'What is the Human Development Index (HDI)?', options: ['A measure of GDP plus military strength', 'An alternative measure including education and life expectancy alongside income', 'The US government\'s GDP calculation method', 'A measure of only high-income countries'], correct: 1 },
      { question: 'Why do some economists criticize GDP as incomplete?', options: ['It overstates growth', 'It counts harmful activities and ignores environmental damage and unpaid work', 'It only counts government spending', 'It changes too frequently'], correct: 1 },
      { question: 'If a country cleans up an oil spill, what happens to GDP?', options: ['It falls — money is being "wasted"', 'It rises — cleanup spending is economic activity', 'It stays the same', 'It depends on who pays'], correct: 1 },
    ],
  ],

  stock: [
    // Level 1
    [
      { question: 'What is a stock?', options: ['A loan from a bank', 'A type of savings account', 'A small piece of ownership in a company', 'A government bond'], correct: 2 },
      { question: 'When a company sells stocks, what is it doing?', options: ['Borrowing money from the bank', 'Selling tiny pieces of ownership to raise money', 'Giving money away to investors', 'Paying back its debts'], correct: 1 },
      { question: 'If you buy a share and the company becomes more valuable, your share...', options: ['Loses value', 'Stays the same', 'Becomes worth more too', 'Converts to cash automatically'], correct: 2 },
      { question: 'If you own 1 of 100 shares, you own...', options: ['The whole company', '10% of the company', '1% of the company', 'Nothing until you buy more'], correct: 2 },
      { question: 'What is the main risk of owning a stock?', options: ['You have to work for the company', 'If the company loses value, your stock is worth less', 'You must hold it forever', 'You owe money if the stock falls'], correct: 1 },
    ],
    // Level 2
    [
      { question: 'Where are stocks bought and sold?', options: ['At banks only', 'On stock markets', 'At the Federal Reserve', 'Through the government only'], correct: 1 },
      { question: 'What happens to a stock\'s price when more people want to buy than sell?', options: ['It falls', 'It stays the same', 'It rises', 'The company prints more shares'], correct: 2 },
      { question: 'Why might a stock\'s price jump quickly?', options: ['Because the CEO got a raise', 'Because positive news comes out about the company', 'Because the weather is good', 'Because the market is closed'], correct: 1 },
      { question: 'What are two of the most famous US stock markets?', options: ['Dow and S&P', 'NYSE and Nasdaq', 'Wall Street and Main Street', 'Robinhood and Coinbase'], correct: 1 },
      { question: 'How do most people buy stocks today?', options: ['By walking onto a trading floor', 'Through apps and online brokers', 'By calling their local bank', 'By mailing a check to the company'], correct: 1 },
    ],
    // Level 3
    [
      { question: 'What is an IPO?', options: ['An interest payment option', 'Initial Public Offering — the first time a private company sells shares publicly', 'An investment protection order', 'An index performance overview'], correct: 1 },
      { question: 'After a company\'s IPO, where do shares trade?', options: ['Back to the company', 'Only between original investors', 'On the open market between investors', 'Only through the company\'s bank'], correct: 2 },
      { question: 'What primarily drives stock prices?', options: ['Weather and seasons', 'Random chance', 'Company earnings, growth expectations, and market sentiment', 'Government decisions only'], correct: 2 },
      { question: 'In Airbnb\'s 2020 IPO, what happened on the first day?', options: ['Shares fell significantly', 'Shares stayed at $68', 'Shares more than doubled from $68 to $144', 'The IPO was cancelled'], correct: 2 },
      { question: 'What does it mean to be a "shareholder"?', options: ['Someone who works at the company', 'Someone who lends money to a company', 'Someone who owns a share of a company', 'Someone who manages company finances'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'What has been the historical average annual return of the US stock market?', options: ['About 3%', 'About 10%', 'About 25%', 'About 50%'], correct: 1 },
      { question: 'At 10% annual growth, how long does it take money to roughly double?', options: ['3 years', '5 years', '7 years', '20 years'], correct: 2 },
      { question: 'Why do financial advisors recommend investing for the long term?', options: ['Short-term investing is illegal', 'Stocks always go up in the short term', 'Short-term drops are common but long-term returns are historically strong', 'Brokers charge less for long-term accounts'], correct: 2 },
      { question: 'What does an S&P 500 index fund do?', options: ['Invests in the 500 most popular stocks', 'Tracks the performance of 500 large US companies', 'Guarantees a 10% annual return', 'Only invests in tech companies'], correct: 1 },
      { question: '$10,000 in an S&P 500 index fund in 2000 would be approximately how much today?', options: ['$12,000', '$25,000', '$55,000', '$200,000'], correct: 2 },
    ],
    // Level 5
    [
      { question: 'What does P/E ratio stand for?', options: ['Profit and Earnings ratio', 'Price-to-Earnings ratio', 'Performance and Equity ratio', 'Public Equity ratio'], correct: 1 },
      { question: 'What does the Efficient Market Hypothesis suggest?', options: ['Stock prices are always wrong', 'Individual investors can easily beat the market', 'Stock prices already reflect all available information', 'Only institutions can profit from stocks'], correct: 2 },
      { question: 'What is "fundamental analysis"?', options: ['Analyzing a stock\'s price chart and patterns', 'Studying a company\'s financials and business to determine value', 'Looking at economic indicators to predict markets', 'Using algorithms to trade stocks'], correct: 1 },
      { question: 'What does research show about fund managers vs. index funds over 10 years?', options: ['Fund managers consistently beat index funds', 'They perform about the same', 'Most fund managers underperform simple index funds', 'Index funds are riskier'], correct: 2 },
      { question: 'What are dividends?', options: ['Fees paid to brokers', 'Regular cash payments companies make to shareholders', 'Bonuses paid to executives', 'Interest on a stock loan'], correct: 1 },
    ],
  ],

  budget: [
    // Level 1
    [
      { question: 'What is a budget?', options: ['A type of bank account', 'A plan for how you spend and save your money', 'A government spending report', 'A credit score calculator'], correct: 1 },
      { question: 'Without a budget, what do most people tend to do?', options: ['Save 20% automatically', 'Spend carefully and track everything', 'Spend as money comes in and wonder where it went', 'Never run out of money'], correct: 2 },
      { question: 'What does a budget allow you to do?', options: ['Earn more money', 'Decide ahead of time where your money goes', 'Avoid paying taxes', 'Get better interest rates'], correct: 1 },
      { question: 'What is the purpose of a budget?', options: ['To restrict all spending', 'To make you feel guilty about money', 'To give you control and awareness of your finances', 'To impress your bank'], correct: 2 },
      { question: 'A budget is most like...', options: ['A shopping list', 'A financial plan for your income and expenses', 'A loan agreement', 'A tax return'], correct: 1 },
    ],
    // Level 2
    [
      { question: 'In the 50/30/20 rule, what does the 50% cover?', options: ['Savings and investments', 'Wants like dining out', 'Needs like rent, groceries, and bills', 'Debt repayment only'], correct: 2 },
      { question: 'In the 50/30/20 rule, the 20% goes to...', options: ['Food', 'Entertainment', 'Savings and debt repayment', 'Housing'], correct: 2 },
      { question: 'If you earn $3,000/month and use 50/30/20, how much goes to savings?', options: ['$150', '$300', '$600', '$900'], correct: 2 },
      { question: 'Does budgeting mean you can\'t spend on things you enjoy?', options: ['Yes, all fun spending must be cut', 'No — it gives you permission to spend on wants after covering essentials', 'Yes, until you pay off all debt', 'Only if you earn under $50,000'], correct: 1 },
      { question: 'Saving $600/month for a year results in...', options: ['$600', '$3,600', '$7,200', '$72,000'], correct: 2 },
    ],
    // Level 3
    [
      { question: 'What are "fixed expenses"?', options: ['Expenses that change every month', 'Expenses that stay the same every month', 'Expenses that are optional', 'Expenses paid once a year'], correct: 1 },
      { question: 'What are "variable expenses"?', options: ['Expenses that never change', 'Expenses that are the same every month', 'Expenses that change month to month', 'Expenses paid by your employer'], correct: 2 },
      { question: 'What is "zero-based budgeting"?', options: ['A budget where you spend nothing', 'Every dollar of income is assigned a specific purpose', 'A budget for people with no income', 'A budget that resets every 5 years'], correct: 1 },
      { question: 'The goal of a budget is to make sure...', options: ['You spend as little as possible', 'Income minus expenses equals a positive number going to savings', 'You never have variable expenses', 'Fixed costs exceed income'], correct: 1 },
      { question: 'Which of these is a "fixed expense"?', options: ['Dining out', 'Streaming subscriptions you cancel', 'Monthly rent', 'Clothing purchases'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'What is "lifestyle creep"?', options: ['Moving to a more expensive city', 'When spending rises to match rising income, leaving nothing saved', 'Gradually cutting expenses over time', 'Becoming more frugal as you age'], correct: 1 },
      { question: 'What is an emergency fund?', options: ['Money set aside for vacations', 'A loan from your bank for emergencies', '3-6 months of expenses saved as a financial safety net', 'A government assistance program'], correct: 2 },
      { question: 'How much does the average American spend on coffee per year?', options: ['About $100', 'About $500', 'Over $1,100', 'Over $5,000'], correct: 2 },
      { question: 'Without an emergency fund, an unexpected expense often leads to...', options: ['Winning the lottery', 'Taking on debt', 'Getting a raise', 'Nothing — banks cover it automatically'], correct: 1 },
      { question: 'Someone who tracks small daily purchases often discovers...', options: ['They spend less than they thought', 'How quickly small costs add up to significant amounts', 'Their income is lower than expected', 'Their fixed costs are too high'], correct: 1 },
    ],
    // Level 5
    [
      { question: 'What is "present bias"?', options: ['Preferring future rewards over present ones', 'Overvaluing today\'s enjoyment relative to future savings', 'Spending more now than in the past', 'A bias against buying things on sale'], correct: 1 },
      { question: 'What does Richard Thaler\'s research show about automatic 401k enrollment?', options: ['It makes no difference', 'People save significantly more when enrolled automatically vs. opting in', 'People opt out immediately', 'It reduces investment returns'], correct: 1 },
      { question: 'Why does automating savings help?', options: ['Banks pay higher interest on automated transfers', 'It removes the psychological decision of whether to save', 'It\'s required by law', 'It prevents banks from charging fees'], correct: 1 },
      { question: 'What is "mental accounting"?', options: ['Using spreadsheets to track spending', 'Treating money differently based on where it came from or is going', 'Memorizing your budget instead of writing it down', 'A formal accounting method used by businesses'], correct: 1 },
      { question: 'What is "envelope budgeting"?', options: ['Mailing bills in envelopes', 'Physically separating cash by spending category to make limits tangible', 'Budgeting for large purchases like houses', 'A digital banking feature'], correct: 1 },
    ],
  ],

  recession: [
    // Level 1
    [
      { question: 'What is a recession?', options: ['When the stock market hits a new high', 'When the economy slows down significantly for a sustained period', 'When inflation reaches 0%', 'When interest rates are cut'], correct: 1 },
      { question: 'During a recession, which of these typically happens?', options: ['Businesses make more money', 'Job losses increase', 'Everyone gets richer', 'Prices fall dramatically'], correct: 1 },
      { question: 'A recession is the opposite of...', options: ['Inflation', 'A stock market crash', 'Economic growth and expansion', 'High unemployment'], correct: 2 },
      { question: 'Which is a visible sign of a recession in your community?', options: ['New restaurants opening everywhere', 'More "For Lease" signs on storefronts', 'Rising house prices', 'Stock market highs'], correct: 1 },
      { question: 'Are recessions permanent?', options: ['Yes, economies never recover', 'Usually yes', 'No, they are a normal part of the economic cycle', 'Only if the government allows them'], correct: 2 },
    ],
    // Level 2
    [
      { question: 'What is the technical definition of a recession?', options: ['The stock market falling for 6 months', 'Two consecutive quarters of GDP shrinking', 'Unemployment rising above 8%', 'The government running a deficit'], correct: 1 },
      { question: 'How long is two consecutive quarters?', options: ['Three months', 'Six months', 'One year', 'Two years'], correct: 1 },
      { question: 'Besides GDP, what else do economists look at to identify a recession?', options: ['Only stock prices', 'Job losses, consumer spending, and business activity', 'Only government spending', 'Weather patterns'], correct: 1 },
      { question: 'In what year did US unemployment spike to 10% during a major recession?', options: ['2001', '2008', '2015', '2020'], correct: 1 },
      { question: 'Recessions are described as...', options: ['Unexpected disasters', 'A normal part of the economic cycle', 'Always caused by government mismanagement', 'Unique to the United States'], correct: 1 },
    ],
    // Level 3
    [
      { question: 'What often triggers a recession?', options: ['Tax cuts', 'A financial crisis, pandemic, oil shock, or market crash', 'Population growth', 'Rising exports'], correct: 1 },
      { question: 'What is a "negative feedback loop" in a recession?', options: ['When prices fall and businesses expand', 'When job losses lead to less spending, which leads to more job losses', 'When the government increases spending to boost the economy', 'When interest rates fall during a downturn'], correct: 1 },
      { question: 'What happened to banks during the 2008 recession?', options: ['They became more willing to lend', 'They remained unchanged', 'They tightened lending, making it harder for businesses to borrow', 'They cut interest rates independently'], correct: 2 },
      { question: 'In 2008, what started the chain reaction that caused the recession?', options: ['A government spending cut', 'Rising oil prices', 'Falling home prices triggering bank losses', 'A trade war'], correct: 2 },
      { question: 'During a recession, what typically happens to business investment?', options: ['It increases as businesses see opportunities', 'It stays flat', 'It decreases as businesses become cautious', 'It moves to other countries'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'During recessions, which workers tend to see the most job losses?', options: ['White-collar professionals', 'Government workers', 'Lower-income workers in hospitality, retail, and manufacturing', 'Technology workers'], correct: 2 },
      { question: 'How do governments typically respond to recessions?', options: ['By cutting all spending immediately', 'By raising taxes to balance the budget', 'By increasing spending or cutting taxes to stimulate the economy', 'By raising interest rates'], correct: 2 },
      { question: 'What did the US government do during the 2020 COVID recession?', options: ['Cut spending and raised taxes', 'Raised interest rates significantly', 'Sent stimulus checks and expanded unemployment benefits', 'Closed all banks temporarily'], correct: 2 },
      { question: 'Recessions can create opportunities for...', options: ['People with significant debt', 'People with savings who can buy assets at lower prices', 'Businesses looking to expand rapidly', 'Banks looking to increase lending'], correct: 1 },
      { question: 'Someone who keeps their job during a recession might benefit from...', options: ['Higher inflation eating their savings', 'Lower asset prices making investments more affordable', 'Higher interest rates on their debt', 'Reduced consumer choice'], correct: 1 },
    ],
    // Level 5
    [
      { question: 'What is a "V-shaped" recession?', options: ['A long, deep downturn with little recovery', 'A sharp decline followed by a fast recovery', 'Two periods of decline separated by a brief recovery', 'A mild, prolonged economic slowdown'], correct: 1 },
      { question: 'What is a "W-shaped" recession?', options: ['A recession with no recovery', 'A sharp decline followed by a fast recovery', 'Two declines separated by a brief recovery (double-dip)', 'A recession lasting more than 5 years'], correct: 2 },
      { question: 'Who officially determines when a US recession began and ended?', options: ['The Federal Reserve', 'The President', 'The National Bureau of Economic Research (NBER)', 'Congress'], correct: 2 },
      { question: 'What was notable about the 2020 COVID recession?', options: ['It lasted 5 years', 'It was the deepest but shortest US recession on record', 'GDP only fell slightly', 'It was classified as a depression'], correct: 1 },
      { question: 'What are "leading indicators" of a recession?', options: ['Data that shows a recession after it has ended', 'Economic signals used to predict a recession before it officially begins', 'The official GDP measurement', 'Job reports from the past month'], correct: 1 },
    ],
  ],

  'federal-reserve': [
    // Level 1
    [
      { question: 'What is the Federal Reserve?', options: ['The US government\'s savings account', 'The central bank of the United States', 'A type of federal tax', 'The stock exchange'], correct: 1 },
      { question: 'The Federal Reserve is sometimes called...', options: ['The Treasury', 'The Mint', 'The Fed', 'The Bureau'], correct: 2 },
      { question: 'What is one of the Fed\'s main jobs?', options: ['Printing physical currency', 'Setting income tax rates', 'Keeping inflation low', 'Managing the national debt'], correct: 2 },
      { question: 'If the economy has rising prices, the Fed typically...', options: ['Does nothing', 'Lowers interest rates', 'Raises interest rates to cool things down', 'Prints more money'], correct: 2 },
      { question: 'The Federal Reserve is best described as...', options: ['The US government\'s tax collector', 'A private investment bank', 'The bank for all banks', 'An international financial institution'], correct: 2 },
    ],
    // Level 2
    [
      { question: 'What are the Fed\'s two main goals (its "dual mandate")?', options: ['Grow the economy and reduce national debt', 'Keep inflation low AND keep employment high', 'Control stock prices and set tax policy', 'Maximize revenue and minimize spending'], correct: 1 },
      { question: 'What is the Fed\'s most powerful tool?', options: ['Printing physical currency', 'Setting the federal funds rate', 'Controlling tax rates', 'Regulating the stock market'], correct: 1 },
      { question: 'What is the Fed\'s inflation target?', options: ['0% — no inflation', 'Around 2% per year', 'Around 5% per year', 'Whatever the market sets'], correct: 1 },
      { question: 'When the Fed raises the federal funds rate, mortgages...', options: ['Get cheaper', 'Stay the same', 'Get more expensive', 'Stop being offered'], correct: 2 },
      { question: 'When the Fed raises rates, people and businesses borrow...', options: ['More', 'The same amount', 'Less', 'Only from foreign banks'], correct: 2 },
    ],
    // Level 3
    [
      { question: 'How many regional Federal Reserve Banks are there?', options: ['5', '12', '50', '100'], correct: 1 },
      { question: 'How often does the FOMC meet to decide on interest rate policy?', options: ['Every month', '8 times a year', 'Once a year', 'Whenever there is a crisis'], correct: 1 },
      { question: 'What are "open market operations"?', options: ['The Fed opening new bank branches', 'The Fed buying or selling government bonds to control the money supply', 'Banks competing for customers', 'The government selling stocks to raise funds'], correct: 1 },
      { question: 'What is "quantitative easing"?', options: ['The Fed raising rates quickly', 'The Fed buying bonds to inject money into the economy', 'The government cutting taxes', 'Banks lowering lending standards'], correct: 1 },
      { question: 'When the Fed buys bonds, what happens to the money supply?', options: ['It decreases', 'It stays the same', 'It increases', 'Only the bond market is affected'], correct: 2 },
    ],
    // Level 4
    [
      { question: 'What did the Fed do immediately after COVID-19 shutdowns in March 2020?', options: ['Raised rates to fight anticipated inflation', 'Cut rates to near zero and launched bond-buying programs', 'Did nothing and waited', 'Raised taxes to fund stimulus'], correct: 1 },
      { question: 'After the Fed\'s March 2020 actions, US stock markets...', options: ['Continued to fall for 2 more years', 'Recovered fully within months', 'Stayed flat for the rest of 2020', 'Were closed by the government'], correct: 1 },
      { question: 'What does the Fed do as "lender of last resort"?', options: ['Lends to consumers who can\'t get bank loans', 'Steps in to prevent bank collapses during crises', 'Provides the lowest mortgage rates', 'Funds the national debt'], correct: 1 },
      { question: 'How does the Fed directly affect your personal finances?', options: ['Only through tax rates', 'It doesn\'t', 'Through interest rates on mortgages, car loans, credit cards, and savings', 'Only through stock prices'], correct: 2 },
      { question: 'When low rates contributed to rising prices, the Fed responded by...', options: ['Keeping rates low to support the economy', 'Cutting rates further', 'Raising rates aggressively to combat inflation', 'Doing nothing until Congress ordered action'], correct: 2 },
    ],
    // Level 5
    [
      { question: 'Why does the Fed operate independently from the government?', options: ['It was founded before the government', 'To prevent short-term political motives from overriding long-term economic stability', 'Because the President chose to give it independence', 'To allow it to raise taxes without approval'], correct: 1 },
      { question: 'What is "forward guidance"?', options: ['The Fed\'s annual budget forecast', 'The Fed communicating future policy intentions to influence market expectations', 'A monthly inflation prediction', 'The Fed\'s guidance for bank lending standards'], correct: 1 },
      { question: 'What was the "Taper Tantrum" of 2013?', options: ['A crash caused by Fed rate hikes', 'Bond markets panicking after the Fed merely hinted at reducing bond purchases', 'A banking crisis from high rates', 'Investors panicking over tax increases'], correct: 1 },
      { question: 'Why is forward guidance now almost as important as actual policy?', options: ['Because markets are irrational', 'Because markets move based on expectations of Fed behavior, not just current policy', 'Because the Fed rarely changes actual rates', 'Because Congress requires the Fed to forecast'], correct: 1 },
      { question: 'The Fed\'s independence means the President...', options: ['Has no influence over the Fed at all', 'Can fire the Fed Chair at will', 'Cannot directly order the Fed to change interest rates', 'Must approve all FOMC decisions'], correct: 2 },
    ],
  ],
}

export default quizzes
