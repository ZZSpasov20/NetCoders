package org.cfhackathon.netcoders.models.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ReturnJson<T> {
    private T object;
    private boolean success;
    private String message;

    // Static helper methods for common responses
    public static ReturnJson<Void> success() {
        return new ReturnJson<>(null, true, null);
    }

    public static <T> ReturnJson<T> success(T object) {
        return new ReturnJson<>(object, true, null);
    }

    public static <T> ReturnJson<T> success(T object, String message) {
        return new ReturnJson<>(object, true, message);
    }

    public static <T> ReturnJson<T> failure(String message) {
        return new ReturnJson<>(null, false, message);
    }
}

