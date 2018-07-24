import io.vertx.core.CompositeFuture;
import io.vertx.core.Future;
import io.vertx.core.Verticle;
import io.vertx.core.Vertx;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MainApp {
    public static void main(String []args) {
        Vertx vertx = Vertx.vertx();
        Verticle verticles[] = new Verticle[]{new DataVerticle(), new WebVerticle()};

        List<Future> futures = Arrays.asList(verticles).stream().map(verticle -> {
            Future<Void> future = Future.future();
            vertx.deployVerticle(verticle, ar -> {
                if (ar.succeeded()) {
                    future.complete();
                } else {
                    future.fail(ar.cause());
                }
            });
            return future;
        }).collect(Collectors.toList());

        CompositeFuture.all(futures).setHandler(ar -> {
            if (ar.succeeded()) {
                System.out.println("All server online!");
            } else {
                System.out.println(ar.cause().getLocalizedMessage());
            }
        });
    }
}
