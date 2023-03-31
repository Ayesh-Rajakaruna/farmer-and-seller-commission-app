package com.yapadelivery.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Farmer_Information")
public class FarmerInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int FarmerId;
    private String userName;
    private String userEmail;
    private String userPassword;
    private String userStage;
    private String userContactNumber;
}

