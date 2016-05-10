/**
 * Created by Maithili on 5/10/2016.
 */
//bubblechart
var json1 = {
    "name": "flare",
    "children": [
        {
            "name": "analytics",
            "children": [
                {
                    "name": "heartdisease",
                    "children": [
                        {"name": "Rheumatic heart disease", "size": 5},
                        {"name": "Hypertensive heart disease", "size": 3},
                        {"name": "Heart attack", "size": 7},
                        {"name": "Congenital heart disease", "size": 2}
                    ]
                },
                {
                    "name": "Diabetics",
                    "children": [
                        {"name": "Type 1 diabetes", "size": 10},
                        {"name": "Type 2 diabetes", "size": 20},
                        {"name":"Gestational diabetes","size":7},
                        {"name":"Kidney Disease","size":7},
                        {"name":"HHS","size":2}
                    ]
                },
                {
                    "name": "Arthritis",
                    "children": [
                        {"name": "Arthritis", "size": 15},
                        {"name": "Osteoarthritis", "size": 8},
                        {"name":"Child   Arthritis","size":4}
                    ]
                },
                {
                    "name": "Asthma",
                    "children": [
                        {"name": "Asthma", "size": 3}
                    ]
                },
                {
                    "name": "Cancer",
                    "children": [
                        {"name": "Cervical cancer", "size": 8},
                        {"name": "Liver cancer", "size": 3},
                        {"name":"Prostate cancer","size":2},
                        {"name": "Skin cancer", "size": 1},
                        {"name":"Breast cancer","size":7}

                    ]
                },
                {
                    "name": "Influenza",
                    "children": [
                        {"name": "Seasonal Influenza", "size": 3},
                        {"name": "Swine Influenza ", "size": 6},
                        {"name":"Pandemic Influenza","size":5}
                    ]
                },
                {
                    "name": "Water diseases",
                    "children": [
                        {"name": "Typhoid Fever", "size": 8},
                        {"name": "Pontiac Fever", "size": 3},
                        {"name":"Diarrhea ","size":5},
                        {"name": "Leptospirosis", "size": 1},
                        {"name": "Malaria", "size": 6},
                        {"name": "Hepatitis A ", "size": 6}

                    ]
                },
                {
                    "name": "Viral Hepatitis",
                    "children": [
                        {"name": "Hepatitis A", "size": 6},
                        {"name": "Hepatitis B", "size": 3},
                        {"name":"Hep C ","size":1},
                        {"name": "Hep D", "size": 1},
                        {"name": "Hep E", "size": 4}

                    ]
                }

            ]
        }
    ]
};


    //donutchart
    $(function () {
        $('#donutchart').highcharts({
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Total patients and their diagnosis'
            },
            subtitle: {
                text: ''
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Number of patients',
                data: [
                    ['Heartdisease', 17],
                    ['Diabetics', 45],
                    ['Arthritis', 20],
                    ['Asthma', 3],
                    ['Cancer', 21],
                    ['Influenza', 14],
                    ['Water diseases', 29],
                    ['Viral Hepatitis', 15]
                ]
            }]
        });
    });

$(function () {
    /**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
    Highcharts.SparkLine = function (a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'area',
                    margin: [2, 0, 2, 0],
                    width: 120,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function (w, h, point) {
                        return {x: point.plotX - w / 2, y: point.plotY - h};
                    }
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;

        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', </span><br/>',
                    pointFormat: '<b>{point.y}</b> '
                },
                chart: chart
            });

            n += 1;

            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                $tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }

            // Print a feedback on the performance
            if (n === fullLen) {
                $('#sparklinechart').html();
            }
        }
    }
    doChunk();
});

//half donut chart
$(function () {
    $('#halfdonut').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Readmissions',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white',
                        textShadow: '0px 1px 2px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Readmission',
            innerSize: '50%',
            data: [
                ['Weekday',   412],
                ['Weekend',       253],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
});

// bar chart for top 10 diagnosis and gender

$(function () {
    $('#barchart_gender').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Readmission Diagnosis and Gender'
        },

        xAxis: {
            categories: [
                'Cancer',
                'Renal Failure',
                'Obesity and diabetes',
                'Heart Diease',
                'Diabetes w/ chronic complications',
                'Diabetes w/o chronic complications',
                'Lymphoma',
                'Arthritis',
                'Water diseases',
                'Osteoarthritis'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'No. of patients'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Male',
            data: [65, 35,32,33,29,37,26,24,22,19]

        }, {
            name: 'Female',
            data: [43,53,35,31,25,15,20,24,12,13]

        }]
    });
});

// Admission and readmission gauge

$(function () {

    var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

    // The admissions gauge
    $('#container-adm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 4000,
            title: {
                text: 'Admissions'
            }
        },

        credits: {
            enabled: false
        },

        series: [{
            name: 'Admissions',
            data: [2301],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"></span></div>'
            },
            tooltip: {
                valueSuffix: ' admissions'
            }
        }]

    }));

    // The readmissions gauge
    $('#container-readm').highcharts(Highcharts.merge(gaugeOptions, {
        yAxis: {
            min: 0,
            max: 1500,
            title: {
                text: 'Readmissions'
            }
        },

        series: [{
            name: 'Readmissions',
            data: [312],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver"></span></div>'
            },
            tooltip: {
                valueSuffix: ' no. of admits'
            }
        }]

    }));


});



function displayReadmission() {
    document.getElementById('containerB').style.display = 'none';
    document.getElementById('containerC').style.display = 'none';
    document.getElementById('containerA').style.display = 'block';
}

function displayOverallPatientDiag(){
    document.getElementById('containerA').style.display = 'none';
    document.getElementById('containerC').style.display = 'none';
    document.getElementById('containerB').style.display = 'block';
}

function  displayDocPatientHier(){
    document.getElementById('containerA').style.display = 'none';
    document.getElementById('containerB').style.display = 'none';
    document.getElementById('containerC').style.display = 'block';
}