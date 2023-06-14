package com.yapadelivery.backend.controller;

import com.yapadelivery.backend.dto.AfterLogResponseData;
import com.yapadelivery.backend.dto.FarmerInformationDto;
import com.yapadelivery.backend.dto.FarmerLoginDto;
import com.yapadelivery.backend.dto.UserProfileResponseDto;
import com.yapadelivery.backend.service.SFDService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1")
@CrossOrigin
@RequiredArgsConstructor
public class FarmerController {
    private final SFDService sfdService;
    @PostMapping("/farmerRegister")
    public String SaveLoginData(@RequestBody FarmerInformationDto farmerInformationDto){
        System.out.println(farmerInformationDto);
        String result = sfdService.SaveFramerLoginData(farmerInformationDto);
        return result;
    }
    @PostMapping("farmerLogin")
    public AfterLogResponseData FramerLogin(@RequestBody FarmerLoginDto farmerLoginDto){
        AfterLogResponseData result = sfdService.FramerLogin(farmerLoginDto);
        return result;
    }
    @GetMapping("userProfile/{email}")
    public UserProfileResponseDto UserProfileDataGet(@PathVariable("email") String email){
        System.out.println(email);
        UserProfileResponseDto result = sfdService.UserProfileDataGet(email);
        return result;
    }
}
//This is main branch