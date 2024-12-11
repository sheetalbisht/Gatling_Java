var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2022",
        "ok": "2022",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "percentiles1": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "percentiles2": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1692",
        "ok": "1692",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2022",
        "ok": "2022",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
    "percentage": 60.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 16,
    "percentage": 32.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 8.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.14",
        "ok": "7.14",
        "ko": "-"
    }
},
contents: {
"req_country-search--982383244": {
        type: "REQUEST",
        name: "Country Search API",
path: "Country Search API",
pathFormatted: "req_country-search--982383244",
stats: {
    "name": "Country Search API",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2022",
        "ok": "2022",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "341",
        "ok": "341",
        "ko": "-"
    },
    "percentiles1": {
        "total": "637",
        "ok": "637",
        "ko": "-"
    },
    "percentiles2": {
        "total": "972",
        "ok": "972",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1692",
        "ok": "1692",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2022",
        "ok": "2022",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
    "percentage": 60.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 16,
    "percentage": 32.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 8.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.14",
        "ok": "7.14",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
