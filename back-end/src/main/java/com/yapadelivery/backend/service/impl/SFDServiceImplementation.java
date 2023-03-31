package com.yapadelivery.backend.service.impl;

import com.yapadelivery.backend.dto.AfterLogResponseData;
import com.yapadelivery.backend.dto.FarmerInformationDto;
import com.yapadelivery.backend.dto.FarmerLoginDto;
import com.yapadelivery.backend.dto.UserProfileResponseDto;
import com.yapadelivery.backend.entity.FarmerInformation;
import com.yapadelivery.backend.mappers.InformationMapper;
import com.yapadelivery.backend.repo.FarmerInformationRepo;
import com.yapadelivery.backend.service.SFDService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SFDServiceImplementation implements SFDService {

    private final FarmerInformationRepo farmerInformationRepo;
    private final InformationMapper informationMapper;

    @Override
    public String SaveFramerLoginData(FarmerInformationDto farmerInformationDto) {
        FarmerInformation farmerInformation = informationMapper.FarmerInformationDtoToFarmerInformation(farmerInformationDto);
        if(!farmerInformationRepo.findByUserEmail(farmerInformation.getUserEmail()).isPresent()) {
            try {
                farmerInformationRepo.save(farmerInformation);
                return "Save of user data";
            } catch (Exception e) {
                return "Not save of farmer data";
            }
        }
        else{
            return "Same Email Address";
        }
    }

    @Override
    public AfterLogResponseData FramerLogin(FarmerLoginDto farmerLoginDto) {
        AfterLogResponseData afterLogResponseData = new AfterLogResponseData();
        if(farmerInformationRepo.findByUserEmail(farmerLoginDto.getUserEmail()).isPresent()){
            FarmerInformation currentUser = farmerInformationRepo.findByUserEmail(farmerLoginDto.getUserEmail()).get();
            if((!farmerLoginDto.getUserPassword().equals(currentUser.getUserPassword())) || (!farmerLoginDto.getUserStage().equals(currentUser.getUserStage()))){
                afterLogResponseData.setMessage("Password or user stage is incorrect");
                afterLogResponseData.setUserName("");
                afterLogResponseData.setSuccessStage(false);
                afterLogResponseData.setEmail("");
                afterLogResponseData.setType("error");
                afterLogResponseData.setUserStage("");
            }else{
                afterLogResponseData.setMessage("User log stage is success");
                afterLogResponseData.setUserName(currentUser.getUserName());
                afterLogResponseData.setSuccessStage(true);
                afterLogResponseData.setEmail(currentUser.getUserEmail());
                afterLogResponseData.setType("success");
                afterLogResponseData.setUserStage(currentUser.getUserStage());
            }

        }else {
            afterLogResponseData.setMessage("Email is not database");
            afterLogResponseData.setUserName("");
            afterLogResponseData.setSuccessStage(false);
            afterLogResponseData.setEmail("");
            afterLogResponseData.setType("error");
            afterLogResponseData.setUserStage("");
        }
        return afterLogResponseData;
    }

    @Override
    public UserProfileResponseDto UserProfileDataGet(String email) {
        FarmerInformation currentUser = farmerInformationRepo.findByUserEmail(email).get();
        UserProfileResponseDto userProfileResponseDto = new UserProfileResponseDto();
        userProfileResponseDto.setUserEmail(currentUser.getUserEmail());
        userProfileResponseDto.setUserName(currentUser.getUserName());
        userProfileResponseDto.setUserStage(currentUser.getUserStage());
        userProfileResponseDto.setUserStage(currentUser.getUserContactNumber());
        return userProfileResponseDto;
    }
}
