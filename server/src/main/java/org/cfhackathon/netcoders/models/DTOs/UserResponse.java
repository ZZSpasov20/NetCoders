package org.cfhackathon.netcoders.models.DTOs;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserResponse {
    private long id;
    private String email;
    private String firstName;
    private String lastName;
}
