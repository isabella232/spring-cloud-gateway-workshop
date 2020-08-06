package org.springframework.cloud.gateway.sample;

import org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;
import org.springframework.context.annotation.Bean;
import reactor.core.publisher.Mono;

public class Config {
//	@Bean
//	KeyResolver userKeyResolver() {
//		return exchange -> Mono.just(exchange.getRequest().getQueryParams().getFirst("user"));
//	}
}
