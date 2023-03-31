package com.yapadelivery.backend.mappers;

import com.yapadelivery.backend.dto.FarmerInformationDto;
import com.yapadelivery.backend.entity.FarmerInformation;
import org.springframework.stereotype.Component;

@Component
public class InformationMapper {
    public FarmerInformation FarmerInformationDtoToFarmerInformation(FarmerInformationDto farmerInformationDto){
        FarmerInformation farmerInformation = new FarmerInformation();
        farmerInformation.setUserName(farmerInformationDto.getUserName());
        farmerInformation.setUserEmail(farmerInformationDto.getUserEmail());
        farmerInformation.setUserPassword(farmerInformationDto.getUserPassword());
        farmerInformation.setUserStage(farmerInformationDto.getUserStage());
        farmerInformation.setUserContactNumber(farmerInformationDto.getUserContactNumber());
    return farmerInformation;
    }
}
