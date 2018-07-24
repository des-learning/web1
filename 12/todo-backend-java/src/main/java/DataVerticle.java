import io.vertx.core.AbstractVerticle;
import io.vertx.core.CompositeFuture;
import io.vertx.core.Future;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.jdbc.JDBCClient;
import io.vertx.ext.sql.ResultSet;
import io.vertx.ext.sql.SQLClient;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class DataVerticle extends AbstractVerticle {
    private SQLClient client;

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        JsonObject config = new JsonObject()
                .put("url", "jdbc:hsqldb:mem:test?shutdown=true")
                .put("driver_class", "org.hsqldb.jdbcDriver")
                .put("max_pool_size", 30);

        client = JDBCClient.createShared(vertx, config);

        createSchema().setHandler(ar -> {
            if (ar.succeeded())
                startFuture.complete();
            else
                startFuture.fail(ar.cause());
        });
    }

    private Future<Void> createSchema() {
        Future<Void> future = Future.future();
        String schema =
            "create table task " +
                "(id integer identity primary key, " +
                "description varchar(255), " +
                "created timestamp, " +
                "updated timestamp, " +
                "done boolean default false)";

        client.query(schema, ar -> {
            if (ar.succeeded())
                future.complete();
            else
                future.fail(ar.cause());
        });

        return future;
    }
}
