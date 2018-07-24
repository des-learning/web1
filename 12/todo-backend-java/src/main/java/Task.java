import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;
import java.util.Objects;

public class Task {
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("description")
    private String description;
    @JsonProperty("created")
    private Date created;
    @JsonProperty("updated")
    private Date updated;
    @JsonProperty("done")
    private Boolean done;

    @JsonCreator
    public Task(String description, Date created, Date updated, Boolean done) {
        this.description = description;
        this.created = created;
        this.updated = updated;
        this.done = done;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }

    public Date getUpdated() {
        return updated;
    }

    public void setUpdated(Date updated) {
        this.updated = updated;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task)) return false;
        Task task = (Task) o;
        return Objects.equals(getId(), task.getId()) &&
                Objects.equals(getDescription(), task.getDescription()) &&
                Objects.equals(getCreated(), task.getCreated()) &&
                Objects.equals(getUpdated(), task.getUpdated()) &&
                Objects.equals(getDone(), task.getDone());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getDescription(), getCreated(), getUpdated(), getDone());
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", created=" + created +
                ", updated=" + updated +
                ", done=" + done +
                '}';
    }
}
