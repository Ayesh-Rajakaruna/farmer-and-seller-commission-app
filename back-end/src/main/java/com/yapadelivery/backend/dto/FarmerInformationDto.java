package com.yapadelivery.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FarmerInformationDto {
    private String userName;
    private String userEmail;
    private String userPassword;
    private String userStage;
    private String userContactNumber;
}
