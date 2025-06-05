package org.example.spring.AppPolicia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class AppPolicia {
    public static void main(String[]args){
        SpringApplication.run(AppPolicia.class,args);
    }
}
