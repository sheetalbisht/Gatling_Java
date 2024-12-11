package activity;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;


public class Utils {

    private static int getRandomNumber(int min, int max) {
        return (int) ((Math.random() * (max - min)) + min);
    }

    public static String getSuggestionsPath()
    {
        String arrName[] = {"Singapore","Flyer","Studios","Bicycle","tour","dummy", "dunes", "Experiences", "Attractions", "Experiences", "Parks", "Theme Park", "Tours", "Water Parks", "beauty", "car", "snorkeling", "spa", "spa & beauty", "Oasis", "train", "car",
        "adventure", "desert", "heena", "quad bike", "Riyadh", "aquarium", "golf", "cable car", "Gondola & Skywheels", "Spa & Massage", "Diving", "racing", "resort", "adventure", "golf", "resort", "beach"};
        String url = "/api/ignite/activities/suggestions?name=" + arrName[getRandomNumber(0,arrName.length-1)];
        System.out.println(url);
        return url;
    }

    public static String getCountrySearchPath()
    {
        int arrCountryIds[] = {433,403}; // active countryids having activity in dev
        String url = "/api/ignite/activities?pageNo=1&pageSize=500&countries=" + arrCountryIds[getRandomNumber(0,arrCountryIds.length-1)];
        System.out.println(url);
        return url;
    }

    public static String getCategorySearchPath()
    {
        int arrCategoryIds[] = {639,629,684,655,636,637,645,634,632,658,685,651,649,631,643,656,647,695,678,687,690,669,642,646,644,672,648,691,692,697,680,654,675,628,696,641,689,653,638,699,635}; // active categoryids having activity in dev
        //{302,312,319} - active categoryids having activity in dev
        String url = "/api/ignite/activities?pageNo=1&pageSize=500&categories=" + arrCategoryIds[getRandomNumber(0,arrCategoryIds.length-1)];
        System.out.println(url);
        return url;
    }

    public static String getCitySearchPath()
    {
        int arrCityIds[] = {453,596,524,450,446,448,767,531,572}; // active cityids having activity in dev
        String url = "/api/ignite/activities?pageNo=1&pageSize=500&cities=" + arrCityIds[getRandomNumber(0,arrCityIds.length-1)];
        System.out.println(url);
        return url;
    }

    public static String getSearchId(String searchRes) throws ParseException {
        JSONParser parser = new JSONParser();
        org.json.simple.JSONObject jsonObj = (org.json.simple.JSONObject) parser.parse(searchRes);
        String searchId = String.valueOf(jsonObj.get("searchId"));
        return searchId;
    }

    public static String getCreateCartPayload (String activityId, String packageId, String skuId, String checkInDatetime) {
        JSONObject finalObject = new JSONObject();
        JSONArray skuArray = new JSONArray();
        JSONObject skuObject = new JSONObject();
        skuObject.put("quantity", "1");
        skuObject.put("skuId", skuId);
        skuArray.put(skuObject);
        finalObject.put("activityId", activityId);
        finalObject.put("packageId", packageId);
        finalObject.put("checkInDatetime", checkInDatetime);
        finalObject.put("skus", skuArray);
        System.out.println("Create CartPayload - " + finalObject.toString());
        return finalObject.toString();
    }

    public static String getAddContactInfoPayload () {
        JSONObject finalObject = new JSONObject();
        JSONObject contactObject = new JSONObject();
        contactObject.put("title", "Mrs");
        contactObject.put("firstName", "Sheetal");
        contactObject.put("lastName", "Bisht");
        contactObject.put("email", "sheetal.bisht@seera.sa");
        contactObject.put("phoneNumber", "34344343");
        contactObject.put("countryDialingCode", "+971");
        finalObject.put("contact", contactObject);
        System.out.println("Contact Info Payload - " + finalObject.toString());
        return finalObject.toString();
    }

    public static String getCheckoutPayload (String total) {
        JSONObject finalObject = new JSONObject();
        JSONObject paymentObject = new JSONObject();
        JSONObject cardObject = new JSONObject();
        cardObject.put("name", "LoadTest");
        cardObject.put("number", "5436031030606378");
        cardObject.put("expiryMonth", "12");
        cardObject.put("expiryYear", "2023");
        cardObject.put("cvv", "257");
        paymentObject.put("card", cardObject);
        paymentObject.put("method", "checkoutcom");
        finalObject.put("payment", paymentObject);
        finalObject.put("total", total);
        System.out.println("Checkout Payload - " + finalObject.toString());
        return finalObject.toString();
    }
}
