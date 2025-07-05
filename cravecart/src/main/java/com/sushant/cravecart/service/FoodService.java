package com.sushant.cravecart.service;

import com.sushant.cravecart.io.FoodRequest;
import com.sushant.cravecart.io.FoodResponse;
import com.sushant.cravecart.io.PaginatedResponse;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface FoodService {

    String uploadFile(MultipartFile file);

    FoodResponse addFood(FoodRequest request, MultipartFile file);

    List<FoodResponse> getFoods();

    PaginatedResponse<FoodResponse> getPaginatedFoods(Pageable pageable);

    FoodResponse readFood(String foodId);

    boolean deleteFile(String filename);

    void deleteFood(String foodId);

}