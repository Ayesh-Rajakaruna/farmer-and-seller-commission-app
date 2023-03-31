package com.yapadelivery.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AfterLogResponseData {
    private String message;
    private String userName;
    private boolean successStage;
    private String email;
    private String type;
    private String userStage;
}
