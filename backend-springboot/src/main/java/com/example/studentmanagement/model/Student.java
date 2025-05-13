package com.example.studentmanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "students")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Student {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @NotBlank
    private String name;
    
    @Enumerated(EnumType.STRING)
    private House house;
    
    public enum House {
        GRYFFINDOR,
        SLYTHERIN,
        HUFFLEPUFF,
        RAVENCLAW
    }
}
