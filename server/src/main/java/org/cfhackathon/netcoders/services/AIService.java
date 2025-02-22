package org.cfhackathon.netcoders.services;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.List;

@Service
public class AIService {

    @Value("${openai.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    // Method to get AI insights on product trends
    public String analyzeTrends(List<?> data, String prompt) {
        try {
            String chatPrompt = prompt + "\n" + objectMapper.writeValueAsString(data);

            // Request payload
            String requestBody = "{\"model\": \"gpt-4\", \"messages\": [{\"role\": \"system\", \"content\": \"You analyze shopping trends and return JSON for visualization.\"}, {\"role\": \"user\", \"content\": \"" + chatPrompt + "\"}], \"response_format\": \"json\"}";

            String response = restTemplate.postForObject(
                    "https://api.openai.com/v1/chat/completions",
                    requestBody,
                    String.class
            );

            // Extract AI response
            JsonNode responseJson = objectMapper.readTree(response);
            return responseJson.get("choices").get(0).get("message").get("content").asText();

        } catch (Exception e) {
            return "{\"error\": \"Error processing AI analysis: " + e.getMessage() + "\"}";
        }
    }

}
