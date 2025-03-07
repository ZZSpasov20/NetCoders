package org.cfhackathon.netcoders;

import org.cfhackathon.netcoders.config.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties.class)
public class NetcodersApplication {
	public static void main(String[] args) {
		SpringApplication.run(NetcodersApplication.class, args);
	}

}
