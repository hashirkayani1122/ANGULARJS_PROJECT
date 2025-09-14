angular.module('cryptoDashboard')
.factory('CryptoData', [function() {
    return {
        getChartData: function() {
            return [
                {
                    label: 'Bitcoin',
                    data: [42000, 43500, 42800, 44200, 45500, 44800, 46200, 47500, 46800, 48000, 49200, 48500, 49800, 51000, 50500],
                    borderColor: 'rgba(247, 147, 26, 1)',
                    backgroundColor: 'rgba(247, 147, 26, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Ethereum',
                    data: [3200, 3350, 3280, 3420, 3550, 3480, 3620, 3750, 3680, 3800, 3920, 3850, 3980, 4100, 4050],
                    borderColor: 'rgba(114, 137, 218, 1)',
                    backgroundColor: 'rgba(114, 137, 218, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Solana',
                    data: [95, 102, 98, 105, 112, 108, 115, 122, 118, 125, 132, 128, 135, 142, 138],
                    borderColor: 'rgba(0, 255, 189, 1)',
                    backgroundColor: 'rgba(0, 255, 189, 0.1)',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }
            ];
        },
        
        getChartLabels: function() {
            const labels = [];
            for (let i = 1; i <= 15; i++) {
                labels.push(`Day ${i}`);
            }
            return labels;
        },
        
        getPieData: function() {
            return [905, 405, 75, 68, 48, 42, 38, 35];
        },
        
        getPieLabels: function() {
            return ['Bitcoin', 'Ethereum', 'BNB', 'XRP', 'Cardano', 'Solana', 'Polkadot', 'Dogecoin'];
        },
        
        getHistogramData: function() {
            return [{
                label: 'Bitcoin',
                data: [5, 10, 15, 20, 25, 30, 25, 20, 15, 10],
                backgroundColor: 'rgba(247, 147, 26, 0.8)',
                borderColor: 'rgba(247, 147, 26, 1)',
                borderWidth: 1
            }, {
                label: 'Ethereum',
                data: [8, 12, 18, 22, 28, 32, 28, 22, 18, 12],
                backgroundColor: 'rgba(114, 137, 218, 0.8)',
                borderColor: 'rgba(114, 137, 218, 1)',
                borderWidth: 1
            }, {
                label: 'Altcoins',
                data: [12, 18, 24, 30, 36, 42, 36, 30, 24, 18],
                backgroundColor: 'rgba(0, 255, 189, 0.8)',
                borderColor: 'rgba(0, 255, 189, 1)',
                borderWidth: 1
            }];
        },
        
        getHistogramLabels: function() {
            return ['<$1K', '$1K-$5K', '$5K-$10K', '$10K-$20K', '$20K-$30K', '$30K-$50K', '$50K-$75K', '$75K-$100K', '$100K-$200K', '>$200K'];
        },
        
        getTableData: function() {
            return [
                {
                    name: 'Bitcoin',
                    symbol: 'BTC',
                    price: 48000,
                    marketCap: 905000000000,
                    volume: 38500000000,
                    change: 2.5,
                    supply: 18926368
                },
                {
                    name: 'Ethereum',
                    symbol: 'ETH',
                    price: 3800,
                    marketCap: 405000000000,
                    volume: 18500000000,
                    change: 4.2,
                    supply: 118639640
                },
                {
                    name: 'BNB',
                    symbol: 'BNB',
                    price: 520,
                    marketCap: 75000000000,
                    volume: 2500000000,
                    change: 1.8,
                    supply: 153432110
                },
                {
                    name: 'XRP',
                    symbol: 'XRP',
                    price: 1.25,
                    marketCap: 68000000000,
                    volume: 3500000000,
                    change: 5.7,
                    supply: 45404028640
                },
                {
                    name: 'Cardano',
                    symbol: 'ADA',
                    price: 1.5,
                    marketCap: 48000000000,
                    volume: 2500000000,
                    change: 1.8,
                    supply: 32000000000
                },
                {
                    name: 'Solana',
                    symbol: 'SOL',
                    price: 150,
                    marketCap: 48000000000,
                    volume: 3500000000,
                    change: 5.7,
                    supply: 318580170
                },
                {
                    name: 'Polkadot',
                    symbol: 'DOT',
                    price: 31,
                    marketCap: 28000000000,
                    volume: 1500000000,
                    change: 3.2,
                    supply: 987579315
                },
                {
                    name: 'Dogecoin',
                    symbol: 'DOGE',
                    price: 0.24,
                    marketCap: 22000000000,
                    volume: 1800000000,
                    change: -1.5,
                    supply: 12954856464
                }
            ];
        },
        
        getCurrencies: function() {
            return ['All', 'Bitcoin', 'Ethereum', 'BNB', 'XRP', 'Cardano', 'Solana', 'Polkadot', 'Dogecoin'];
        },
        
        getStats: function() {
            return [
                {
                    title: 'Total Market Cap',
                    value: '2.15T',
                    change: 2.8,
                    icon: 'fa-chart-line'
                },
                {
                    title: '24h Market Volume',
                    value: '125.43B',
                    change: 5.3,
                    icon: 'fa-exchange-alt'
                },
                {
                    title: 'Bitcoin Dominance',
                    value: '52.8%',
                    change: -0.4,
                    icon: 'fa-percentage'
                },
                {
                    title: 'Active Cryptocurrencies',
                    value: '12,583',
                    change: 1.2,
                    icon: 'fa-coins'
                }
            ];
        }
    };
}]);