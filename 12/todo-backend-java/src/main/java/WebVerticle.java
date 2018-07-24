import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;

import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

public class WebVerticle extends AbstractVerticle {
    private List<Task> tasks = Arrays.asList(new Task[]{
            new Task("Hello world", new Date(), new Date(), false),
            new Task("Bye world", new Date(), new Date(), false),
            new Task("Completed task 1", new Date(), new Date(), true),
            new Task("Completed task 2", new Date(), new Date(), true)
        });

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        HttpServer http = createServer();

        http.listen(8080, ar -> {
            if (ar.succeeded()) {
                startFuture.complete();
            } else {
                startFuture.fail(ar.cause());
            }
        });
    }

    private HttpServer createServer() {
        HttpServer http = vertx.createHttpServer();
        Router router = createRouter();

        http.requestHandler(request -> {
            router.accept(request);
        });

        return http;
    }

    private Router createRouter() {
        Router router = Router.router(vertx);

        // register routes
        router.get("/").handler(this::index);
        router.get("/allTasks").handler(this::allTasks);
        router.get("/task/:id").handler(this::getTask);

        return router;
    }

    private void index(RoutingContext context) {
        context.response().end("Hello");
    }

    private void allTasks(RoutingContext context) {


        context.response().putHeader("Content-Type", "application/json; charset=utf-8")
                .end(new JsonArray(tasks).encodePrettily());
    }

    private void getTask(RoutingContext context) {
        if (parseInt(context.pathParam("id")).isPresent()) {
            Integer id = parseInt(context.pathParam("id")).get();
            if (getTask(id).isPresent()) {
                context.response().putHeader("Content-Type", "application/json; charset=utf-8")
                        .end(JsonObject.mapFrom(getTask(id).get()).encodePrettily());
            } else {
                context.response().setStatusCode(404).end();
            }
        } else {
            context.response().setStatusCode(400).end();
        }
    }

    private Optional<Task> getTask(Integer id) {
        try {
            return Optional.of(tasks.get(id));
        } catch (Exception e) {
            return Optional.empty();
        }
    }

    private Optional<Integer> parseInt(String s) {
        try {
            return Optional.of(Integer.parseInt(s));
        } catch(Exception e) {
            return Optional.empty();
        }
    }
}
