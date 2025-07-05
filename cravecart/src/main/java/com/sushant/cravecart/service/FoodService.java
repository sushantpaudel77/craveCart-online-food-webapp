package com.sushant.cravecart.service;

import com.sushant.cravecart.io.FoodRequest;
import com.sushant.cravecart.io.FoodResponse;
import org.springframework.web.multipart.MultipartFile;

public interface FoodService {

    String uploadFile(MultipartFile file);
   FoodResponse addFood(FoodRequest request, MultipartFile file);
}
