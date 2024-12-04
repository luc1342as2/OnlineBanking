document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');
  
    // Updated news data with reliable links
    const newsArticles = [
      {
        title: "Stock Market Today: Latest Updates",
        url: "https://www.cnbc.com/stocks/" // Stock market updates from CNBC
      },
      {
        title: "Top 10 ETFs to Invest in 2024",
        url: "https://www.forbes.com/advisor/investing/best-etfs/" // Forbes article on best ETFs
      },
      {
        title: "What You Need to Know About Mutual Funds",
        url: "https://www.investopedia.com/terms/m/mutualfund.asp" // Investopedia's guide to mutual funds
      },
      {
        title: "Crypto Trends: What’s Hot in 2024?",
        url: "https://www.coindesk.com/markets/" // Coindesk's crypto market trends
      },
      {
        title: "Investment Tips for Beginners",
        url: "https://www.nerdwallet.com/article/investing/how-to-start-investing" // NerdWallet's beginner tips
      }
    ];
  
    // Dynamically populate the news list
    newsArticles.forEach(article => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = article.url;
      link.textContent = article.title;
      link.target = "_blank"; // Open in a new tab
      listItem.appendChild(link);
      newsList.appendChild(listItem);
    });
  });