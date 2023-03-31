package com.yapadelivery.backend.service;

import com.yapadelivery.backend.dto.AfterLogResponseData;
import com.yapadelivery.backend.dto.FarmerInformationDto;
import com.yapadelivery.backend.dto.FarmerLoginDto;
import com.yapadelivery.backend.dto.UserProfileResponseDto;

public interface SFDService {
    String SaveFramerLoginData(FarmerInformationDto farmerInformationDto);

    AfterLogResponseData FramerLogin(FarmerLoginDto farmerLoginDto);

    UserProfileResponseDto UserProfileDataGet(String email);
}
