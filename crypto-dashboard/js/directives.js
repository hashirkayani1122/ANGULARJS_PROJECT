angular.module('cryptoDashboard')
.directive('cryptoCard', function() {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            value: '@',
            change: '@',
            icon: '@'
        },
        template: `
            <div class="card">
                <div class="card-icon">
                    <i class="fas {{icon}}"></i>
                </div>
                <div class="card-content">
                    <h3>{{title}}</h3>
                    <h2>{{value}}</h2>
                    <p ng-class="{positive: change >= 0, negative: change < 0}">
                        <i class="fas" ng-class="change >= 0 ? 'fa-arrow-up' : 'fa-arrow-down'"></i>
                        {{change}}%
                    </p>
                </div>
            </div>
        `
    };
})
.directive('lineChart', function() {
    return {
        restrict: 'E',
        template: '<canvas class="chart-container"></canvas>',
        scope: {
            data: '=',
            labels: '=',
            options: '='
        },
        link: function(scope, element) {
            var ctx = element.find('canvas')[0].getContext('2d');
            
            // Create gradient for each dataset
            scope.data.forEach(dataset => {
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, dataset.backgroundColor.replace('0.1', '0.3'));
                gradient.addColorStop(1, dataset.backgroundColor.replace('0.1', '0.05'));
                dataset.backgroundColor = gradient;
            });
            
            var chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: scope.labels,
                    datasets: scope.data
                },
                options: scope.options || {}
            });
            
            scope.$watch('data', function(newData) {
                if (chart && newData) {
                    chart.data.datasets = newData;
                    chart.update();
                }
            }, true);
            
            scope.$watch('labels', function(newLabels) {
                if (chart && newLabels) {
                    chart.data.labels = newLabels;
                    chart.update();
                }
            }, true);
        }
    };
})
.directive('barChart', function() {
    return {
        restrict: 'E',
        template: '<canvas class="chart-container"></canvas>',
        scope: {
            data: '=',
            labels: '=',
            options: '='
        },
        link: function(scope, element) {
            var ctx = element.find('canvas')[0].getContext('2d');
            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: scope.labels,
                    datasets: scope.data
                },
                options: scope.options || {}
            });
            
            scope.$watch('data', function(newData) {
                if (chart && newData) {
                    chart.data.datasets = newData;
                    chart.update();
                }
            }, true);
            
            scope.$watch('labels', function(newLabels) {
                if (chart && newLabels) {
                    chart.data.labels = newLabels;
                    chart.update();
                }
            }, true);
        }
    };
})
.directive('pieChart', function() {
    return {
        restrict: 'E',
        template: '<canvas class="chart-container"></canvas>',
        scope: {
            data: '=',
            labels: '=',
            options: '='
        },
        link: function(scope, element) {
            var ctx = element.find('canvas')[0].getContext('2d');
            
            const backgroundColors = [
                'rgba(247, 147, 26, 0.8)',  
                'rgba(114, 137, 218, 0.8)', 
                'rgba(243, 186, 47, 0.8)',  
                'rgba(35, 41, 47, 0.8)',    
                'rgba(0, 51, 173, 0.8)',    
                'rgba(0, 255, 189, 0.8)',   
                'rgba(230, 0, 122, 0.8)',   
                'rgba(194, 166, 51, 0.8)',  
                'rgba(191, 187, 187, 0.8)',
                'rgba(42, 90, 218, 0.8)'    
            ];
            
            const borderColors = backgroundColors.map(color => color.replace('0.8', '1'));
            
            var chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: scope.labels,
                    datasets: [{
                        data: scope.data,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1
                    }]
                },
                options: scope.options || {}
            });
            
            scope.$watch('data', function(newData) {
                if (chart && newData) {
                    chart.data.datasets[0].data = newData;
                    chart.update();
                }
            }, true);
        }
    };
});