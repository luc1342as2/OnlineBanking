document.addEventListener('DOMContentLoaded', () => {
  const newsList = document.getElementById('news-list');

  // Updated news data with reliable links
  const newsArticles = [
    {
      title: "Stock Market Today: Latest Updates",
      url: "https://www.cnbc.com/stocks/" 
    },
    {
      title: "Top 10 ETFs to Invest in 2024",
      url: "https://www.forbes.com/advisor/investing/best-etfs/" 
    },
    {
      title: "What You Need to Know About Mutual Funds",
      url: "https://www.investopedia.com/terms/m/mutualfund.asp" 
    },
    {
      title: "Crypto Trends: What’s Hot in 2024?",
      url: "https://www.coindesk.com/markets/" 
    },
    {
      title: "Investment Tips for Beginners",
      url: "https://www.nerdwallet.com/article/investing/how-to-start-investing" 
    }
  ];

  // Dynamically populate the news list
  newsArticles.forEach(article => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = article.url;
    link.textContent = article.title;
    link.target = "_blank";
    listItem.appendChild(link);
    newsList.appendChild(listItem);
  });
  
  // Investment Interest Calculator
  const calculateButton = document.getElementById('calculate-button');
  const resultDisplay = document.getElementById('result');

  calculateButton.addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseInt(document.getElementById('time').value);

    // Validate input values
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      resultDisplay.textContent = "Please fill in all fields with valid values.";
      resultDisplay.style.color = "red";
      return;
    }

    // Calculate interest
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;

    resultDisplay.textContent = `The total interest is $${interest.toFixed(2)}, and the total amount after ${time} years is $${totalAmount.toFixed(2)}.`;
    resultDisplay.style.color = "green";
  });
});
