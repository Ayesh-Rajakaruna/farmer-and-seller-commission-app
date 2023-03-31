package com.yapadelivery.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileResponseDto {
    private String userName;
    private String userEmail;
    private String userStage;
    private String userContactNumber;
}
