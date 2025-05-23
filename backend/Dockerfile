FROM openjdk:21-jdk-slim
VOLUME /tmp
WORKDIR /app
COPY target/ymgders-*.jar app.jar
EXPOSE 8086
ENTRYPOINT ["java", "-jar", "app.jar"]