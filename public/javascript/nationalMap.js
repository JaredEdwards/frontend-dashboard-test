$(function () {

    // Initiate the chart
    $('#mapContainer').highcharts('Map', {

        title : {
            text : 'Choose a state to learn more'
        },

        subtitle : {
            text : ''
        },

        mapNavigation: {
            enabled: false,
        },
        
        tooltip: {
            enabled: false
        },

        colorAxis: {
                min: 0,
                minColor: "#ffffff",
                maxColor: "#ffffff",
                labels: {
                    format: "{value:.0f}%",
                    style: {
                        fontSize: "13px"
                    }
                }
            },
				credits: { enabled: false },
        exporting: { enabled: false },
        series : [{
            data : [],
            mapData: Highcharts.maps['countries/us/us-all'],
            joinBy: 'hc-key',
            name: '',
            states: { },
            dataLabels: { enabled: false }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
});
