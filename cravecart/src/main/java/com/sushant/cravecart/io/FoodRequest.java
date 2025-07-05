package com.sushant.cravecart.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FoodRequest {
    private String name;
    private String description;
    private double price;
    private String category;
}
