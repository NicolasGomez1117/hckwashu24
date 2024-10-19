import yfinance as yf
import matplotlib.pyplot as plt

# Download stock data for AAPL from 2020-01-01 to 2023-01-01
data = yf.download('AAPL', start='2020-01-01', end='2023-01-01')

# Create a plot for the adjusted closing price
plt.figure(figsize=(10,6))
plt.plot(data.index, data['Adj Close'], label='AAPL Adjusted Close Price')
plt.title('AAPL Stock Price (2020-2023)')
plt.xlabel('Date')
plt.ylabel('Adjusted Close Price (USD)')
plt.legend()
plt.grid(True)

# Display the plot
plt.show()