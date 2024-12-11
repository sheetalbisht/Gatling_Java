package activity;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class Search extends Simulation {

    // ./mvnw gatling:test => cmnd to run test

    int userCount = Integer.getInteger("users", 10);
    int rampDuration = Integer.getInteger("rampDuration", 60);
    int testDuration = Integer.getInteger("testDuration", 120);

    // HTTP configuration
    HttpProtocolBuilder httpProtocol =
            http.baseUrl("https://next-staging.almosafer.com")
                    .header("Content-Type", "application/json")
                    .header("x-authorization", "Bearer I28JS$s928918982SL344&#lSLKJ3#");

    // Search
    ChainBuilder invokeCountrySearchApi = exec(
            http("Country Search API")
                    .get(session -> Utils.getCountrySearchPath())
                    .check(status().is(200))
                    .check(bodyString().saveAs("response" +
                            "Body")))
            .exec(session -> {
                System.out.println("Response Body:- ");
                System.out.println(session.getString("responseBody"));
                return session;
            });


    // Scenario definition
    ScenarioBuilder search = scenario("search").exec(invokeCountrySearchApi);

    // Load simulation
    {
        setUp(
                search.injectOpen(
                        nothingFor(5),
                        rampUsers(userCount).during(rampDuration))
        ).protocols(httpProtocol.inferHtmlResources()
        ).maxDuration(testDuration);
    }
}
