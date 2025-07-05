package com.sushant.cravecart.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sushant.cravecart.io.FoodRequest;
import com.sushant.cravecart.io.FoodResponse;
import com.sushant.cravecart.io.PaginatedResponse;
import com.sushant.cravecart.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/api/foods")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class FoodController {

    private final FoodService foodService;
    private final ObjectMapper objectMapper;

    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<FoodResponse> addFood(
            @RequestPart("food") String foodString,
            @RequestPart("file") MultipartFile file) {

        FoodRequest request;
        try {
            request = objectMapper.readValue(foodString, FoodRequest.class);
        } catch (JsonProcessingException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
        }
        FoodResponse foodResponse = foodService.addFood(request, file);
        return ResponseEntity.status(HttpStatus.CREATED).body(foodResponse);
    }

    @GetMapping
    public ResponseEntity<PaginatedResponse<FoodResponse>> getPaginatedFoods(
            @PageableDefault(
                    size = 10,
                    sort = "name",
                    direction = Sort.Direction.ASC)
            Pageable pageable) {
        PaginatedResponse<FoodResponse> foodResponses = foodService.getPaginatedFoods(pageable);
        return ResponseEntity.ok(foodResponses);
    }

    @GetMapping("/{foodId}")
    public ResponseEntity<FoodResponse> getFood(@PathVariable("foodId") String foodId) {
        FoodResponse foodResponse = foodService.readFood(foodId);
        return ResponseEntity.ok(foodResponse);
    }

    @DeleteMapping("/{foodId}")
    public ResponseEntity<Void> deleteFood(@PathVariable("foodId") String foodId) {
        foodService.deleteFood(foodId);
        return ResponseEntity.noContent().build();
    }
}
