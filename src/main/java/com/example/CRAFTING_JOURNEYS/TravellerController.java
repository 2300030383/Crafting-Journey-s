package com.example.CRAFTING_JOURNEYS;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
@Controller
public class TravellerController {
	@GetMapping("/home")
    public String home() {  
    	return "home";
    }
	@GetMapping("/bus")
	public String bus() {
		return "bus";
	}
	@GetMapping("/availableBuses")
	public String availableBuses() {
		return "availableBuses";
	}
	@GetMapping("/JourneyPay")
	public String JourneyPay() {
		return "JourneyPay";
	}
		@GetMapping("/registration")
	public String registration() {
		return "registration";
	}
	@GetMapping("/ticket")
	public String ticket() {
		return "ticket";
	}
@GetMapping("/train")
public String train() {
	return "train";
}
@GetMapping("/availabletrains")
public String availabletrains() {
	return "availabletrains";
}
@GetMapping("/flights")
public String flights() {
	return "flights";
}
@GetMapping("/availableflights")
public String availableflights() {
	return "availableflights";
}
@GetMapping("/DreamDestinationFinder")
public String  DreamDestinationFinder() {
	return " DreamDestinationFinder";
}
@GetMapping("/LocalActivitiesFinder")
public String showPage() {
    return "LocalActivitiesFinder"; // no extension
}
@GetMapping("/Journal")
public String Journal() {
    return "Journal"; // no extension
}
}
