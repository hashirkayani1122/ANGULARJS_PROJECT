angular.module('cryptoDashboard')
.controller('MainController', ['$scope', '$location', '$interval', function($scope, $location, $interval) {
    $scope.isActive = function(route) {
        return $location.path() === route;
    };
}])
.controller('DashboardController', ['$scope', 'CryptoData', '$location', function($scope, CryptoData, $location) {
    $scope.$location = $location;
    
    $scope.chartData = CryptoData.getChartData();
    $scope.chartLabels = CryptoData.getChartLabels();
    $scope.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Inter',
                        size: 12
                    },
                    color: '#475569'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                titleFont: {
                    family: 'Inter',
                    size: 14
                },
                bodyFont: {
                    family: 'Inter',
                    size: 13
                },
                padding: 12,
                cornerRadius: 6,
                displayColors: true
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    font: {
                        family: 'Inter',
                        size: 11
                    },
                    color: '#64748b'
                }
            },
            x: {
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    font: {
                        family: 'Inter',
                        size: 11
                    },
                    color: '#64748b'
                }
            }
        },
        elements: {
            line: {
                tension: 0.3
            },
            point: {
                radius: 3,
                hoverRadius: 6
            }
        }
    };
    
    $scope.histogramData = CryptoData.getHistogramData();
    $scope.histogramLabels = CryptoData.getHistogramLabels();
    $scope.histogramOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        family: 'Inter',
                        size: 12
                    },
                    color: '#475569'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                titleFont: {
                    family: 'Inter',
                    size: 14
                },
                bodyFont: {
                    family: 'Inter',
                    size: 13
                },
                padding: 12,
                cornerRadius: 6
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    font: {
                        family: 'Inter',
                        size: 11
                    },
                    color: '#64748b'
                }
            },
            x: {
                grid: {
                    color: 'rgba(226, 232, 240, 0.5)'
                },
                ticks: {
                    font: {
                        family: 'Inter',
                        size: 11
                    },
                    color: '#64748b'
                }
            }
        }
    };
    
    $scope.pieData = CryptoData.getPieData();
    $scope.pieLabels = CryptoData.getPieLabels();
    $scope.pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    font: {
                        family: 'Inter',
                        size: 12
                    },
                    color: '#475569',
                    padding: 20
                }
            },
            tooltip: {
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                titleFont: {
                    family: 'Inter',
                    size: 14
                },
                bodyFont: {
                    family: 'Inter',
                    size: 13
                },
                padding: 12,
                cornerRadius: 6,
                callbacks: {
                    label: function(context) {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${label}: $${value}B (${percentage}%)`;
                    }
                }
            }
        }
    };
    
    // Stats cards data
    $scope.stats = CryptoData.getStats();
}])
.controller('DataTableController', ['$scope', 'CryptoData', '$location', '$filter', function($scope, CryptoData, $location, $filter) {
    $scope.$location = $location;
    
    $scope.tableData = CryptoData.getTableData();
    $scope.currencies = CryptoData.getCurrencies();
    $scope.selectedCurrency = 'All';
    $scope.searchQuery = '';
    
    $scope.filterData = function() {
        let filteredData = $scope.tableData;
        
        // Filter by selected currency
        if ($scope.selectedCurrency !== 'All') {
            filteredData = filteredData.filter(function(item) {
                return item.name === $scope.selectedCurrency;
            });
        }
        
        // Filter by search query
        if ($scope.searchQuery) {
            const query = $scope.searchQuery.toLowerCase();
            filteredData = filteredData.filter(function(item) {
                return item.name.toLowerCase().includes(query) || 
                       item.symbol.toLowerCase().includes(query);
            });
        }
        
        return filteredData;
    };
    
    $scope.formatMarketCap = function(value) {
        if (value >= 1000000000000) {
            return '$' + (value / 1000000000000).toFixed(2) + 'T';
        } else if (value >= 1000000000) {
            return '$' + (value / 1000000000).toFixed(2) + 'B';
        } else if (value >= 1000000) {
            return '$' + (value / 1000000).toFixed(2) + 'M';
        } else {
            return '$' + value.toFixed(2);
        }
    };
}]);