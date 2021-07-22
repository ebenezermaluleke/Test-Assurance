import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static org.testng.Assert.assertTrue;

import java.time.LocalDate;
import java.time.Period;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class TestClass {
	private int age;
	
	public String agecheck(LocalDate borndate, LocalDate current) {
		borndate = LocalDate.of(1996, 1, 15);
		current = LocalDate.now();
		//return Period.between(borndate, current).getYears();
		if(Period.between(borndate, current).getYears()>=18) {
			age = Period.between(borndate, current).getYears();
			System.out.println("Age : " + age);
			return "Client is older than 18";
		}else {
			age = Period.between(borndate, current).getYears();
			System.out.println("Age : " + age);
			return "Client is younger than 18 years";
		}
	
	}
	
	public static boolean namecheck(String name) {
		return name.matches("[A-Z][a-z]*");
	}
	
	public  static boolean accountCheck(String accNumber) {
		
		//Pattern pattern = Pattern.compile("^[0-9]{10}?$");
		//Matcher matcher = pattern.matcher(accNumber);
		//assertTrue(matcher.matches());
		return accNumber.matches("^[0-9]{10}?$");
	}
	@Test
	public void testPost() {
		JSONObject  request= new JSONObject();
		String name = "Hlohlo";
		String surname = "Nkuna";
		String accNo = "1111111111";
		if(namecheck(name)== true) {
			request.put("Name",name);
		}
		
		if(namecheck(surname)== true) {
			request.put("Surname",surname);
		}
		
		if(accountCheck(accNo)==true) {
			request.put("BankAccount",accNo);
		}
		request.put("Age", age);
		request.put("bankid","4");
		
		
		baseURI="http://localhost:3000/";
		given()
			.contentType(ContentType.JSON)
			.accept(ContentType.JSON)
			.header("Content-Type", "application/json")
			.body(request.toJSONString())
		.when()
			.post("/Users")
		.then()
			.statusCode(201);
		
	}
	
	@Test
	public void testGet() {
		
		baseURI ="http://localhost:3000/";
		given()
		.get("/Users").then().statusCode(200).log().all();
	}
}
