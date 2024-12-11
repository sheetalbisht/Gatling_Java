var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "896",
        "ok": "896",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles1": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 50.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 40.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 10.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.91",
        "ok": "0.91",
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
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "615",
        "ok": "615",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "896",
        "ok": "896",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "260",
        "ok": "260",
        "ko": "-"
    },
    "percentiles1": {
        "total": "955",
        "ok": "955",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1002",
        "ok": "1002",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1449",
        "ok": "1449",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 50.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 40.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 10.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.91",
        "ok": "0.91",
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
